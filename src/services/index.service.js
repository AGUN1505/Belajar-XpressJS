import prisma from '../configs/database.js'

export const getData = () => {
    const admins = prisma.admin.findMany()
    const data = {
        message : 'halo',
        status: {
            message: 'Ok'
        },
        data: {
            nama: 'fulan'
        }
    }

    return data
}