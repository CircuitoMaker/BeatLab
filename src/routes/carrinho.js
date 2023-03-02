var express = require('express');
var router = express.Router();
var carrinho = require('../database/carrinho.json')

/* GET home page. */
router.get('/', function(req, res, next) {
   
    res.render('carrinho', { title: 'Express',carrinho });
});

module.exports = router;
