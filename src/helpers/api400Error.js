const httpStatusCodes = require('../utils/http.model');
const BaseError = require('./baseError');

class Api400Error extends BaseError{
    constructor(
        message,
        methodName,
        apiName = "dashboardAPI",
        statusCode = httpStatusCodes.BAD_REQUEST,
        description = "BAD REQUEST",
        isOperational = true
    )
    {
        super(message, methodName, statusCode, isOperational, description, apiName)
    }
}

module.exports = Api400Error;
