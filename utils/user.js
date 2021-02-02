'use strict';

const _ = require('lodash');

const getPayload = user => {
    return _.pick(user, ['_id', 'nome', 'login', 'unidade', 'matricula', 'email', 'centroTrabalho', 'backofficePermissao']);
};

const getCentroTrabalho = user => {
    return _.pick(user, ['centroTrabalho']);
};

module.exports = { 
    getPayload, 
    getCentroTrabalho 
};
