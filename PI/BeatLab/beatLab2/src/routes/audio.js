var express = require('express');
var router = express.Router();
var fs = require('fs')
var getStat = require('util').promisify(fs.stat);
const { isAsyncFunction } = require('util/types');
const coletanea = require('../database/repertorio.json')

const highWaterMark =  20;



router.get('/', async(req, res) =>{
  
  const filePath1 = './src/audios/'

  console.log("Passei por aqui 1111!")
  
  var musicas = listaPatch(filePath1)      
  let indexMusica=1;
  
  //indexMusica = req.body.numero
  //console.log(req.body.numero)

  if(indexMusica == undefined){indexMusica = 0}

  console.log("Passei por aqui!")
   //console.log(musicas[indexMusica])
   //console.log(musicas)

  function listaPatch(diretorio){
    let listaDeArquivos = fs.readdirSync(diretorio) 
    return listaDeArquivos
    }

    
    //  const filePath =  './src/audios/'+ musicas[indexMusica];
    
    const filePath = coletanea[indexMusica].endereco// './src/audios/'+ musicas[indexMusica];
     

    const stat = await getStat(filePath);
        console.log(stat);    
        
        // informações sobre o tipo do conteúdo e o tamanho do arquivo
        res.writeHead(200, {
           'Content-Type': 'audio/mpeg',
            'Content-Length': stat.size
        });
        
       
      

        const stream = fs.createReadStream(filePath, { highWaterMark });
    


        // só exibe quando terminar de enviar tudo
        // stream.on('end', () => console.log('acabou'));
        stream.on('end', function(){
          console.log('acabou');
        }); 


        // interrompe o stream anterior para iniciar o novo
        // stream.on('data',function (chunk){
        //   readStream.destroy();
        //   console.log('Trocou de musica');
        // })

        // faz streaming do audio 
        stream.pipe(res);

});


module.exports = router;
