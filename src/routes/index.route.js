import express from 'express'
import * as IndexController from '../controllers/index.controllers.js '

const router = express.Router()

router.get('/', IndexController.index)

export default router