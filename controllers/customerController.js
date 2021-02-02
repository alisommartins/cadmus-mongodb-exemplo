'use strict';

const appError = require('../helpers/applicationError');
const jwtHandler = require('../auth/verifyJwt');
// const jwt = require('../../auth/jwt');
// const check = require('../../utils/check');

const customerService = require('../services/customerService');

module.exports = (app) => {

    app.get('/customer', async (req, res, next) => {
        try {
            //const id = req.params.id;
            const customer = await customerService.getCustomerById();
            if (customer)
                res.json(customer);
        } catch (error) {
            next(appError(500, error));
        }
    })

    app.post('/customer', async(req,res,next)=>{
        try {
            const body = req.body;
            const customer = await customerService.addCustomer(body);
            if (customer)
                res.json(customer);
        } catch (error) {
            next(appError(500, error));
        }
    })

}