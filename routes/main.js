'use strict';

const express = require('express'); // importa o pacote express
const router = express.Router();    // criar um constante rota    

// Método get da rota principal
router.get('/', (req, res, next)=>{
    res.status(200).send({
        title:"Servidor HTTP",
        version:'1.0.0',
        data: Date.now()
    });
});

// exporta a rota
module.exports = router;