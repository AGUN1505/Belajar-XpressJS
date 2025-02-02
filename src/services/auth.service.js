import prisma from "../configs/database.js"
import { error400 } from "../utils/customError.js"
import { hash, compare } from "bcrypt"
import jwt from 'jsonwebtoken'

export const registerHendler = async (data) => {
    const admin = await prisma.admin.findUnique({
        where: {
            email: data.email
        }
    })

    if (admin) throw Error('email sudah ada')

    const hashedPassword = await hash(data.password, 10)

    return await prisma.admin.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashedPassword
        }
    })
}

export const loginHendler = async (data) => {
    const admin = await prisma.admin.findUnique({
        where: {
            email: data.email
        }
    })

    if (!admin) throw error400('email salah')

    const isPasswordMatch = await compare(data.password, admin.password)

    if (!isPasswordMatch) throw error400('password salah')

    const dataAdmin = {
        id: admin.id,
        email: admin.email
    }

    const optionJwt = {
        expiresIn: '1h'
    }

    
    const token = jwt.sign( dataAdmin,  process.env.SECRET_KEY, optionJwt)

    const tokenData = {
        email: admin.email,
        token
    }

    return tokenData
}