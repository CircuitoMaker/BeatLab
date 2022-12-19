var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// para stream
var fs = require('fs')
var getStat = require('util').promisify(fs.stat);


var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');
var usersRouter = require('./routes/users');
var cestaRouter = require('./routes/cesta');
var finalizarCompraRouter = require('./routes/finalizarCompra');
var listaDeProdutosRouter = require('./routes/listaDeProdutos');
var loginRouter = require('./routes/login');
var painelUsuarioRouter = require('./routes/painelUsuario');
var signupRouter = require('./routes/signup');
var servicosRouter = require('./routes/servicos');

var apiRouter = require('./routes/api')
var audioRouter = require("./routes/audio")
var imagemRouter = require('./routes/imagem')

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));


// const upload = multer({storage})
   




app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/cesta', cestaRouter);
app.use('/finalizarCompra', finalizarCompraRouter);
app.use('/listaDeProdutos', listaDeProdutosRouter);
app.use('/login', loginRouter);
app.use('/painelUsuario', painelUsuarioRouter);
app.use('/signup', signupRouter);
app.use('/servicos', servicosRouter);

app.use('/api', apiRouter);
app.use('/audio', audioRouter);
app.use('/imagem', imagemRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
