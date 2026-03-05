import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || process.env.SESSION_SECRET || 'philosophy-jwt-secret';
const EXPIRES_IN = '7d';

export function signToken(user) {
  return jwt.sign(
    { id: user._id, name: user.name, email: user.email, avatar: user.avatar },
    SECRET,
    { expiresIn: EXPIRES_IN }
  );
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}
