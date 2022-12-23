var express = require('express');
var router = express.Router();
var coletanea = require('../database/repertorio.json')
var musicaAtual = require('../database/musicaAtual.json')
var ouvidasRecentes = require('../database/ouvidasRecentes.json')
var carrinho = require('../database/carrinho.json')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express', musicaAtual, coletanea, ouvidasRecentes, carrinho});
});

module.exports = router;

