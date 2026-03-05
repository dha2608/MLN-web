import mongoose from 'mongoose';

const philosopherSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  nameVi: { type: String, default: '' },
  birthDeath: { type: String, default: '' },
  school: { type: String, default: '' },
  summary: { type: String, default: '' },
  imageUrl: { type: String, default: '' },
  imageAlt: { type: String, default: '' },
  imageCaption: { type: String, default: '' },
  imageSource: { type: String, default: '' },
  imageSourceUrl: { type: String, default: '' }
}, { timestamps: true });

export default mongoose.model('Philosopher', philosopherSchema);
