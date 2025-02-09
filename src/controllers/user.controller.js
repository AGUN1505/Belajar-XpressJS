import { userSchema } from "../validations/user.validator.js"
import { error400 } from "../utils/customError.js"
import { store , getAlldata, getOneData, updateData} from "../services/user.service.js"
import { res201, res200 } from "../utils/customResponse.js"


export const create = async (req, res, next) => {
    try {
        const { error, value } = userSchema.validate(req.body)
        if (error) {
            throw error400(error.details[0].message)
        }

        const user = await store(value)

        return res201(res, 'success create user', user)
    } catch (error) {
        next(error)
    }
}

export const getAll = async (req, res, next) => {
    try {
        const users = await getAlldata(req.query)

        res200(res, 'success get all user', users)
    } catch (error) {
        next(error)
    }
}

export const getOne = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        if (isNaN(id)) {
            throw error400('id must be a number')
        }
        const user = await getOneData(id)
        
        res200(res, 'success get one user', user)
    } catch (error) {
        next(error)
    }
}

export const update = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        if (isNaN(id)) {
            throw error400('id must be a number')
        }

        const { error, value } = userSchema.validate(req.body)
        if (error) {
            throw error400(error.details[0].message)
        }

        const user = await updateData(id, value)

        res200(res, 'success update user', user)
    } catch (error) {
        next(error)
    }
}