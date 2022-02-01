const express = require('express');
const {response} = require('express');
const indexService = require('./index.services');
const Api404Error = require('../../../helpers/api404Error');
const BaseError =  require('../../../helpers/baseError');
const httpStatusCodes = require('../../../utils/http.model');

const getIndex = async(req, res= response, next) =>{
    
   try {
    const data = await indexService.getIndex();
    res.status(200).json({
        messsage: data
    });
   } catch (error) {
        const message =  err instanceof Api404Error ? error.message: "Generic error";
        throw new Api404Error('index not found', httpStatusCodes.BAD_REQUEST)
   }

    
}


//TODO: Delete Test Error handler 1
const getValidTest = async(req, res= response, next) =>{
    
    try {
     const data = await indexService.isValid();
     res.status(200).json({
         messsage: data
     });
    } catch (error) {
       const message = error instanceof Api404Error ? error.message : 'Generic Error'
       const statusCode = error.httpStatusCodes || 500;
       console.log(statusCode);
       res.status(statusCode).send(message);
       next(error);
 }


}

module.exports = {getIndex, getValidTest};