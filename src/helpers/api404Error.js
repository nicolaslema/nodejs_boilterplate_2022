const httpStatusCodes = require('../utils/http.model');
const BaseError = require('./baseError');

class Api404Error extends BaseError{
    constructor(
        message,
        methodName,
        statusCode = httpStatusCodes.NOT_FOUND,
        description = "Not Found.",
        isOperational = true
    )
    {
        super(message, methodName, statusCode, isOperational, description)
    }
}

module.exports = Api404Error;
