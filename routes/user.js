import express from 'express'
import { register,login, profile } from '../controllers/user.js';
import { Authenticate } from '../middlewares/auth.js';

const router = express.Router();

router.get('/user',Authenticate,profile)


//user register
router.post('/register',register)

//user login
router.post('/login',login)

//profile 

export default router