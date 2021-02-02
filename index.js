'use strict';

const Server = require('./server');

async function startup() {
try {
        console.log('Iniciando Server');
        const app = require('./controllers')();
        let server = new Server();
        server.run(app);
    } catch (error) {
        console.log("erro ao iniciar servidor: ", error);
    }
}

startup();
