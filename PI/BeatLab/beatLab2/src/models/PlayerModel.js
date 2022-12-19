
const path = require('path')
const { receiveMessageOnPort } = require('worker_threads')
//var getStat = require('util').promisify(fs.stat);
const { isAsyncFunction } = require('util/types');

// var fs = require('fs')
// var getStat = require('util').promisify(fs.stat);
// //const { isAsyncFunction } = require('util/types');
// const coletanea = require('../database/repertorio.json');
// const musicaAtual = require('../database/musicaAtual.json');
// var index = 0


module.exports={
   avancaUma:(req)=> {
console.log('Pegando dados do body ============= ' + req.body.func)      



    }, 
    
    voltaUma:(req) => {
       console.log('Pegando dados do body ' + req.body.func)     
    }
}