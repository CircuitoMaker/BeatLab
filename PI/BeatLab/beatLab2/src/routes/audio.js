var express = require('express');
var router = express.Router();
var fs = require('fs')
var getStat = require('util').promisify(fs.stat);
const { isAsyncFunction } = require('util/types');
const coletanea = require('../database/repertorio.json');
const musicaAtual = require('../database/musicaAtual.json')



 router.get('/', async(req, res)=> {
 
  
const filePath = musicaAtual[0].endereco


 const stat = await getStat(filePath);
//       console.log(stat);    
        
//         // informações sobre o tipo do conteúdo e o tamanho do arquivo
       res.writeHead(200, {
           'Content-Type': 'audio/mpeg',
             'Content-Length': stat.size
              });
        
        const stream = fs.createReadStream(filePath);
        //const stream = fs.createReadStream(req.params.id)
        
        
        stream.on('end', function(){
          console.log('acabou');
        }); 

        // faz streaming do audio 
         stream.pipe(res);
});

 module.exports = router;
