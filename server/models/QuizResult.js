import mongoose from 'mongoose';

const quizResultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  primarySchool: { type: String, required: true },
  score: { type: Map, of: Number, default: {} },
}, { timestamps: true });

export default mongoose.model('QuizResult', quizResultSchema);
