'use strict';

const CustomerModel = require('../models/customer_model');

const getCustomer = async () => {
    return await CustomerModel.find({}).lean();
}

const insertCustomer = async (customer) => {
    return await CustomerModel.insertMany(customer);
}

const updateCustomer = async (customer, id) => {
    return await CustomerModel.updateOne({
        _id:id
    }, customer, {upsert:true});
}

const deleteCustomer = async (id) =>{
    return await CustomerModel.findOneAndDelete({_id:id});
}

module.exports = {
    getCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer
}