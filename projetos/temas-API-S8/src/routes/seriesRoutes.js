// passo-a-passo

// 1. Importar o Express
// 2. Importar o Router
// 3. Importar o Controller
// 4. Criar a rota que traz todos os itens
// 5. Exportar o router

const express = require('express')
const router = express.Router();
const controller = require('../controller/seriesController');

router.get('/', controller.getAllSeries);
router.get('/:id', controller.getSeriesById);

module.exports = router