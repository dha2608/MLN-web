import { Router } from 'express';
import ChatMessage from '../models/ChatMessage.js';
import User from '../models/User.js';

const router = Router();

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

router.get('/overview', async (req, res) => {
  try {
    const [userCount, messageCount, totalSessions] = await Promise.all([
      User.countDocuments(),
      ChatMessage.countDocuments({ role: 'user' }),
      User.aggregate([{ $project: { n: { $size: '$sessions' } } }, { $group: { _id: null, total: { $sum: '$n' } } }]).then(r => r[0]?.total || 0)
    ]);
    res.json({
      totalUsers: userCount,
      totalQuestions: messageCount,
      totalSessions: totalSessions
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
