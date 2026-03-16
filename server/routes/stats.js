import { Router } from 'express';
import ChatMessage from '../models/ChatMessage.js';
import User from '../models/User.js';
import Philosopher from '../models/Philosopher.js';
import Concept from '../models/Concept.js';
import QuizResult from '../models/QuizResult.js';
import PageView from '../models/PageView.js';
import { optionalAuth } from '../middleware/auth.js';
import { PHILOSOPHERS, SCHOOLS_DETAIL, TIMELINE } from '../data/philosophyKnowledge.js';

const router = Router();

// --- Track page view (public, no auth required) ---
router.post('/track', optionalAuth, async (req, res) => {
  try {
    const { page, visitorId, referrer } = req.body;
    if (!page || !visitorId) return res.status(400).json({ error: 'page and visitorId required' });

    await PageView.create({
      visitorId,
      page,
      referrer: referrer || '',
      userAgent: req.headers['user-agent'] || '',
      user: req.user?._id || null,
    });

    res.json({ ok: true });
  } catch (err) {
    // Non-critical — don't fail the page load
    res.json({ ok: true });
  }
});

// --- Overview: counts from DB + knowledge base ---
router.get('/overview', async (req, res) => {
  try {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const [userCount, messageCount, totalSessions, philosopherCount, conceptCount,
           totalPageViews, todayPageViews, weekPageViews, monthPageViews,
           uniqueVisitorsTotal, uniqueVisitorsToday, uniqueVisitorsWeek] = await Promise.all([
      User.countDocuments(),
      ChatMessage.countDocuments({ role: 'user' }),
      User.aggregate([
        { $project: { n: { $size: { $ifNull: ['$sessions', []] } } } },
        { $group: { _id: null, total: { $sum: '$n' } } }
      ]).then(r => r[0]?.total || 0),
      Philosopher.countDocuments(),
      Concept.countDocuments(),
      // PageView stats — each with individual catch to avoid breaking overview
      PageView.countDocuments().catch(() => 0),
      PageView.countDocuments({ createdAt: { $gte: todayStart } }).catch(() => 0),
      PageView.countDocuments({ createdAt: { $gte: weekAgo } }).catch(() => 0),
      PageView.countDocuments({ createdAt: { $gte: monthAgo } }).catch(() => 0),
      PageView.aggregate([
        { $group: { _id: '$visitorId' } },
        { $count: 'total' }
      ]).then(r => r[0]?.total || 0).catch(() => 0),
      PageView.aggregate([
        { $match: { createdAt: { $gte: todayStart } } },
        { $group: { _id: '$visitorId' } },
        { $count: 'total' }
      ]).then(r => r[0]?.total || 0).catch(() => 0),
      PageView.aggregate([
        { $match: { createdAt: { $gte: weekAgo } } },
        { $group: { _id: '$visitorId' } },
        { $count: 'total' }
      ]).then(r => r[0]?.total || 0).catch(() => 0),
    ]);

    // Count from static knowledge
    let totalQuotes = 0;
    let totalConcepts = 0;
    let totalWorks = 0;
    for (const p of Object.values(PHILOSOPHERS)) {
      totalQuotes += p.quotes?.length || 0;
      totalConcepts += p.concepts?.length || 0;
      totalWorks += p.works?.length || 0;
    }

    res.json({
      totalUsers: userCount,
      totalQuestions: messageCount,
      totalSessions,
      totalPhilosophers: philosopherCount,
      totalConceptsDB: conceptCount,
      totalSchools: Object.keys(SCHOOLS_DETAIL).length,
      totalTimelineEvents: TIMELINE.length,
      totalQuotes,
      totalConcepts,
      totalWorks,
      // Visitor tracking
      totalPageViews,
      todayPageViews,
      weekPageViews,
      monthPageViews,
      uniqueVisitorsTotal,
      uniqueVisitorsToday,
      uniqueVisitorsWeek,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- School distribution: philosophers per school ---
router.get('/school-distribution', async (req, res) => {
  try {
    const distribution = [];
    for (const [, school] of Object.entries(SCHOOLS_DETAIL)) {
      distribution.push({
        name: school.name,
        icon: school.icon,
        era: school.era,
        count: school.philosophers?.length || 0,
        philosophers: school.philosophers || [],
        keyIdeas: school.keyIdeas?.slice(0, 3) || [],
      });
    }
    // Sort by count descending
    distribution.sort((a, b) => b.count - a.count);
    res.json({ distribution });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Era distribution: timeline events per era ---
router.get('/era-distribution', async (req, res) => {
  try {
    const eraMap = {};
    for (const event of TIMELINE) {
      const era = event.era || 'Không xác định';
      if (!eraMap[era]) eraMap[era] = { era, count: 0, events: [] };
      eraMap[era].count += 1;
      eraMap[era].events.push({ year: event.year, event: event.event, philosopher: event.philosopher });
    }
    const eras = Object.values(eraMap);
    res.json({ eras });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Philosopher knowledge richness: quotes, concepts, works per philosopher ---
router.get('/philosopher-richness', async (req, res) => {
  try {
    const richness = [];
    for (const [key, p] of Object.entries(PHILOSOPHERS)) {
      richness.push({
        name: p.nameVi || p.name,
        slug: key,
        school: p.school,
        quotes: p.quotes?.length || 0,
        concepts: p.concepts?.length || 0,
        works: p.works?.length || 0,
        total: (p.quotes?.length || 0) + (p.concepts?.length || 0) + (p.works?.length || 0),
      });
    }
    richness.sort((a, b) => b.total - a.total);
    res.json({ richness });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Top philosopher topics from chat ---
router.get('/top-philosophers', async (req, res) => {
  try {
    const topics = await ChatMessage.aggregate([
      { $match: { role: 'user', topicDetected: { $exists: true, $ne: '' }, rejected: { $ne: true } } },
      { $group: { _id: '$topicDetected', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);
    res.json({ topics: topics.map(t => ({ name: t._id, count: t.count })) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Hot questions from chat ---
router.get('/hot-questions', async (req, res) => {
  try {
    const questions = await ChatMessage.aggregate([
      { $match: { role: 'user', rejected: { $ne: true } } },
      { $group: { _id: '$content', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);
    res.json({ questions: questions.map(q => ({ text: q._id, count: q.count })) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Recent activity ---
router.get('/recent-activity', async (req, res) => {
  try {
    const [recentUsers, recentMessages] = await Promise.all([
      User.find().sort({ lastLoginAt: -1 }).limit(5).select('name avatar lastLoginAt').lean(),
      ChatMessage.find({ role: 'user', rejected: { $ne: true } })
        .sort({ createdAt: -1 })
        .limit(8)
        .select('content topicDetected createdAt')
        .lean()
    ]);
    res.json({
      recentUsers: recentUsers.map(u => ({
        name: u.name,
        avatar: u.avatar,
        lastLoginAt: u.lastLoginAt,
      })),
      recentMessages: recentMessages.map(m => ({
        content: m.content?.slice(0, 100),
        topic: m.topicDetected,
        createdAt: m.createdAt,
      })),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Quiz result distribution ---
router.get('/quiz-distribution', async (req, res) => {
  try {
    const [distribution, totalQuizzes] = await Promise.all([
      QuizResult.aggregate([
        { $group: { _id: '$primarySchool', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
      ]),
      QuizResult.countDocuments()
    ]);
    res.json({
      totalQuizzes,
      distribution: distribution.map(d => ({
        school: d._id,
        count: d.count,
        percent: totalQuizzes > 0 ? Math.round((d.count / totalQuizzes) * 100) : 0,
      }))
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Chat activity over time (last 30 days) ---
router.get('/chat-activity', async (req, res) => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const activity = await ChatMessage.aggregate([
      { $match: { role: 'user', createdAt: { $gte: thirtyDaysAgo } } },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    res.json({
      activity: activity.map(a => ({ date: a._id, count: a.count }))
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- User engagement stats ---
router.get('/engagement', async (req, res) => {
  try {
    const [
      totalUsers,
      activeToday,
      activeWeek,
      avgVisits,
      topChatters
    ] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({ lastLoginAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } }),
      User.countDocuments({ lastLoginAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } }),
      User.aggregate([{ $group: { _id: null, avg: { $avg: '$visitCount' } } }]).then(r => Math.round(r[0]?.avg || 0)),
      ChatMessage.aggregate([
        { $match: { role: 'user' } },
        { $group: { _id: '$user', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 5 },
        { $lookup: { from: 'users', localField: '_id', foreignField: '_id', as: 'userInfo' } },
        { $unwind: { path: '$userInfo', preserveNullAndEmptyArrays: true } },
        { $project: { name: '$userInfo.name', avatar: '$userInfo.avatar', count: 1 } }
      ])
    ]);

    res.json({
      totalUsers,
      activeToday,
      activeWeek,
      avgVisits,
      topChatters: topChatters.map(c => ({ name: c.name || 'Ẩn danh', avatar: c.avatar || '', count: c.count })),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Visitor activity over time (last 30 days) ---
router.get('/visitor-activity', async (req, res) => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const activity = await PageView.aggregate([
      { $match: { createdAt: { $gte: thirtyDaysAgo } } },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          views: { $sum: 1 },
          visitors: { $addToSet: '$visitorId' }
        }
      },
      { $project: { _id: 1, views: 1, visitors: { $size: '$visitors' } } },
      { $sort: { _id: 1 } }
    ]);
    res.json({
      activity: activity.map(a => ({ date: a._id, views: a.views, visitors: a.visitors }))
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- Top pages ---
router.get('/top-pages', async (req, res) => {
  try {
    const pages = await PageView.aggregate([
      { $group: { _id: '$page', views: { $sum: 1 }, visitors: { $addToSet: '$visitorId' } } },
      { $project: { _id: 1, views: 1, visitors: { $size: '$visitors' } } },
      { $sort: { views: -1 } },
      { $limit: 10 }
    ]);
    res.json({
      pages: pages.map(p => ({ page: p._id, views: p.views, visitors: p.visitors }))
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
