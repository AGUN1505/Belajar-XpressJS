import { res200, res201 } from '../utils/customResponse.js'
import { registerValidator, loginValidator } from '../validations/auth.validator.js'
import { error400 } from '../utils/customError.js'
import { registerHendler, loginHendler } from '../services/auth.service.js'

export const register = async (req, res, next) => {
    try{
        const {error, value} = registerValidator.validate(req.body)
        if (error) {
            throw error400(error.details[0].message)
        }

        await registerHendler(value)
    
        res201(res, 'register berhasil')
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try{
        const {error, value} = loginValidator.validate(req.body)
        if (error) {
            throw error400(error.details[0].message)
        }

        const data = await loginHendler(value)

        res200(res, ' berhasil login', data)
    } catch (error) {
        next(error)
    }
}