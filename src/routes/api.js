var express = require('express');
var router = express.Router();
var fs = require('fs')
var getStat = require('util').promisify(fs.stat);
const { isAsyncFunction } = require('util/types');
const coletanea = require('../database/repertorio.json');
const musicaAtual = require('../database/musicaAtual.json')
const ouvidasRecentes = require('../database/ouvidasRecentes.json')
var index = require('../database/index.json')


const path = require('path')


 router.get('/:id', async(req, res)=> {
 
  //  const filePath = musicaAtual[0].endereco

   
   //const recebe = req.query.id
    const recebe = req.params.id
    if(recebe == undefined){recebe = 0}

   console.log('ID ====== API =====> ' + recebe + ' <====')

 if (recebe == 0){
   index[0].index --
  if(index[0].index < 0){
    index[0].index = coletanea.length-1
  }
  }



if (recebe == 1){
  index[0].index ++
if(index[0].index > coletanea.length-1){
  index[0].index = 0
}
}

musicaAtual[0] = coletanea[index[0].index]

console.log('Imprimindo o index  ===== ' + index[0].index);
console.log('Imprimindo a Musica ===== ' + musicaAtual[0].musica);

// gera historico de musicas ouvidas
//SE receber "I" -> INCREMENTA as musicas ouvidas recentes
if(recebe == 'I'){

var salva = true;
for(var x=0; x < ouvidasRecentes.length; x++){
  if(musicaAtual[0].id == ouvidasRecentes[x].id){
    salva = false
}}

  if(salva == true){
//if(ouvidasRecentes[ouvidasRecentes.length-1].id != musicaAtual[0].id){
ouvidasRecentes.shift();
ouvidasRecentes.push(musicaAtual[0])
fs.writeFileSync(path.join(__dirname , "../database/ouvidasRecentes.json"), JSON.stringify(ouvidasRecentes,null,4))
}}


fs.writeFileSync(path.join(__dirname , "../database/musicaAtual.json"), JSON.stringify(musicaAtual,null,4))
fs.writeFileSync(path.join(__dirname , "../database/index.json"), JSON.stringify(index,null,4))

// res.send(musicaAtual)

res.send([musicaAtual[0],ouvidasRecentes])

});

 module.exports = router;
