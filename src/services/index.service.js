import prisma from '../configs/database.js'

export const getData = async() => {
    const admins = await prisma.admin.findMany()
    const data = {
        message : 'halo',
        user: admins,
        status: {
            message: 'Ok'
        },
        data: {
            nama: 'fulan'
        }
    }

    return data
}