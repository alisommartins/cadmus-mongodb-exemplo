'use strict';

const jwt = require('jsonwebtoken');

module.exports.handler = (req, res, next) => {
    var headerAuth = req.headers['authorization'];

    if (!headerAuth) {
        return res.status(401).send({ auth: false, message: "token nao foi informado" });
    }

    var token = headerAuth.split('Bearer ')[1];
    jwt.verify(token, global.secret_token, function (erro, decoded) {

        if (erro) {
            return res.status(500).send({ auth: false, message: "houve um problema ao tratar a autorizacao" });
        }

        req.user = decoded;
        next();
    });
}


