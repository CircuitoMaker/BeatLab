const express = require('express')
const playerController = require('../controller/playerController')
const servicosController = require('../controller/servicosController')
const router = express.Router()
const ServicosController = require('../controller/servicosController')
var musicaAtual = require('../database/musicaAtual.json')
const path = require('path')
const multer = require('multer')


const musica = require('../models/musica')
const usuario = require('../models/usuario')
const database = require('../models/db');
let auth = require('../middlewares/auth')

// Validações do Form
const { body } = require('express-validator')
const validacoes=[
    body('artista').notEmpty(),
    body('musica').notEmpty(),
    body('album').notEmpty(),
    body('preco').notEmpty(),
    body('ano').notEmpty()
]


// Upload de Arquivos
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
      
       if(file.fieldname === "imagem"){
        cb(null,"public/images/imagensAlbuns" )
       }
       if(file.fieldname === "endereco"){
        cb(null,"src/audios" )
       }
    } ,

    filename:(req,file,cb)=>{
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage:storage})// 10Mb em bytes






router.get('/',        ServicosController.listaServicos)
router.get('/admin:id?',auth,   ServicosController.mostraAdminServicos)


router.post('/create', validacoes, upload.fields([
    { name: "imagem", maxCount: 1 },
    { name: 'endereco', maxCount: 1 }
  ]), ServicosController.criaServico)


router.get('/search:id?',  servicosController.buscaServico)

router.delete('/remove',  servicosController.removeServico)

router.put('/edit', servicosController.atualizaServico)


module.exports = router;