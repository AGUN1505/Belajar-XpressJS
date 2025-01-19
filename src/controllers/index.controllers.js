import { getData } from "../services/index.service.js"

export const index =(req, res) => {
    const data = getData()

    res.status(200).json({
        statuss: data.status.message,
        message: data.message,
        nama: data.data.nama
    })
}
