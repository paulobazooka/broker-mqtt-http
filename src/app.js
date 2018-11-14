'use strict'

const express = require('express'); // busca o pacote express
const bodyParser = require('body-parser'); // importa o pacote para converter requeste em Json
const mongoose = require('mongoose'); // importa o pacote mongoose
const mainRoute = require('../routes/main'); // importa a rota principal
const sensorRoute = require('../routes/sensor-route'); // importa a rota de sensores
const readingRoute = require('../routes/reading-route'); // importa a rota de leitura

const app = express();  // cria uma constante app 

/** 
 * 
 *      Conexão com o Banco de dados MongoDb do mLab.com 500mb de espaço gratuito
 * 
 * */ 
const _user = 'user';
const _pass = 'mqtt123'

const options = 
    {
        user: _user,
        pass: _pass,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoIndex: false, // Don't build indexes
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        reconnectInterval: 500, // Reconnect every 500ms
        poolSize: 10, // Maintain up to 10 socket connections
        // If not connected, return errors immediately rather than waiting for reconnect
        bufferMaxEntries: 0,
        connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity      
    }

mongoose.connect('mongodb://ds058508.mlab.com:58508/mqtt-server', options).then(
    () => { 
        console.log("**** Connected MongoDB ****");
    },
    err => { 
        console.log("**** ERROR! Not Connected ****", err);    
    }
  );;



// Converter automaticamente o corpo das requisições para Json
app.use(bodyParser.json());
// condificar as urls
app.use(bodyParser.urlencoded({extended: false}));

// declaração das rotas onde o servidor irá responder
app.use('/', mainRoute);
app.use('/api/v1/sensor', sensorRoute);
app.use('/api/v1/reading', readingRoute);

// exporta o app
module.exports = app;