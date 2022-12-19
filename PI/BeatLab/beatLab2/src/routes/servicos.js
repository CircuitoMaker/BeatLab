const express = require('express')
const playerController = require('../controller/playerController')
const servicosController = require('../controller/servicosController')
const router = express.Router()
const ServicosController = require('../controller/servicosController')
var musicaAtual = require('../database/musicaAtual.json')
 

router.get('/', ServicosController.listaServicos)
router.get('/admin', ServicosController.mostraAdminServicos)
router.post('/create', ServicosController.criaServico)
router.get('/search', servicosController.buscaServico)

//teste do player
router.post('/incrementa',playerController.proximaMusica)
router.post('/decrementa',playerController.musicaAnterior)

module.exports = router;