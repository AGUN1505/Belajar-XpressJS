import { bookSchema } from "../validations/book.validator.js";
import { error400 } from "../utils/customError.js";
import { store, getAlldata, getOneData, updateData } from "../services/book.service.js";
import { res201, res200 } from "../utils/customResponse.js";

export const create = async (req, res, next) => {
    try {
        const { error, value } = bookSchema.validate(req.body)
        if (error) {
            throw error400(error.details[0].message)
        }

        const book = await store(value)

        return res201(res, 'success create book', book)
    } catch (error) {
        next(error)
    }
}

export const getAll = async (req, res, next) => {
    try {
        const books = await getAlldata(req.query)

        res200(res, 'success get all book', books)
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
        const book = await getOneData(id)
        
        res200(res, 'success get one book', book)
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

        const { error, value } = bookSchema.validate(req.body)
        if (error) {
            throw error400(error.details[0].message)
        }

        const book = await updateData(id, value)

        res200(res, 'success update book', book)
    } catch (error) {
        next(error)
    }
}