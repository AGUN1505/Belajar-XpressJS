import prisma from "../configs/database.js"
import { error400 } from "../utils/customError.js"
import { hash } from "bcrypt"

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