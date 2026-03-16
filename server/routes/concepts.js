import { Router } from 'express';
import Concept from '../models/Concept.js';
import { CONCEPTS } from '../data/philosophyKnowledge.js';

const router = Router();

const CONCEPT_TITLES = {
  // Kinh tế chính trị Mác-Lênin
  'giá trị thặng dư': 'Giá trị thặng dư',
  'đấu tranh giai cấp': 'Đấu tranh giai cấp',
  'duy vật biện chứng': 'Duy vật biện chứng',
  'duy vật lịch sử': 'Duy vật lịch sử',
  'tư liệu sản xuất': 'Tư liệu sản xuất',
  'hàng hóa': 'Hàng hóa',
  'chủ nghĩa đế quốc': 'Chủ nghĩa đế quốc',
  'chuyên chính vô sản': 'Chuyên chính vô sản',
  'tha hóa lao động': 'Tha hóa lao động',
  'phép biện chứng': 'Phép biện chứng',
  // Triết học
  'ý niệm': 'Thuyết ý niệm',
  'đối thoại': 'Phương pháp đối thoại',
  'logic': 'Logic học',
  'bổn phận': 'Đạo đức bổn phận',
  'siêu nhân': 'Siêu nhân (Übermensch)',
  'ý chí quyền lực': 'Ý chí quyền lực',
  'trung đạo': 'Trung đạo',
  'eudaimonia': 'Eudaimonia (Hạnh phúc)',
  'mệnh lệnh nhất quyết': 'Mệnh lệnh nhất quyết',
  'cogito': 'Cogito, ergo sum',
  'nhị nguyên luận': 'Nhị nguyên tâm-thể',
  'hoài nghi phương pháp': 'Hoài nghi phương pháp',
  'đạo': 'Đạo (道)',
  'vô vi': 'Vô vi (無為)',
  'tồn tại trước bản chất': 'Tồn tại có trước bản chất',
  'phi lý': 'Sự phi lý (Absurdity)'
};

const CONCEPT_SCHOOLS = {
  // Kinh tế chính trị Mác-Lênin
  'giá trị thặng dư': 'Kinh tế chính trị — Karl Marx',
  'đấu tranh giai cấp': 'Kinh tế chính trị — Karl Marx',
  'duy vật biện chứng': 'Kinh tế chính trị — Karl Marx & Friedrich Engels',
  'duy vật lịch sử': 'Kinh tế chính trị — Karl Marx',
  'tư liệu sản xuất': 'Kinh tế chính trị — Karl Marx',
  'hàng hóa': 'Kinh tế chính trị — Karl Marx',
  'chủ nghĩa đế quốc': 'Kinh tế chính trị — V.I. Lenin',
  'chuyên chính vô sản': 'Kinh tế chính trị — V.I. Lenin',
  'tha hóa lao động': 'Kinh tế chính trị — Karl Marx',
  'phép biện chứng': 'Kinh tế chính trị — Karl Marx & Friedrich Engels',
  // Triết học
  'ý niệm': 'Triết học Hy Lạp cổ đại — Plato',
  'đối thoại': 'Triết học Hy Lạp cổ đại — Socrates',
  'logic': 'Triết học Hy Lạp cổ đại — Aristotle',
  'bổn phận': 'Khai sáng Đức — Immanuel Kant',
  'siêu nhân': 'Hiện sinh — Friedrich Nietzsche',
  'ý chí quyền lực': 'Hiện sinh — Friedrich Nietzsche',
  'trung đạo': 'Triết học Hy Lạp cổ đại — Aristotle',
  'eudaimonia': 'Triết học Hy Lạp cổ đại — Aristotle',
  'mệnh lệnh nhất quyết': 'Khai sáng Đức — Immanuel Kant',
  'cogito': 'Duy lý luận — René Descartes',
  'nhị nguyên luận': 'Duy lý luận — René Descartes',
  'hoài nghi phương pháp': 'Duy lý luận — René Descartes',
  'đạo': 'Đạo giáo — Lão Tử',
  'vô vi': 'Đạo giáo — Lão Tử',
  'tồn tại trước bản chất': 'Chủ nghĩa Hiện sinh — Jean-Paul Sartre',
  'phi lý': 'Chủ nghĩa Hiện sinh — Jean-Paul Sartre / Albert Camus'
};

// Seed runs ONCE at startup, not on every request
let seeded = false;
async function seedConcepts() {
  if (seeded) return;
  try {
    const count = await Concept.countDocuments();
    if (count === 0) {
      const docs = Object.entries(CONCEPTS).map(([slug, desc]) => ({
        slug,
        title: CONCEPT_TITLES[slug] || slug,
        description: desc,
        school: CONCEPT_SCHOOLS[slug] || ''
      }));
      await Concept.insertMany(docs);
    } else {
      for (const [slug, desc] of Object.entries(CONCEPTS)) {
        await Concept.updateOne(
          { slug },
          {
            $set: {
              title: CONCEPT_TITLES[slug] || slug,
              description: desc,
              school: CONCEPT_SCHOOLS[slug] || ''
            }
          },
          { upsert: true }
        );
      }
    }
    seeded = true;
    console.log('Concepts seeded');
  } catch (err) {
    console.error('Seed concepts error:', err);
  }
}

// Export for startup seeding
export { seedConcepts };

// In-memory cache for concept list (small dataset ~16 items)
let listCache = null;
let listCacheTime = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

router.get('/', async (req, res) => {
  try {
    const now = Date.now();
    if (!listCache || now - listCacheTime > CACHE_TTL) {
      listCache = await Concept.find().sort({ title: 1 }).lean();
      listCacheTime = now;
    }
    res.json({ concepts: listCache });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const c = await Concept.findOne({ slug: req.params.slug }).lean();
    if (!c) return res.status(404).json({ error: 'Not found' });
    res.json({ concept: c });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
