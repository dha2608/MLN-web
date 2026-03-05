import { Router } from 'express';
import passport from '../config/passport.js';
import { signToken } from '../utils/jwt.js';
import { requireAuth } from '../middleware/auth.js';

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

router.get('/me', requireAuth, (req, res) => {
  const { _id, name, email, avatar, visitCount, lastLoginAt } = req.user;
  res.json({
    user: { id: _id, name, email, avatar, visitCount, lastLoginAt }
  });
});

router.post('/logout', (req, res) => {
  // JWT is stateless — logout is handled client-side by removing token
  res.json({ ok: true });
});

export default router;
