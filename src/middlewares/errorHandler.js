export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = statusCode === 500 ? 'internal server error' : err.message

    res.status(statusCode).json({
        status: false,
        message,
        data: null
    })
}

export const resourceNotFound = (req, res, next) => {
    const error = new Error('Resource not found')
    error.statusCode = 404
    next(error)
}