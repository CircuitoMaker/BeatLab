var express = require('express');
var router = express.Router();
var coletanea = require('../database/repertorio.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('listaDeProdutos', { title: 'Express', coletanea });
});

module.exports = router;
