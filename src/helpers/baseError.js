const HttpStatusCode = require('../utils/http.model');
const express = require('express');



class BaseError extends Error{

    constructor(message, methodName, statusCode, isOperational, description){
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
        this.message = message;
        this.methodName = methodName;
        this.statusCode = statusCode;
        this.description = description;
        this.isOperational = isOperational;
        Error.captureStackTrace(this);
    }
    
}


module.exports = BaseError;
