var express = require('express');
var router = express.Router();
var fs = require('fs')
var getStat = require('util').promisify(fs.stat);
const { isAsyncFunction } = require('util/types');

const coletanea = require('../database/repertorio.json');
const musicaAtual = require('../database/musicaAtual.json')


const musica = require('../models/musica')
const database = require('../models/db');


 router.get('/', async(req, res)=> {
 
 // recebeBd = await musica.findByPk(8);
  
const filePath = musicaAtual[0].endereco

//const filePath = recebeBd.endereco


const stat = await getStat(filePath);
 
   
        
//         // informações sobre o tipo do conteúdo e o tamanho do arquivo
       res.writeHead(200, {
           'Content-Type': 'audio/mpeg',
             'Content-Length': stat.size
              });
        
        const stream = fs.createReadStream(filePath);
        //const stream = fs.createReadStream(req.params.id)
        
        
        stream.on('end', function(){
          //console.log('acabou');
        }); 

        // faz streaming do audio 
         stream.pipe(res);
});

 module.exports = router;
