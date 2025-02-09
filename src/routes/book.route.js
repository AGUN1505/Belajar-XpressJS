import express from 'express'
import { create, getAll, getOne, update } from '../controllers/book.controller.js'
import { auth } from '../middlewares/auth.js'

const router = express.Router()

router.post('/book', auth, create)
router.get('/book', auth, getAll)
router.get('/book/:id', auth, getOne)
router.put('/book/:id', auth, update)

export default router