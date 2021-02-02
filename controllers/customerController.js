'use strict';

const appError = require('../helpers/applicationError');
const jwtHandler = require('../auth/verifyJwt');
// const jwt = require('../../auth/jwt');
// const check = require('../../utils/check');

const customerService = require('../services/customerService');


module.exports = (app) => {

    app.get('/customer', async(req, res, next) =>{
        try {
            const customer = await customerService.getCustomer();
            if(customer)
                res.json(customer);
        } catch (error) {
            next(appError(500, error));
        }     
    })

    app.post('/customer', async(req, res, next) =>{
        try {
            const body = req.body;
            const customer = await customerService.insertCustomer(body);
            if(customer)
                res.json('ok!');
        } catch (error) {
            next(appError(500, error));
        }     
    })

    app.put('/customer/:id', async(req, res, next) =>{
        try {
            const body = req.body;
            const id = req.params.id;
            const customer = await customerService.updateCustomer(body, id);
            if(customer)
                res.json('ok!');
        } catch (error) {
            next(appError(500, error));
        }     
    })


    app.del('/customer/:id', async(req, res, next) =>{
        try {
            const id = req.params.id;
            const customer = await customerService.deleteCustomer(id);
            if(customer)
                res.json('ok!');
        } catch (error) {
            next(appError(500, error));
        }     
    })

}