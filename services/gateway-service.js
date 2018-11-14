'use strict';

const Gateway = require('../models/gateway');

exports.getGateways = function(callback){

    Gateway.find()
        .then((foundGateways)=>{
            console.log(foundGateways);
            callback(foundGateways);
        })
        .catch((error) =>{
            console.log("*** ERROR! Not found gateways - gateway-service ***", error);
        });
};


exports.getGatewayId = function(id, callback){
    
    Gateway.findOne({_id: id})
        .then((foundGateway)=>{
            callback(foundGateway);
        })
        .catch((error)=>{
           callback(error);
        });
};

exports.getGatewayAuth = function(name, password, callback){
    Gateway.findOne({name: name, password: password})
        .then((foundGateway)=>{
            callback(foundGateway);
        })
        .catch((error)=>{
           callback(error);
        });
}

exports.getGatewayName = function(name, callback){
    Gateway.findOne({name: name})
        .then((foundGateway)=>{
            callback(foundGateway);
        })
        .catch((error)=>{
            callback(error);
        });
}