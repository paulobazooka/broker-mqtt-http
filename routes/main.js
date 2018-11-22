'use strict';

const express = require('express'); // importa o pacote express
const router = express.Router();    // criar um constante rota
const ip = require('request-ip');   // pacote que captura o IP do client
const axios = require('axios');     // pacote para realizar requisições http

let date = new Date();
let datetime = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

// Método get da rota principal
router.get('/', (req, res, next)=>{

    // Teste de requisição dentro do servidor HTTP
    axios.get('https://estados-cidades.herokuapp.com/api/v1/estado')
        .then(response => {
            console.log(response.data);
            //console.log(response.status); // ex.: 200
        })
        .catch(error => {
            console.log(error);
    });


    let clientIp = ip.getClientIp(res);
    res.status(200).send({
        title:"Servidor HTTP",
        version:'1.0.0',
        data: datetime,
        ip: clientIp
    });
});

// exporta a rota
module.exports = router;