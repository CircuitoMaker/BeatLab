var express = require('express');
var router = express.Router();
var play = require

/* GET home page. */
router.get('/', function(req, res, next) {
 
   
    //     if(indexMusica < musicas.length -1){
    //      indexMusica++;
    //  }else{
    //    indexMusica=0;
    //  }
    
    //  user.musica=musicas[indexMusica];
    //  user.index=indexMusica;
    //  selecionaMusica();
 
    
    res.redirect('home');
    
});

module.exports = router;