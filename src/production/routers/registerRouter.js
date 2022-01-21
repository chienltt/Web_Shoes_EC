import express from 'express';
import { createAccount } from '../controllers/registerController.js';

const router = express.Router();

router.post('/', createAccount);

export default router;