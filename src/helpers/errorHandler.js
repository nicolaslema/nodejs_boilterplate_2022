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


   
    isOperationalError(err){
        if( err instanceof BaseError){
            return err.isOperational;
        }
        return false;
    }

    isTrustedError(err){
        return err instanceof BaseError && err.isOperational;
    }

    

}


module.exports = ErrorHandler