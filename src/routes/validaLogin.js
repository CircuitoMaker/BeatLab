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

// verifica se o email digitado existe na base de dados
if(!busca[0]){
    console.log('email nao existe')
    const dados = { dados: 'Não foi possível fazer login'};
    return res.render('login',dados);
}

//SE encontrar, salva na session e aguarda a senha ser validada. 
if(emailRecebido == busca[0].email){
console.log('Encontrado o email: ' + busca[0].email)

//req.session.usuarioLogado = busca[0];

res.cookie('userLogged', busca[0], { maxAge: 3600000 }); // expira em 1 hora

//req.session.save();
}else{
  //SE não for encontrado, lança um ALERT na view.
    console.log('Email Não Encontrado!')
}


//testes
//  console.log(req.session);
//  console.log('Session sem senha = ' + req.session.usuarioLogado);
//  console.log('Session = ' + req.session.usuarioLogado.nomeDeUsuario);
//  console.log(req.session.usuarioLogado.telefone);
// //


//let senhaDoBanco = busca[0].senha;
const match = bcrypt.compareSync(senhaRecebida, busca[0].senha);

if(match){
//SE a senha estiver correta, verifica se é um usuário administrador.    
    console.log('A senha está correta!');
//SE for, envia para a rota de ADMIN
    if(busca[0].admin == '1'){
        console.log('É ADMIN')
      res.redirect('/servicos/admin')
    }else{
//SE NÃO, Envia para a rota de usuário comum.        
        console.log('Não é ADMIN')
        res.redirect('/meuPlayer')
    }
}else{
    //SE a senha estiver errada, lança um ALERT na view.
    console.log('A senha está incorreta!');
    const dados = { dados: 'Não foi possível fazer login'};
    return res.render('login',dados);
}

 
});

module.exports = router;
