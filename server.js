'use strict';

class Server {
    constructor(){}

    run(app){
        
        const config = require('./config/setup');
        app.listen(global.environmentConfig.node_port);
        console.log(`server online, listening port: ${global.environmentConfig.node_port}`);
    }
}

module.exports = Server;