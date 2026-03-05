import { Router } from 'express';
import Philosopher from '../models/Philosopher.js';
import { PHILOSOPHERS } from '../data/philosophyKnowledge.js';

const router = Router();

async function seedPhilosophers() {
  const count = await Philosopher.countDocuments();
  if (count === 0) {
    const docs = Object.entries(PHILOSOPHERS).map(([slug, p]) => ({
      slug,
      name: p.name,
      nameVi: p.nameVi,
      birthDeath: p.birthDeath,
      school: p.school,
      summary: p.summary,
      imageUrl: p.imageUrl || '',
      imageAlt: p.imageAlt || '',
      imageCaption: p.imageCaption || '',
      imageSource: p.imageSource || '',
      imageSourceUrl: p.imageSourceUrl || ''
    }));
    await Philosopher.insertMany(docs);
  } else {
    // Upsert: update existing + insert missing philosophers
    for (const [slug, p] of Object.entries(PHILOSOPHERS)) {
      await Philosopher.updateOne(
        { slug },
        {
          $set: {
            name: p.name,
            nameVi: p.nameVi,
            birthDeath: p.birthDeath,
            school: p.school,
            summary: p.summary,
            imageUrl: p.imageUrl || '',
            imageAlt: p.imageAlt || '',
            imageCaption: p.imageCaption || '',
            imageSource: p.imageSource || '',
            imageSourceUrl: p.imageSourceUrl || ''
          }
        },
        { upsert: true }
      );
    }
  }
}

router.get('/', async (req, res) => {
  try {
    await seedPhilosophers();
    const list = await Philosopher.find().sort({ name: 1 }).lean();
    res.json({ philosophers: list });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    await seedPhilosophers();
    const p = await Philosopher.findOne({ slug: req.params.slug }).lean();
    if (!p) return res.status(404).json({ error: 'Not found' });
    const extra = PHILOSOPHERS[p.slug];
    res.json({ philosopher: { ...p, concepts: extra?.concepts || [], quotes: extra?.quotes || [], works: extra?.works || [], influences: extra?.influences || [], influencedBy: extra?.influencedBy || [], era: extra?.era || '' } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
