import express from 'express'
import router from './routes/index.route.js'
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'
import { errorHandler, resourceNotFound } from './middlewares/errorHandler.js'

const app = express()

app.use(express.json())

app.use(router)
app.use(authRouter)
app.use(userRouter)

app.use(resourceNotFound)
app.use(errorHandler)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})