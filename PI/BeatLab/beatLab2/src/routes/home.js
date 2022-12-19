var express = require('express');
var router = express.Router();
//var coletanea = require('../database/repertorio.json')
var musicaAtual = require('../database/musicaAtual.json')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express', musicaAtual});
});

module.exports = router;

