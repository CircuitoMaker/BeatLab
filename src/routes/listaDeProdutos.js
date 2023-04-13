var express = require('express');
const session = require('express-session');
var router = express.Router();
var coletanea = require('../database/repertorio.json')

const musica = require('../models/musica');
const database = require('../models/db');
const { Op } = require('sequelize');
const sequelize = require('../models/db');


/* GET home page. */
router.get('/:id?', async function(req, res, next){


  //SE viear algum parâmetro, aplica o filtro
  
if(req.params.id){
  const procura = '%' + req.params.id + '%';
  console.log("PROCURA = " + procura);

  recebe = await musica.findAll({
    where:{

// busca nos atributos 
      [Op.or]: [
        { artista: { [Op.substring]: procura } },
        { genero: { [Op.substring]: procura } },
        { musica: { [Op.substring]: procura } }
        
        // Adicione aqui as condições de busca para outros atributos que desejar
      ]
      
    //  genero:{
    //  [Op.substring]:procura
    //  }
     

    }
  })
  
  

}else{
  recebe = await musica.findAll();
}

// var recebe=[];
// for(var x=0; x < recebeMusicas.length; x++){
// if(recebeMusicas[x].ativo == '1'){
//   recebe[x] = recebeMusicas[x];
// }
// }


const caminho=[];
for(var x=0; x < recebe.length; x++){
  caminho[x] = recebe[x].endereco.substr(5);
//console.log("CAMINHO = " + caminho[x])
}

const userLogged = req.cookies.userLogged;

  res.render('listadeprodutos', { title: 'Express', recebe, caminho, userLogged});
});

module.exports = router;
