// passo-a-passo

// 1. Importar o Express
// 2. Importar o Router
// 3. Importar o Controller
// 4. Criar a rota que traz todos os itens
// 5. Exportar o router

const express = require('express')
const router = express.Router();
const controller = require('../controller/jogosController');

router.get('/', controller.getAllJogos);
router.get('/:id', controller.getJogosById);

module.exports = router