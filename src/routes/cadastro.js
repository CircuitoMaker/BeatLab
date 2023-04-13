var express = require('express');
const session = require('express-session');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const userLogged = req.cookies.userLogged;
  console.log(userLogged)
  res.render('cadastro', { title: 'Express',userLogged});
});

module.exports = router;
