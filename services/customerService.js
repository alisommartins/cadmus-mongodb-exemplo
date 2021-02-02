'use strict';

const CustomerModel = require('../models/customer_model');

const getCustomerById = async () => {
    return await CustomerModel.find({}).lean();
}

const addCustomer = async(customer) =>{
    return await CustomerModel.insertMany(customer);
}

module.exports = {
    getCustomerById,
    addCustomer
}