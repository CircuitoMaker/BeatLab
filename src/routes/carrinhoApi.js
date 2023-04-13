var express = require('express');
var router = express.Router();
var fs = require('fs')
var getStat = require('util').promisify(fs.stat);
const coletanea = require('../database/repertorio.json');
const carrinho = require('../database/carrinho.json')
var getStat = require('util').promisify(fs.stat);
const path = require('path')

const musica = require('../models/musica');
const database = require('../models/db');

/* GET home page. */
router.get('/:id', async function(req, res, next) {
  
    var recebe = req.params.id
    if(recebe == undefined){recebe = 0}

   console.log('RECEBIDO  NO CARRINHO =====> ' + recebe + ' <====') 
 
var funcao = recebe.substring(0,1)  
recebe = recebe.substring(1)
 
console.log(funcao)
console.log(recebe)

// Adiciona itens diferentes no carrinho 
 
//funciona
// if(funcao=='A'){ // "A" de adiciona item
// let item = coletanea.find(function(item){
//     return item.id == recebe;
//   });

if(funcao=='A'){ // "A" de adiciona item
  let item = await musica.findByPk(recebe)

    
  

  console.log('ITEM = ' + item)


if(item){
  
 let outroItem = carrinho.find(function(outroItem) {
    return outroItem.id == item.id;
  });

  if(outroItem){
  console.log('Esse item já existe no carrinho! ')
  }else{
    console.log('Item novo adicionado ao carrinho!')
    carrinho.push(item)
    fs.writeFileSync(path.join(__dirname , "../database/carrinho.json"), JSON.stringify(carrinho,null,4))

  }
}else{
    console.log("Este item não existe na base de dados!")
}

}
// Fim da adição de itens 


// REMOVE ITENS DO CARRINHO 
if(funcao=='R'){ // "R" de remove item

    let buscaItem = carrinho.find(function(buscaItem) {
        return buscaItem.id == recebe;
      });

      if(buscaItem){
    console.log('item excluido do carrinho')

   
   for(var x=0; x < carrinho.length; x++){
   if(carrinho[x].id == buscaItem.id){
carrinho.splice(x,1)
   }
   }

     fs.writeFileSync(path.join(__dirname , "../database/carrinho.json"), JSON.stringify(carrinho,null,4))
      }else{
      console.log('item nao encontrado')
      }
}



// FIM DO REMOVE ITENS



console.log('Total de itens no carrinho é ' + carrinho.length + ' Itens')
  
    res.send(carrinho);
});

module.exports = router;
