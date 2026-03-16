import { Router } from 'express';
import Philosopher from '../models/Philosopher.js';
import { PHILOSOPHERS } from '../data/philosophyKnowledge.js';

const router = Router();

// Seed runs ONCE at startup, not on every request
let seeded = false;
async function seedPhilosophers() {
  if (seeded) return;
  try {
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
    seeded = true;
    console.log('Philosophers seeded');
  } catch (err) {
    console.error('Seed philosophers error:', err);
  }
}

// Export for startup seeding
export { seedPhilosophers };

// In-memory cache for philosopher list (small dataset ~10 items)
let listCache = null;
let listCacheTime = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

router.get('/', async (req, res) => {
  try {
    const now = Date.now();
    if (!listCache || now - listCacheTime > CACHE_TTL) {
      listCache = await Philosopher.find().sort({ name: 1 }).lean();
      listCacheTime = now;
    }
    res.json({ philosophers: listCache });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const p = await Philosopher.findOne({ slug: req.params.slug }).lean();
    if (!p) return res.status(404).json({ error: 'Not found' });
    const extra = PHILOSOPHERS[p.slug];
    res.json({ philosopher: { ...p, concepts: extra?.concepts || [], quotes: extra?.quotes || [], works: extra?.works || [], influences: extra?.influences || [], influencedBy: extra?.influencedBy || [], era: extra?.era || '' } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
