'use strict';

const mongoose = require('mongoose');
const Promise = require('bluebird');

let connection = null;

function checkConnection() {
    if (mongoose.connection.readyState)
        return Promise.resolve();

    return createConnection();
}

function createConnection() {
    mongoose.Promise = Promise;
    let config = global.environmentConfig;
    return mongoose.connect(config.mongodb.uri, config.mongodb.options)
        .then(() => {
            setConnection(mongoose.connection);
            return getConnection();
        });
}

function getConnection() {
    return connection;
}

function setConnection(conn) {
    connection = conn;
}

function closeConnection() {
    return mongoose.connection.close();
}

module.exports = {
    checkConnection, getConnection, closeConnection
};
