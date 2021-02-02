const { uuid : uuidv3} = require('uuid');

function expressError(logger) {
    expressError.prototype.handler = function (err, req, res, next) {
       
        // identificação do log
        const idlog = uuid.URL;
        //
        // Se não tiver statusCode assume 500
        //
        if (!err.statusCode) {
            err.statusCode = 500;
            err.status = err.status || 500;
        }
        err.userMessage = err.userMessage || err.message;
        //
        // Interpretar o erro e ajustar o statusCode
        //
        if (err.name == 'MongoNetworkError') {
            err.statusCode = 500;
        } else if (err.name == 'ValidationError') {
            err.statusCode = 409;
        }
        //
        // logar o erro
        //
        if ([401, 403, 404, 409].indexOf(err.statusCode) >= 0) {
            logger.warn(err.userMessage, { code: err.statusCode, description: err.message, idlog: idlog, stack: err.stack });
        } else if ([400, 500].indexOf(err.statusCode) >= 0) {
            logger.error(err.userMessage, { code: err.statusCode, description: err.message, idlog: idlog, stack: err.stack });
        } else {
            logger.info(err.userMessage, { code: err.statusCode, description: err.message, idlog: idlog });
        }
        //
        // Enviar resposta ao cliente
        //
        res.status(err.statusCode).json(
            { 
                codigoerro: err.status,
                erro: err.userMessage,
                descricao: err.message,
                idlog: idlog
            }
        );
        next();
    };
}

module.exports = expressError;
