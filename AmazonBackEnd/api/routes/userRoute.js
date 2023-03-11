import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.post('/register', userController.register)
//router.get('/', userController.allUsers);

export default router;