'use strict';

const appError = require('../helpers/applicationError');
const jwtHandler = require('../auth/verifyJwt');

module.exports = (app) => {

    app.get('/healthcheck', (req, res,next)=>{
        try{
            res.json('online!');
        }catch(error){
            next(appError(500, error));
        }
    });
}