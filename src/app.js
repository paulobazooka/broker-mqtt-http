const express = require('express'); // busca o pacote express
const app = express();  // cria uma constante app 
const router = express.Router(); // cria uma constante de rotas 

// Criação da rota main
const main = router.get('/', (req, res, next)=>{
    res.status(200).send({
        mensagem:'Servidor'
    });
});

// declaração de rota onde irá responder
app.use('/', main);


// exporta o app
module.exports = app;