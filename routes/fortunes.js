import { Router } from 'express'
import * as fortunesCtrl from '../controllers/fortunes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========



// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/' , checkAuth, fortunesCtrl.create)
router.get('/', checkAuth, fortunesCtrl.index)
router.get('/:id', checkAuth, fortunesCtrl.show)
router.put('/:id', checkAuth, fortunesCtrl.update)


export { router }