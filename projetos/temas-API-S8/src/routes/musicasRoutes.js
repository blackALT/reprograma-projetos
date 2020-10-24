// passo-a-passo

// 1. Importar o Express
// 2. Importar o Router
// 3. Importar o Controller
// 4. Criar a rota que traz todos os itens
// 5. Exportar o router

const express = require('express');
const controller = require('../controller/musicasController');
const router = express.Router();

router.get('/', controller.getAllMusicas);
router.get('/artistas', controller.getAllArtistas);
router.get('/albuns', controller.getAllAlbuns);
router.get('/:id', controller.getMusicasById);
router.get('/artistas/:artista', controller.getByArtista);
router.get('/albuns/:album', controller.getByAlbum);

module.exports = router