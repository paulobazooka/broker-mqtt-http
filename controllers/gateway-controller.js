'use strict';

const Gateway = require('../models/gateway');

exports.get = (req, res, next) => {
    Gateway.find()
           .then((foundGateway) =>{
                res.status(200).send(foundGateway);
            })
            .catch((error) =>{
                res.status(404).send({
                    message: 'recurses not found',
                    error: error
                });
            });
     
};


exports.getId = (req, res, next) => {
   
    let id = req.params.id;
    
    Gateway.findOne({_id: id})
        .then((foundGateway)=>{
            res.status(200).send(foundGateway);
        })
        .catch((error)=>{
            res.status(404).send({
                message: 'Recurse not found',
                error: error
            });
        });
};


exports.post = (req, res, next) =>{
    let gateway = new Gateway(req.body);
    gateway.save()
        .then((createdGateway)=>{
            res.status(201).send(createdGateway);
        })
        .catch((error) =>{
            res.status(500).send(error);
        });
};

