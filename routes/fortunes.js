import { Router } from 'express'
import * as fortunesCtrl from '../controllers/fortunes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========



// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/' , checkAuth, fortunesCtrl.create)


export { router }