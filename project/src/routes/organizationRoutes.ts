import { Router } from 'express';
import { createOrganization, getOrganizations } from '../controllers/organizationController';

const router = Router();

router.post('/', createOrganization);
router.get('/', getOrganizations);

export default router;
