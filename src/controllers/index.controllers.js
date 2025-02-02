import { getData } from "../services/index.service.js"

export const index = async(req, res) => {
    const data = await getData()

    res.status(200).json({
        statuss: data.status.message,
        message: data.message,
        nama: data.data.nama,
        data: data.user,
        payload: {
            admin: req.admin
        }
    })
}
