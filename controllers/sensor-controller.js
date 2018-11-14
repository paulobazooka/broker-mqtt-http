'use strict';

const Sensor = require('../models/sensor');

// Controller que retornará os sensores do banco de dados
exports.get = (req, res, next) => {
    Sensor.find()
        .then((foundSensors) =>{
            res.status(200).send(foundSensors);
        })
        .catch((error) =>{
            res.status(404).send({
                message: 'recurse not found',
                error: error
            });
        });

};

// Controller que retornará um sensor específico do banco de dados
exports.getId = (req, res, next) => {
    console.log('GET ID');
    let id = req.params.id;

    console.log("ID:", id);
    Sensor.findOne({_id: id})
            .then((foundSensor) =>{
                res.status(200).send(foundSensor);
            })
            .catch((error) =>{
                res.status(404).send({
                    message: 'recurse not found',
                    error: error    
                });
            });
};

// Controller que retornará o sensor persistido no banco de dados
exports.post = (req, res, next) => {

    let sensor = new Sensor(req.body);

    sensor.save().then((createdSensor) => {
        res.status(201).send(createdSensor);
    }).catch((error) => {
        res.status(500).send(error);
    });
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
    let id = req.params.id;

    Sensor.deleteOne({_id: id})
          .then((result)=>{
              res.status(200).send({
                  message: 'Sensor removed',
                  result: result 
              })
          })
          .catch((error) =>{
              res.status(500).send({
                  message: "ERROR",
                  error: error
              })
          });
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




