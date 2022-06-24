const ErrorModel = require("../models/errorModel");

function errorHandler(err, req, res, next){

    if(err instanceof Error) {
        res.status(err.status || 500).send(err.message);
        return;
    }
    if(err instanceof ErrorModel){
        res.status(err.status).send(err.message);
        return;
    }
    next();
};

module.exports = errorHandler;