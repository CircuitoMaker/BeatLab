const express = require('express')
const playerController = require('../controller/playerController')
const servicosController = require('../controller/servicosController')
const router = express.Router()
const ServicosController = require('../controller/servicosController')

var musicaAtual = require('../database/musicaAtual.json')

const path = require('path')
const multer = require('multer')

const usuario = require('../models/usuario') 
const usuarioController = require('../controller/usuarioController')
const musica = require('../models/musica')
const database = require('../models/db');
let auth = require('../middlewares/auth')


// Validações do Form
const { body } = require('express-validator')
const validacoes=[
    body('nome').notEmpty(),
    body('sobrenome').notEmpty(),
    body('nasc').notEmpty(),
    body('userName').notEmpty(),
    body('email').notEmpty(),
    body('phone').notEmpty(),
    body('senha').notEmpty()
]


// Upload de Arquivos
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{  
       if(file.fieldname === "imagem"){
        cb(null,"public/images/imagensUsers" )
       }     
    } ,

    filename:(req,file,cb)=>{
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage:storage})// 10Mb em bytes
// upload de arquivos


//router.post('/', usuarioController.listaServicos)
//router.get('/admin:id?',   ServicosController.mostraAdminServicos)


router.post('/', validacoes, upload.fields([
    { name: "imagem", maxCount: 1 },
  ]), usuarioController.listaServicos)
  
// router.post('/', validacoes, upload.fields([
//     { name: "imagem", maxCount: 1 },
//   ]), usuarioController.criaUsuario)

//router.get('/search:id?',  servicosController.buscaServico)

//router.delete('/remove',  servicosController.removeServico)

//router.put('/edit', servicosController.atualizaServico)


module.exports = router;