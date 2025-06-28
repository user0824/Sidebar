import { Router } from 'express';
import { chatHandler } from '../controllers/openaiController.ts';

const router = Router();

// POST /api to handle AI chat requests
router.post('/', chatHandler);

export default router;
