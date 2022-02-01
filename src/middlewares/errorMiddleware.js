const ErrorHandler = require('../helpers/errorHandler');


const errorHanlder = new ErrorHandler();


async function errorMiddleware(err, req, res, next){

    process.on('uncaughtException', async(err)=>{
        await errorHanlder.logError(err);
        if(!errorHanlder.isOperationalError(err)) process.exit(1);
    })
    
    process.on('unhandledRejection', (reason)=>{
        throw reason;
    })


    if(errorHanlder.isTrustedError(err)){
        next(err);
        return ;
    }

    await errorHanlder.logError(err);

   
   
    
}





module.exports = {errorMiddleware};