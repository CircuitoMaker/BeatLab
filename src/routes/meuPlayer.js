var express = require('express');
var router = express.Router();
var session = require('express-session');


/* GET home page. */
router.get('/', function(req, res, next) {
  const userLogged = req.cookies.userLogged;
  res.render('meuPlayer', { title: 'Express',userLogged });
});

module.exports = router;
