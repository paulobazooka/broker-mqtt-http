'use strict'

const express = require('express'); // busca o pacote express
const bodyParser = require('body-parser'); // importa o pacote para converter requeste em Json
const mongoose = require('mongoose'); // importa o pacote mongoose
const mainRoute = require('../routes/main'); // importa a rota principal
const sensorRoute = require('../routes/sensor-route'); // importa a rota de sensores

const app = express();  // cria uma constante app 

// Conexão com o Banco de dados MongoDb do mLab.com  user:mqtt123  500mb de espaço gratuito
mongoose.connect('mongodb://user:mqtt123@ds058508.mlab.com:58508/mqtt-server');

// Converter automaticamente o corpo das requisições para Json
app.use(bodyParser.json());
// condificar as urls
app.use(bodyParser.urlencoded({extended: false}));

// declaração das rotas onde o servidor irá responder
app.use('/', mainRoute);
app.use('/api/v1/', sensorRoute);

// exporta o app
module.exports = app;