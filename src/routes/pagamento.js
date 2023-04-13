var express = require('express');
var session = require('express-session');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const userLogged = req.cookies.userLogged;
  res.render('pagamento', { title: 'Express',userLogged });
});

module.exports = router;
