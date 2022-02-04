const express = require('express');
const {response} = require('express');
const Api404Error = require('../../../helpers/api404Error');
const BaseError = require('../../../helpers/baseError');
const httpStatusCodes = require('../../../utils/http.model');

class IndexService{


    async getIndex(){
        
        try {
            return "hello world";
        } catch (error) {
            throw new BaseError("BaseError", httpStatusCodes.INTERNAL_SERVER, error)
            
        }
       
    }



    //TODO: Delete Test Error handler 2
    async isValid(){

        const isValid = true;
     
        if(!isValid){
            
            throw new Api404Error("isValid es TRUE","isvalid",  )
        }
        
        try {
            await this.someAsync();
        } catch (error) {
            
            throw new BaseError("BaseError", "someAsync", httpStatusCodes.INTERNAL_SERVER, false)
        }
        return "Hello World!";
    }

    async  someAsync(){
    return Promise.reject();
    //return Promise.resolve();

    }


    
 
    
   
    
}

module.exports = new IndexService()