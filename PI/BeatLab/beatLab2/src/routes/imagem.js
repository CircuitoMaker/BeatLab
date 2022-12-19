var express = require('express');
var router = express.Router();
var fs = require('fs')

const musicaAtual = require('../database/musicaAtual.json')


const path = require('path')


 router.get('/', function(req, res) {

 var imagem =  musicaAtual[0].imagem
   
    res.send("<img src = " + imagem + " width='450'>")
 })

 module.exports = router;