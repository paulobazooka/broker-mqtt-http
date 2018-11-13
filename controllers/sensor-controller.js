'use strict';

// Controller que retornará os sensores do banco de dados
exports.get = (req, res, next) => {
    res.status(200).send({method:'GET'});
};

// Controller que retornará um sensor específico do banco de dados
exports.getId = (req, res, next) => {
    let id = req.param;
    res.status(200).send({method:'GET-ID'});
};

// Controller que retornará o sensor persistido no banco de dados
exports.post = (req, res, next) => {
    res.status(200).send({method:'POST'});
};

// Controller que retornará o sensor após ser atualizado no banco de dados
exports.put = (req, res, next) => {
    res.status(200).send({method:'PUT'});
};

// Controller que retornará o sensor após ser atualizado no banco de dados
exports.path = (req, res, next) => {
    res.status(200).send({method:'PATH'});
};

// Controller removerá o sensor do banco de dados
exports.delete = (req, res, next) => {
    let id = req.param;
    res.status(200).send({method:'DELETE'});
};

// Controller que retornará os métodos aceitos pela api
exports.opt = (req, res, next) => {
    res.status(200).send({method:[
        'GET', 'POST', 'PUT', 'PATH', 'DELETE'
    ]});
};

// Controller que retornará o head da requisição
exports.head = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
};




