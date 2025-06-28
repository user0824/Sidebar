import { Router } from 'express';
import {
  chatHandler,
  streamChatHandler,
} from '../controllers/openaiController.ts';

const router = Router();

// POST /api - Regular chat (keep for backwards compatibility)
router.post('/', chatHandler);

// POST /api/stream - Streaming chat
router.post('/stream', streamChatHandler);

export default router;
