var express = require('express');
var router = express.Router();
var coletanea = require('../database/repertorio.json')



const musica = require('../models/musica')
const database = require('../models/db');


/* GET home page. */
router.get('/:id?', async function(req, res, next){


  //SE viear algum parâmetro, aplica o filtro
if(req.params.id){
  recebe = await musica.findAll({
    where:{
      genero:req.params.id
     // artista:req.params.id
    }
  })
  
}else{
  recebe = await musica.findAll();
}


  res.render('listadeprodutos', { title: 'Express', recebe });
});

module.exports = router;
