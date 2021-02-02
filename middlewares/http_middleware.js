const mongodb = require('../infrastructure/mongodb');

module.exports = async function(req, res, next){
    await mongodb.checkConnection();
    next();
}