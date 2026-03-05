import 'dotenv/config';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js';

// Build absolute callback URL for production (relative URL fails behind Render proxy)
const callbackURL = process.env.NODE_ENV === 'production'
  ? `${process.env.BACKEND_URL || 'https://mln-web-wbo8.onrender.com'}/api/auth/google/callback`
  : '/api/auth/google/callback';

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL,
  proxy: true
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });
    if (!user) {
      user = await User.create({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails?.[0]?.value || '',
        avatar: profile.photos?.[0]?.value || '',
        visitCount: 1,
        lastLoginAt: new Date(),
        sessions: [{ startedAt: new Date() }]
      });
    } else {
      user.visitCount += 1;
      user.lastLoginAt = new Date();
      user.sessions.push({ startedAt: new Date() });
      await user.save();
    }
    return done(null, user);
  } catch (err) {
    return done(err, null);
  }
}));

// Serialize/deserialize still needed by passport even with session: false
passport.serializeUser((user, done) => done(null, user._id));
passport.deserializeUser(async (id, done) => {
  try {
    done(null, await User.findById(id));
  } catch (err) {
    done(err, null);
  }
});

export default passport;
