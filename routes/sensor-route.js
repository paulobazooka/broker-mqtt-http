'use strict';

const express = require('express'); // importa o pacote express
const sensorController = require('../controllers/sensor-controller'); // importa sensor-controller

const router = express.Router();    // criar um constante rota    

// declaração dos tipos de rotas relacionados ao recurso Sensor
router.get('/sensor', sensorController.get);
router.get('/sensor/:id', sensorController.getId);
router.post('/sensor', sensorController.post);
router.put('/sensor', sensorController.put);
router.patch('/sensor', sensorController.path);
router.delete('/sensor/:id', sensorController.delete);
router.options('/sensor', sensorController.opt);
router.head('/sensor', sensorController.head);

module.exports = router;