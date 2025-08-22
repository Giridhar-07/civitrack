import { Router } from 'express';
import { chat, quickHelp, validateService } from '../controllers/aiController';
import { aiChatValidation, aiQuickHelpValidation } from '../middleware/validation';

const router = Router();

// Validate AI service
router.get('/health', validateService);

// Chat endpoint
router.post('/chat', aiChatValidation, chat);

// Quick help endpoint
router.get('/quick-help', aiQuickHelpValidation, quickHelp);

export default router;