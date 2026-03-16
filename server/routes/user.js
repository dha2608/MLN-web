import { Router } from 'express';
import User from '../models/User.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

router.get('/profile', requireAuth, async (req, res) => {
  try {
    const u = await User.findById(req.user._id)
      .select('_id name email avatar visitCount lastLoginAt sessions')
      .lean();
    if (!u) return res.status(404).json({ error: 'Không tìm thấy người dùng' });
    res.json({
      id: u._id,
      name: u.name,
      email: u.email,
      avatar: u.avatar,
      visitCount: u.visitCount ?? 0,
      lastLoginAt: u.lastLoginAt,
      sessionCount: u.sessions?.length || 0
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
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
