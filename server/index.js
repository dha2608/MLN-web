import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import passport from './config/passport.js';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import chatRoutes from './routes/chat.js';
import philosophersRoutes, { seedPhilosophers } from './routes/philosophers.js';
import conceptsRoutes, { seedConcepts } from './routes/concepts.js';
import quizRoutes from './routes/quiz.js';
import quoteRoutes from './routes/quote.js';
import statsRoutes from './routes/stats.js';
import schoolsRoutes from './routes/schools.js';
import timelineRoutes from './routes/timeline.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.set('trust proxy', 1);

// Connect DB then seed data ONCE at startup
connectDB().then(async () => {
  try {
    await Promise.all([seedPhilosophers(), seedConcepts()]);
    console.log('Data seeded at startup');
  } catch (err) {
    console.error('Seed error (non-fatal):', err.message);
  }
});

// CORS — must be BEFORE helmet so preflight works
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'https://mln-web-bay.vercel.app',
  'http://localhost:5173',
  'http://localhost:4173',
].filter(Boolean);

app.use(cors({
  origin: (origin, cb) => {
    // Allow requests with no origin (mobile apps, curl, server-to-server)
    if (!origin) return cb(null, true);
    if (allowedOrigins.some(o => origin.startsWith(o))) return cb(null, true);
    cb(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

// Security headers — configured to allow cross-origin requests from frontend
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  crossOriginOpenerPolicy: { policy: 'same-origin-allow-popups' },
}));

// Global rate limit: 100 requests per 15 minutes per IP
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Quá nhiều yêu cầu, vui lòng thử lại sau.' }
}));

app.use(express.json());

// Passport (stateless — no session, JWT only)
app.use(passport.initialize());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
// Stricter rate limit for chat: 20 messages per 15 minutes per IP
const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Bạn đã gửi quá nhiều tin nhắn, vui lòng thử lại sau.' }
});
app.use('/api/chat', chatLimiter, chatRoutes);
app.use('/api/philosophers', philosophersRoutes);
app.use('/api/concepts', conceptsRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/quote', quoteRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/schools', schoolsRoutes);
app.use('/api/timeline', timelineRoutes);

app.get('/api/health', (_, res) => res.json({ ok: true }));

// 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: 'Không tìm thấy endpoint này.' });
});

// Global error handler
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Lỗi máy chủ nội bộ.' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
