import express from 'express'
import router from './routes/index.route.js'
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'
import bookRouter from './routes/book.route.js'
import { errorHandler, resourceNotFound } from './middlewares/errorHandler.js'
import path from 'path'

const app = express()
const __dirname = path.dirname(new URL(import.meta.url).pathname)

app.use(express.json())
app.use('/public', express.static('public'))

app.use(router)
app.use(authRouter)
app.use(userRouter)
app.use(bookRouter)

app.use(resourceNotFound)
app.use(errorHandler)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})