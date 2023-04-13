const express = require('express');

var router = express.Router();
var coletanea = require('../database/repertorio.json')
var musicaAtual = require('../database/musicaAtual.json')
var ouvidasRecentes = require('../database/ouvidasRecentes.json')
var carrinho = require('../database/carrinho.json')

const musica = require('../models/musica')
const database = require('../models/db');

let auth = require('../middlewares/auth')



/* GET home page. */
router.get('/', async function(req, res, next) {

  recebeBd = await musica.findAll();

const userLogged = req.cookies.userLogged;
//console.log('teste de session no home '+ userLogged)

  res.render('home', { title: 'Express', musicaAtual, coletanea, ouvidasRecentes, carrinho,recebeBd,userLogged});
});

module.exports = router;

