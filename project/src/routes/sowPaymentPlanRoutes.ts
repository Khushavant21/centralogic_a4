import { Router } from 'express';
import { createSOWPaymentPlan, getSOWPaymentPlans } from '../controllers/sowPaymentPlanController';

const router = Router();

router.post('/', createSOWPaymentPlan);
router.get('/', getSOWPaymentPlans);

export default router;
