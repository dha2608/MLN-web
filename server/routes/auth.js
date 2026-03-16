import { Router } from 'express';
import passport from '../config/passport.js';
import { signToken } from '../utils/jwt.js';
import { requireAuth } from '../middleware/auth.js';
import User from '../models/User.js';

const router = Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login', session: false }),
  (req, res) => {
    // Generate JWT token and redirect to frontend with token in URL
    const token = signToken(req.user);
    const frontend = process.env.FRONTEND_URL || 'https://mln-web-bay.vercel.app';
    res.redirect(`${frontend}/?token=${token}`);
  }
);

router.get('/me', requireAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .select('_id name email avatar visitCount lastLoginAt')
      .lean();
    if (!user) return res.status(404).json({ error: 'Không tìm thấy người dùng' });
    res.json({
      user: { id: user._id, name: user.name, email: user.email, avatar: user.avatar, visitCount: user.visitCount ?? 0, lastLoginAt: user.lastLoginAt }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/logout', (req, res) => {
  // JWT is stateless — logout is handled client-side by removing token
  res.json({ ok: true });
});

export default router;
