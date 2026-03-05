import mongoose from 'mongoose';

const conceptSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  philosopherRef: { type: mongoose.Schema.Types.ObjectId, ref: 'Philosopher' },
  school: { type: String, default: '' }
}, { timestamps: true });

export default mongoose.model('Concept', conceptSchema);
