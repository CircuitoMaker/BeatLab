var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const userLogged = req.cookies.userLogged
  res.render('login', { title: 'Express',userLogged});
});

module.exports = router;
