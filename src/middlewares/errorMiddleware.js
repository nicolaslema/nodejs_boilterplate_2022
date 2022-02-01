const ErrorHandler = require('../helpers/errorHandler');


const errorHanlder = new ErrorHandler();


async function errorMiddleware(err, req, res, next){
    if(errorHanlder.isOperationalError(err)){
        next(err);
        return;
    }

    await errorHanlder.logError(err);
}

process.on('uncaughtException', async(error)=>{
    await errorHanlder.logError(error);
    if(!errorHanlder.isTrustedError(error)) process.exit(1);
})

process.on('unhandledRejection', (reason)=>{
    throw reason;
})



module.exports = {errorMiddleware};