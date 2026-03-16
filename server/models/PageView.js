import mongoose from 'mongoose';

const pageViewSchema = new mongoose.Schema({
  visitorId: { type: String, required: true },
  page: { type: String, required: true },
  referrer: { type: String, default: '' },
  userAgent: { type: String, default: '' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  createdAt: { type: Date, default: Date.now }
});

// Indexes for fast stats queries
pageViewSchema.index({ createdAt: -1 });
pageViewSchema.index({ visitorId: 1, createdAt: -1 });
pageViewSchema.index({ page: 1, createdAt: -1 });
pageViewSchema.index({ user: 1 }, { sparse: true });

export default mongoose.model('PageView', pageViewSchema);
