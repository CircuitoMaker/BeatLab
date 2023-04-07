var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require("express-session");
var cookies = require('cookie-parser')


// criptografia
var app = express();

app.use(session({
  secret:"projetoExpress",
  resave:true,
  saveUninitialized:true
}))




// para stream
var fs = require('fs')
var getStat = require('util').promisify(fs.stat);


var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');
var usersRouter = require('./routes/users');
var finalizarCompraRouter = require('./routes/finalizarCompra');
var listaDeProdutosRouter = require('./routes/listaDeProdutos');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var validaLoginRouter = require('./routes/validaLogin');

var cadastroRouter = require('./routes/cadastro');
var signupRouter = require('./routes/signup');
var servicosRouter = require('./routes/servicos');
var registroRouter = require('./routes/registro');
var apiRouter = require('./routes/api')
var audioRouter = require("./routes/audio")
var imagemRouter = require('./routes/imagem')
var mobileRouter = require('./routes/mobile');
var ListaDeProdutosRouter = require('./routes/listaDeProdutos');

var carrinhoApiRouter = require('./routes/carrinhoApi')
var carrinhoRouter = require('./routes/carrinho')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'))

app.use(cookies());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/finalizarCompra', finalizarCompraRouter);
app.use('/listaDeProdutos', listaDeProdutosRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/validaLogin', validaLoginRouter);

app.use('/cadastro', cadastroRouter);
app.use('/signup', signupRouter);
app.use('/servicos', servicosRouter);

app.use('/registro', registroRouter);

app.use('/api', apiRouter);
app.use('/audio', audioRouter);

app.use('/imagem', imagemRouter);
app.use('/mobile', mobileRouter);
app.use('/carrinhoApi', carrinhoApiRouter);
app.use('/carrinho', carrinhoRouter);


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
