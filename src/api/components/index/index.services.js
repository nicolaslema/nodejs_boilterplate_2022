const express = require('express');
const {response} = require('express');
const Api404Error = require('../../../helpers/api404Error');
const BaseError = require('../../../helpers/baseError');
const httpStatusCodes = require('../../../utils/http.model');

class IndexService{


    async getIndex(){
        try {
            return "hello world"
        } catch (error) {
            
        }
       
    }



    //TODO: Delete Test Error handler 2
    async isValid(){

        const isValid = true;
        const isValidOP = true;
        if(isValid){
            //throw new Api404Error("Bad Request", httpStatusCodes.BAD_REQUEST, "API400 ERROR")
            //throw new BaseError("BaseError", httpStatusCodes.INTERNAL_SERVER)
            throw new Api404Error("Bad Request", httpStatusCodes.NOT_FOUND, "API400 ERROR")
        }
        
        try {
            await this.someAsync();
        } catch (error) {
            throw new Api404Error("Bad Request", "API400 ERROR")
            //throw new BaseError("BaseError", httpStatusCodes.INTERNAL_SERVER, error)
        }
        return "HelloWorld";
    }


    async  someAsync(){
    return Promise.resolve();

    }


    

    
    
   
    
}

module.exports = new IndexService()