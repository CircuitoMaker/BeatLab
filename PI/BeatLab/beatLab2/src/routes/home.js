var express = require('express');
var router = express.Router();
var coletanea = require('../database/repertorio.json')


var index = 1;
var musicaAtual = coletanea[index]

console.log(musicaAtual.endereco)
// var endMusica = musicaAtual.endereco

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express', musicaAtual});
});

module.exports = router;

