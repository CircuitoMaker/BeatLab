var express = require('express');
var router = express.Router();
//var musicaAtual = require('musicaAtual')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('mobile');
});

module.exports = router;
