var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.destroy();
  console.log('Sessão finalizada!')
  return res.redirect('/login')
});



module.exports = router;
