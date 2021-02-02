module.exports = function(statusCode, err, message = '') {
    let error = err || new Error();

    error.statusCode = statusCode || 500;
    error.status = error.status || error.statusCode || 500;
    error.userMessage = message || '';
    return error;
};
