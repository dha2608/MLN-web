import { Router } from 'express';
import ChatMessage from '../models/ChatMessage.js';
import User from '../models/User.js';
import Philosopher from '../models/Philosopher.js';
import Concept from '../models/Concept.js';
import { PHILOSOPHERS, SCHOOLS_DETAIL, TIMELINE } from '../data/philosophyKnowledge.js';

const router = Router();

// --- Overview: counts from DB + knowledge base ---
router.get('/overview', async (req, res) => {
  try {
    const [userCount, messageCount, totalSessions, philosopherCount, conceptCount] = await Promise.all([
      User.countDocuments(),
      ChatMessage.countDocuments({ role: 'user' }),
      User.aggregate([
        { $project: { n: { $size: '$sessions' } } },
        { $group: { _id: null, total: { $sum: '$n' } } }
      ]).then(r => r[0]?.total || 0),
      Philosopher.countDocuments(),
      Concept.countDocuments()
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

export default router;
