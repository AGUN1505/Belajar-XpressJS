import express from 'express'
// import * as IndexController from '../controllers/index.controllers.js '
import { register } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/register', register)

export default router