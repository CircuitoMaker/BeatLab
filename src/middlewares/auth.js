const session = require('express-session');
const express = require('express');

function auth(req,res,next){
    
if(req.cookies.userLogged){

console.log('Você está LOGADO')
return next();

}else{
   
    console.log('Você NÃO está LOGADO')
return res.send("Você precisa estar LOGADO e ser um ADMIN para ter acesso a está página!")
}}

module.exports = auth;