'use strict';

const express = require('express'); // importa o pacote express
const sensorController = require('../controllers/sensor-controller'); // importa sensor-controller

const router = express.Router();    // criar um constante rota    

// declaração dos tipos de rotas relacionados ao recurso Sensor
router.get('/', sensorController.get);
router.get('/:id', sensorController.getId);
router.post('/', sensorController.post);
router.put('/', sensorController.put);
router.patch('/', sensorController.path);
router.delete('/:id', sensorController.delete);
router.options('/', sensorController.opt);
router.head('/', sensorController.head);

module.exports = router;