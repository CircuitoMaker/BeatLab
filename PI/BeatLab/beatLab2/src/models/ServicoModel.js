const servicos = require('../database/repertorio.json')
const fs = require('fs')
const path = require('path')
const { receiveMessageOnPort } = require('worker_threads')


const ServicoModel = require('../models/ServicoModel')




//app.use(express.json());
//express.urlencoded({ extended: true });



module.exports={
    index:()=>{
        return servicos
    },
    createOne:(req,file)=> {
        console.log('req ====>> ' + req.body.artista)

        const multer = require('multer')
        const uploadsFolder = path.resolve(__dirname,'../images/imagensAlbuns/')

        // exemplo de uso do multer *****
         const storage = multer.diskStorage({  
            destination:uploadsFolder,
             filename: (req, file, cb)=> { 
                cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
           })
        
        
        //definindo a variavel que sera usada como middleware
        const uploadFile = multer({ storage });
        
        //Na rota onde queremos processar arquivos com o Multer, teremos que passar isso como middleware:
       // router.post('/servicos/create', uploadFile.single('imagem'), rota ); 
        
        
console.log("Teste imagem 1 = " + req.body.imagem)
console.log("Teste imagem 2 = " + req.file)




        let novaMusica={

artista: req.body.artista,
musica: req.body.musica,
imagem: '../images/imagensAlbuns/' + req.body.imagem,
album: './src/imagensAlbuns/' + req.body.album,
genero: req.body.genero,
endereco: './src/audios/' + req.body.endereco,
preco: req.body.preco,
relevancia:0,
ano:req.body.ano,
//id: servicos.id + 1
// Pega o ID do ultimo produto e soma 1
id: servicos[servicos.length-1].id + 1  
}




        servicos.push(novaMusica)
        //console.log(servicos)
        fs.writeFileSync(path.join(__dirname , "../database/repertorio.json"), JSON.stringify(servicos,null,4))


   

    }, 
    



    findOne:(req,res) => {
    //    let found = servicos.find(servico => servicos.id == req.query.id)
 var foundId ;
 if(req.query.id != ""){
for(var x=0; x<servicos.length; x++){

    if(servicos[x].id == req.query.id){
        foundId = servicos[x]
    }
}
 }else{

var foundMusica
for(var x=0; x<servicos.length; x++){

    if(servicos[x].musica == req.query.musica){
        foundId = servicos[x]
    }

}
 }

    console.log(req.query.id)
    //console.log(found)
       return foundId
    },



    deleteOne:(req,res) => {

var idADeletar = req.body.id
console.log('deletando =====>>> ' + idADeletar)

var resultado = servicos.filter(element => (element.id != idADeletar));
var print = servicos.filter(element => (element.id == idADeletar));
//var excluida = JSON.stringify(print[0].musica,    null,4)


    //console.log('Encontrado =>' + JSON.stringify(resultado,null,4))
  //  console.log('Excluída => '  + excluida)
     
    if(!resultado.length){return}

    fs.writeFileSync(path.join(__dirname , "../database/repertorio.json"), JSON.stringify(resultado,null,4))
    

  //  return excluida

}, 

updateOne:(req,res)=>{
   servicos.forEach(servico =>{
if(servico.id != req.body.id){
    return
}else{
servico.artista =  req.body.artista
}
   })
   fs.writeFileSync(path.join(__dirname , "../database/repertorio.json"), JSON.stringify(servicos,null,4))
}



}