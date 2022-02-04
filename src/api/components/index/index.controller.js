const {response} = require('express');
const indexService = require('./index.services');
const Api404Error = require('../../../helpers/api404Error');

const getIndex = async(req, res= response, next) =>{
    
   try {
    const data = await indexService.getIndex();
    res.status(200).json({
        messsage: data
    });
   } catch (error) {
        const message =  error instanceof Api404Error ? error.message: "Generic error";
        const statusCode = error.httpStatusCodes || 501;
        console.log(statusCode);
        res.status(statusCode).send(message);
        next(error);
    
   }

    
}


//TODO: Delete Test Error handler 1
const getValidTest = async(req, res= response, next) =>{
    
    try {
    let data = await indexService.isValid();  
     res.status(200).json({
         messsage: data
     });
    } catch (error) {
       const message = error instanceof Api404Error ? error.message : 'Generic Error'
       const statusCode = error.statusCode;
       res.status(statusCode).send({message: message, statusCode: statusCode});
       next(error);
 }


}

const testErrorHandler = async( req, res = response, next) =>{
    
    try {
        let data = await indexService.isValid();  
         res.status(200).json({
             messsage: data
         });
    } catch (err) {
        const message = err instanceof Api404Error ? err.message : 'Generic Error'
        res.status(err.statusCode).json({err})
        next(err);
        
    }

    
}






module.exports = {getIndex, getValidTest, testErrorHandler};