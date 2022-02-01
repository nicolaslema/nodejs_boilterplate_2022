const HttpStatusCode = require('../utils/http.model');
const express = require('express');


const httpCode = HttpStatusCode;


class BaseError extends Error{

    constructor(name, statusCode, isOperational, description){
        super(description);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = name;
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        Error.captureStackTrace(this);
    }
    
}


module.exports = BaseError;
