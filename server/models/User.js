import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  startedAt: { type: Date, default: Date.now }
}, { _id: false });

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, default: '' },
  avatar: { type: String, default: '' },
  visitCount: { type: Number, default: 0 },
  lastLoginAt: { type: Date, default: Date.now },
  sessions: [sessionSchema],
  contentViewed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Concept' }]
}, { timestamps: true });

// Performance indexes
userSchema.index({ lastLoginAt: -1 });
userSchema.index({ visitCount: -1 });

export default mongoose.model('User', userSchema);
