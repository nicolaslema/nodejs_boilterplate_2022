const BaseError = require("../helpers/baseError")
const httpStatusCodes = require('../utils/http.model')



class ErrorHandler{
    constructor(){

    }

    async logError (err){
        console.log(err);
    }
    

    async logErrorMiddleware(err, req, res, next){
        logError(err);
        next(err);
    }

    returnError(err, req, res, next){
         res.status(err.httpStatusCodes || 500).send(err.message);
    }


   
    isOperationalError(error){
        if( error instanceof BaseError){
            return error.isOperational;
        }
        return false;
    }

    isTrustedError(error){
        return error instanceof BaseError && error.isOperational;
    }

    

}


module.exports = ErrorHandler