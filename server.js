'use strict'  // força o interpretador a analisar sinais e comandos de maneira mais criteriosa

const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

const app = express();
const port = normalizePort(process.env.PORT || '3000');   // process.env.PORT variável enviada pelo servidor

app.set('port', port);

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req, res, next)=>{
    res.status(200).send({
        mensagem:'Servidor'
    });
});

// declaração de rota onde irá responder
app.use('/', route);



// servidor ouvindo na port especificada
server.listen(port);
// função do servidor que retornará erro caso ocorra.
server.on('error', onError);
// função do servidor para
server.on('listening', onListening);



// função para normalizar a porta no servidor
// se a porta 3000 estiver disponível, usa-se ela.
// senão, usa a porta disponibilizada pelo servidor
function normalizePort(val){
    const port = parseInt(val, 10);

    if (isNaN(port)){
        return val;
    }

    if (port >= 0){
        return port;
    }

    return false;
}

// função para tratar alguns erros do servidor
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port ;

    switch (error.code){
        // Erro de permissão
        case 'EACCES':
            console.log(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        // Erro de endereço em uso    
        case 'EADDRINUSE':
            console.log(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// função para inicializar o debug.
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);

    console.log('Servidor HTTP rodando em localhost:' + port);
}