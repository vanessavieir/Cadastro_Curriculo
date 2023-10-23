const express = require('express');
const router = express.Router();
const curriculoController = require('../controllers/curriculoController');

router.post('/curriculos', curriculoController.createCurriculo);

router.get('/curriculos', curriculoController.getAllCurriculos);

module.exports = router;
