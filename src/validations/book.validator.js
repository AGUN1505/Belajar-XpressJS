import joi from "joi"

export const bookSchema = joi.object({
    title: joi.string().required().messages({
        'string.empty': 'Title tidak boleh kosong',
        'any.required': 'Title harus diisi',
        'string.base': 'Title harus berupa teks'
    }),
    author: joi.string().required().messages({
        'string.empty': 'author tidak boleh kosong',
        'any.required': 'author harus diisi',
        'string.base': 'author harus berupa teks'
    }),
    publisher: joi.string().required().messages({
        'string.empty': 'publisher tidak boleh kosong',
        'any.required': 'publisher harus diisi',
        'string.base': 'publisher harus berupa teks'
    }),
    year: joi.number().required().messages({
        'number.empty': 'year tidak boleh kosong',
        'any.required': 'year harus diisi',
        'number.base': 'year harus berupa angka'
    }),
    quantity: joi.number().required().messages({
        'number.empty': 'quantity tidak boleh kosong',
        'any.required': 'quantity harus diisi',
        'number.base': 'quantity harus berupa angka'
    })
})