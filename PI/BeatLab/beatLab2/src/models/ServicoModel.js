const servicos = require('../database/repertorio.json')
const fs = require('fs')
const path = require('path')
const { receiveMessageOnPort } = require('worker_threads')

const multer = require('multer')

// exemplo de uso do multer *****
// const storage = multer.diskStorage({ 
//     destination: function (req, file, cb) { 
//        cb(null, './public/images/avatars'); 
//     }, 
//     filename: function (req, file, cb) { 
//        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
//   })

//definindo a variavel que sera usada como middleware
//const uploadFile = multer({ storage });

//Na rota onde queremos processar arquivos com o Multer, teremos que passar isso como middleware:
//router.post('/register', uploadFile.single('avatar'), usersController.create); 

//****************************** */


module.exports={
    index:()=>{
        return servicos
    },
    createOne:(req)=> {

        let novaMusica={
id: servicos.at(-1),
artista: req.body.artista,
musica: req.body.musica,
imagem: req.body.imagem,
album: './src/imagensAlbuns/' + req.body.album,
genero: req.body.genero,
endereco: './src/audios/' + req.body.endereco,
preco: req.body.preco,
relevancia:0
        }

        servicos.push(novaMusica)
        console.log(servicos)
        fs.writeFileSync(path.join(__dirname , "../database/repertorio.json"), JSON.stringify(servicos,null,4))

    }, 
    
    findOne:(req) => {
       let found = servicos.find(servico => servicos.ID == req.query.ID)
       return found
    }
}