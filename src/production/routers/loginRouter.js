import express from 'express';
import { loginAccount } from '../controllers/loginController.js';

const router = express.Router();

router.post('/', loginAccount);

export default router;
