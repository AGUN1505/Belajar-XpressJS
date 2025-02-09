import joi from "joi"


export const userSchema = joi.object({
    name: joi.string().required().messages({
        'string.empty': 'Nama tidak boleh kosong',
        'any.required': 'Nama harus diisi',
        'string.base': 'Nama harus berupa teks'
    }),
    email: joi.string().email().required().messages({
        'string.empty': 'Email tidak boleh kosong',
        'any.required': 'Email harus diisi',
        'string.email': 'Email tidak valid'
    }),
    phone: joi.string().min(10).max(15).required().messages({
        'string.empty': 'Nomor telepon tidak boleh kosong',
        'any.required': 'Nomor telepon harus diisi',
        'string.base': 'Nomor telepon harus berupa teks',
        'string.min': 'Nomor telepon minimal 10 karakter',
        'string.max': 'Nomor telepon maksimal 15 karakter'
    }),
})