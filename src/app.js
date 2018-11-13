'use strict'

const express = require('express'); // busca o pacote express
const bodyParser = require('body-parser'); // importa o pacote para converter requeste em Json
const mainRoute = require('../routes/main'); // importa a rota principal

const app = express();  // cria uma constante app 

// Converter automaticamente o corpo das requisições para Json
app.use(bodyParser.json());
// condificar as urls
app.use(bodyParser.urlencoded({extended: false}));
// declaração de rota onde irá responder
app.use('/', mainRoute);


// exporta o app
module.exports = app;