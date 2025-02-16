import { error401 } from "../utils/customError.js"
import jwt from 'jsonwebtoken'

export const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')
        if (!token) throw error401('Please authenticate.')

        const tokens = token.split(' ')[1]
        const decoded = jwt.verify(tokens, process.env.SECRET_KEY)

        req.admin = {
            id: decoded.id,
            email: decoded.email
        }

        next()
    } catch (error) {
        next(error401('token expired, please login again'))
    }
}