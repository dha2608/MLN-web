import User from '../models/User.js';
import { verifyToken } from '../utils/jwt.js';

/**
 * Extract JWT from Authorization header: "Bearer <token>"
 */
function extractToken(req) {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.slice(7);
  }
  return null;
}

/**
 * Require authentication — returns 401 if no valid token
 * Uses .lean() and .select() for faster queries
 */
export async function requireAuth(req, res, next) {
  const token = extractToken(req);
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  const payload = verifyToken(token);
  if (!payload) return res.status(401).json({ error: 'Token không hợp lệ hoặc đã hết hạn' });

  try {
    const user = await User.findById(payload.id).select('_id name email avatar googleId').lean();
    if (!user) return res.status(401).json({ error: 'Người dùng không tồn tại' });
    req.user = user;
    next();
  } catch {
    res.status(500).json({ error: 'Lỗi xác thực' });
  }
}

/**
 * Optional authentication — sets req.user if valid token present, otherwise null
 * Uses .lean() and .select() for faster queries
 */
export async function optionalAuth(req, res, next) {
  const token = extractToken(req);
  if (!token) {
    req.user = null;
    return next();
  }

  const payload = verifyToken(token);
  if (!payload) {
    req.user = null;
    return next();
  }

  try {
    req.user = await User.findById(payload.id).select('_id name email avatar googleId').lean();
  } catch {
    req.user = null;
  }
  next();
}
