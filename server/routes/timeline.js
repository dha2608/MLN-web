import { Router } from 'express';
import { TIMELINE } from '../data/philosophyKnowledge.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({ timeline: TIMELINE });
});

export default router;
