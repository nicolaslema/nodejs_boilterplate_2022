const erroLogger = (err, req, res, next) =>{
    console.error('\x1b[31m', err);
    next(err)
}

const errorResponse = (err, req, res, next)=>{
    res.status(err.statusCode).json({err});
}



module.exports ={erroLogger, errorResponse};