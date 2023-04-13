const express = require('express')
const router = express.Router()
const usuario = require('../models/usuario') 
const usuarioController = require('../controller/usuarioController')
const musica = require('../models/musica')
const database = require('../models/db');
let auth = require('../middlewares/auth')


router.delete('/:id?',usuarioController.removeUsuario)


//  router.put('/:id?', validacoes, upload.fields([
//      { name: "imagem", maxCount: 1 },
//    ]), usuarioController.atualizaServico)
  

module.exports = router