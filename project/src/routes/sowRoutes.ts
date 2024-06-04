import { Router } from 'express';
import { createSOW, getSOWs } from '../controllers/sowController';

const router = Router();

router.post('/', createSOW);
router.get('/', getSOWs);

export default router;
