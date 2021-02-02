'use strict';

const { Schema } = require("mongoose");
const timestamps = require('./timestamps.json');
const mongoose = require('mongoose');

const customerSchema = new Schema({
    name: { type: String },
    lastName: { type: String },
    age: { type: Number },
    insertDate: {type:Date}
}, {
    timestamps,
    collection: "customer",
    minimize: false
});

const CustomerModel = (mongoose.models && mongoose.models['customer']) ?
    mongoose.models['customer'] : mongoose.model('customer', customerSchema);

module.exports = CustomerModel;