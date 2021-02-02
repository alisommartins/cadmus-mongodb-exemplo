'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const allowCors = require('../config/cors');
// const cors = require('cors');
const expressError = require('../helpers/expressError');
const httpMiddleware = require('../middlewares/http_middleware');
const errorMiddleware = require('../middlewares/error_middleware');

function Controller() {
    const app = express();

    app.use(errorMiddleware);
    app.use(httpMiddleware);
    // app.use(cors);
    app.use(allowCors);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ limit: '10mb', extended: true }));

    //require controllers bellow
    //healthCheck
    require('./healthCheckController')(app);

    //auth
    

    //controllers
    require('./customerController')(app);



    app.use(new expressError(console).handler);
    return app;
}

module.exports = Controller;