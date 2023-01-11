const express = require('express')
const playerController = require('../controller/playerController')
const servicosController = require('../controller/servicosController')
const router = express.Router()
const ServicosController = require('../controller/servicosController')
var musicaAtual = require('../database/musicaAtual.json')
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        // cb(null,"public/images/imagensAlbuns" )
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

// const upload = multer({storage: storage, limits:{fileSize:10000000}})// 10Mb em bytes

const upload = multer({storage:storage})// 10Mb em bytes


router.get('/',        ServicosController.listaServicos)
router.get('/admin',   ServicosController.mostraAdminServicos)
// router.post('/create', upload.single("imagem"),ServicosController.criaServico)
router.post('/create', upload.fields([
    { name: "imagem", maxCount: 1 },
    { name: 'endereco', maxCount: 1 }
  ]),ServicosController.criaServico)

router.get('/search',  servicosController.buscaServico)
router.delete('/remove',  servicosController.removeServico)
router.put('/edit', servicosController.atualizaServico)



module.exports = router;