const servicos = require('../database/repertorio.json')
const fs = require('fs')
const path = require('path')
const { receiveMessageOnPort } = require('worker_threads')

const ServicoModel = require('../models/ServicoModel')


module.exports={
    index:()=>{
        return servicos
    },
    createOne:(req,file)=> {
        console.log('req ====>> ' + req.body.artista)
        
        console.log("fieldnameeeee " + req.files['imagem'][0].filename)

        let novaMusica={


artista: req.body.artista,
musica: req.body.musica,


imagem: '../images/imagensAlbuns/' + req.files['imagem'][0].filename,

album: './src/imagensAlbuns/' + req.body.album,
genero: req.body.genero,
endereco: './src/audios/' + req.files['endereco'][0].filename,
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