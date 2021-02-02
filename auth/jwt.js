'use strict';

const jwt = require('jsonwebtoken');
const userUtil = require('../utils/user');

const getToken = user =>{
    const payload = userUtil.getPayload(user);
    const jwtSecretKey = global.jwtConfig.secretKey;
    const jwtOptions = global.jwtConfig.options;

    return jwt.sign(payload, jwtSecretKey, jwtOptions);
}

module.exports = {
    getToken
};