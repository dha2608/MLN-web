import { Router } from 'express';
import ChatMessage from '../models/ChatMessage.js';
import { getChatResponse } from '../data/philosophyKnowledge.js';

const router = Router();

function optionalAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  req.user = null;
  next();
}

router.post('/message', optionalAuth, async (req, res) => {
  try {
    const { content } = req.body;
    if (!content || typeof content !== 'string') {
      return res.status(400).json({ error: 'content required' });
    }
    const trimmed = content.trim().slice(0, 1000);
    const { content: replyContent, topicDetected, rejected } = getChatResponse(trimmed, req.user?._id);

    if (req.user) {
      await ChatMessage.create([
        { user: req.user._id, role: 'user', content: trimmed, topicDetected: rejected ? 'off-topic' : topicDetected, rejected },
        { user: req.user._id, role: 'assistant', content: replyContent, topicDetected, rejected }
      ]);
    }

    res.json({
      reply: replyContent,
      topicDetected,
      rejected
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/history', optionalAuth, async (req, res) => {
  try {
    if (!req.isAuthenticated()) return res.json({ messages: [] });
    const messages = await ChatMessage.find({ user: req.user._id })
      .sort({ createdAt: 1 })
      .select('role content createdAt rejected')
      .limit(100)
      .lean();
    res.json({ messages });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
