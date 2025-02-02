import Joi from "joi"

export const registerValidator = Joi.object({
    name: Joi.string().required().messages({
        'string.empty': 'nama harus di isi dong',
        'any.required' : 'isi dong'
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'email salah',
        'string.empty': 'email harus di isi dong',
        'any.required' : 'isi dong emailnya'
    }),
    password: Joi.string().min(6).required().messages({
        'string.min': 'isi lebih dari 6 ya',
        'string.empty': 'password harus di isi dong',
        'any.required' : 'isi dong passwordnya'
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
        'string.empty': 'passwordnya harus di isi dong',
        'any.required' : 'isi dong paswordnya',
        'any.only' : 'passwordnya dak sama wuuu?'
    }),
})

export const loginValidator = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': 'email salah',
        'string.empty': 'email harus di isi dong',
        'any.required' : 'isi dong emailnya'
    }),
    password: Joi.string().min(6).required().messages({
        'string.min': 'isi lebih dari 6 ya',
        'string.empty': 'password harus di isi dong',
        'any.required' : 'isi dong passwordnya'
    }),
})