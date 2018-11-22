'use strict';

const Reading = require('../models/reading');
const Sensor = require('../models/sensor');

exports.get = (req, res, next) => {
    Reading.find()
           .populate('sensor') 
           .then((foundReading) =>{
                res.status(200).send(foundReading);
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
    
    Sensor.findOne({_id: id})
        .populate('sensor') 
        .then((foundSensor)=>{
            Reading.find({sensor: foundSensor})
                .then((foundReading) =>{
                    res.status(200).send(foundReading);
                    console.log(foundSensor);
                })
                .catch((error) =>{
                    res.status(404).send({
                        message: 'recurse not found',
                        error: error
                    });
                });
        })
        .catch((error)=>{
            res.status(404).send({
                message: 'Recurse not found',
                error: error
            });
        });
};

exports.post = (req, res, next) =>{
    let reading = new Reading(req.body);

    if(reading.sensor != null){
        reading.save().then((createdReading) => {
            res.status(201).send(createdReading);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
    }else{
        res.status(404).send({
            message: "Sensor not found"
        });
    }
};

