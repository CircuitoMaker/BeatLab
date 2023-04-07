var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt')
var usuario = require('../models/usuario');
const { where } = require('sequelize');


/* GET home page. */
router.post('/', async (req, res, next) =>{
   
var emailRecebido = req.body.email;
var senhaRecebida = req.body.senha;

    console.log(emailRecebido)
    console.log(senhaRecebida)
    console.log(req.session)

 const busca = await usuario.findAll({
    where:{
         email:emailRecebido
     }
 })


if(!busca[0]){
    console.log('email nao existe')
    const dados = { dados: 'Não foi possível fazer login'};
   return res.render('login',dados)
}

let buscaEmail = busca[0].email
if(emailRecebido == buscaEmail){
console.log('Encontrado o email: ' + busca[0].email)
req.session.userLogged = busca[0]
}else{
    console.log('Email Não Encontrado!')
    
}

let senhaDoBanco = busca[0].senha;
const match = bcrypt.compareSync(senhaRecebida, senhaDoBanco);

if(match){
    console.log('A senha está correta!')
}else{
    console.log('A senha está incorreta!')
    
}

console.log(req.session)
console.log('Session sem senha = ' + req.session.userLogged.usuario)
console.log('Session = ' + req.session.userLogged.nomeDeUsuario)
console.log(req.session.userLogged.telefone)
   

if(req.session.userLogged.admin == '1'){
    console.log('É ADMIN')
  res.redirect('/servicos/admin')
}else{
    console.log('Não é ADMIN')
    res.redirect('/home')
}

    //res.render('carrinho', { title: 'Express',carrinho });
});

module.exports = router;
