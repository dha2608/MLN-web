import mongoose from 'mongoose';

const chatMessageSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, enum: ['user', 'assistant'], required: true },
  content: { type: String, required: true },
  topicDetected: { type: String, default: '' },
  rejected: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('ChatMessage', chatMessageSchema);
