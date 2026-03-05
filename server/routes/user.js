import { Router } from 'express';
import User from '../models/User.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.get('/profile', requireAuth, (req, res) => {
  const u = req.user;
  res.json({
    id: u._id,
    name: u.name,
    email: u.email,
    avatar: u.avatar,
    visitCount: u.visitCount,
    lastLoginAt: u.lastLoginAt,
    sessionCount: u.sessions?.length || 0
  });
});

router.post('/view-content', requireAuth, async (req, res) => {
  try {
    const { conceptId } = req.body;
    if (!conceptId) return res.status(400).json({ error: 'conceptId required' });
    await User.findByIdAndUpdate(req.user._id, {
      $addToSet: { contentViewed: conceptId }
    });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
