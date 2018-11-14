'use strict';

const express = require('express'); // importa o pacote express
const gatewayController = require('../controllers/gateway-controller'); // importa sensor-controller

const router = express.Router();    // criar um constante rota    

// declaração dos tipos de rotas relacionados ao recurso Sensor
router.get('/', gatewayController.get);
router.get('/:id', gatewayController.getId);
router.post('/', gatewayController.post);

module.exports = router;
