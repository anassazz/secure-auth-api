import express from 'express'
import cors from 'cors'
const router =express.Router()
import { test } from '../controllers/authController.js'


//Middleware
router.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))

router.get('/',test)


export default router
