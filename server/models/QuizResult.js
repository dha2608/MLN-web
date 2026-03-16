import mongoose from 'mongoose';

const quizResultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  primarySchool: { type: String, required: true },
  score: { type: Map, of: Number, default: {} },
}, { timestamps: true });

// Performance indexes
quizResultSchema.index({ user: 1 });
quizResultSchema.index({ primarySchool: 1 });

export default mongoose.model('QuizResult', quizResultSchema);
