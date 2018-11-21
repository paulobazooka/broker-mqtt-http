'use strict';

const express = require('express'); // importa o pacote express
const readingController = require('../controllers/reading-controller'); // importa sensor-controller

const router = express.Router();    // criar um constante rota    

// declaração dos tipos de rotas relacionados ao recurso Sensor
router.get('/', readingController.get);
router.get('/:id', readingController.getId);
router.post('/', readingController.post);

module.exports = router;