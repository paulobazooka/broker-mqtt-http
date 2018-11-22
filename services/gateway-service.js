'use strict';

const Gateway = require('../models/gateway');

exports.getGateways = (callback) =>{

    Gateway.find()
        .then((foundGateways)=>{
            console.log(foundGateways);
            callback(foundGateways);
        })
        .catch((error) =>{
            console.log("*** ERROR! Not found gateways - gateway-service ***", error);
            callback(error);
        });
};


exports.getGatewayId = (id, callback) =>{    
    Gateway.findOne({_id: id})
        .then((foundGateway)=>{
            callback(foundGateway);
        })
        .catch((error)=>{
           callback(error);
        });
};

exports.getGatewayAuth = (name, password) => {
    Gateway.findOne({name: name, password: password.toString()})
        .then(()=>{
            callback(true);
        }) 
        .catch(()=>{
            callback(false);
        });
}

exports.getGatewayName = (name, callback) =>{
    Gateway.findOne({name: name})
        .then(()=>{
            callback(true);
        })
        .catch(()=>{
            callback(false);
        });
}