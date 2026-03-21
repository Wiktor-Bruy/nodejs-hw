import { Router } from 'express';

import { authenticate } from '../middleware/authenticate.js';
import { upload } from '../middleware/multer.js';

const router = Router();

router.use('/users', authenticate);

router.patch('/users/me/avatar', upload.single('avatar'));

export default router;
