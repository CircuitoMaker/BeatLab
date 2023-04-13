const session = require('express-session');
const express = require('express');

const servicos = require('../database/repertorio.json')
const fs = require('fs')
const path = require('path')
const { receiveMessageOnPort } = require('worker_threads')

const ServicoModel = require('../models/ServicoModel')

const database = require('../models/db')
const musica = require('../models/musica')
const sequelize = require('sequelize')


module.exports={
    index:async()=>{
        return servicos
    },
    
    createOne:async(req,file)=> {
        console.log('req ====>> ' + req.body.artista)      
        console.log("fieldnameeeee " + req.files['imagem'][0].filename)

// criando os produtos (inserindo produtos na tabela do banco)
 const novaMusica = await musica.create({
    musica:req.body.musica,
    album: req.body.album,
    genero:req.body.genero,
    imagem:'../images/imagensAlbuns/' + req.files['imagem'][0].filename,
    endereco:'./src/audios/' + req.files['endereco'][0].filename,
    preco:req.body.preco,
    ano:req.body.ano,
    gravadora:req.body.gravadora,
    ativo:req.body.ativo,
    oferta:req.body.oferta,
    artista:req.body.artista
})
}, 
    

// Procurando os produtos
findOne:async(req,res) => {      

const buscar = await musica.findOne()

console.log('procura === ' + buscar.musica)

return buscar.musica       
},


// Deletando um produto da tabela
deleteOne:async(req,res) => {
const idADeletar = req.body.id;
await  musica.destroy({where:{
id: idADeletar
 }});
console.log('deletando =====>>> ' + idADeletar);

}, 


// Atualizando um produto da tabela
updateOne:async(req,res)=>{
console.log("Atualizando a musica do ID = " + req.body.id);

    const atualiza = await musica.findByPk(req.body.id);
    atualiza.artista = req.body.artista;
    atualiza.musica = req.body.musica;
    atualiza.album = req.body.album;
    atualiza.genero = req.body.genero;
    atualiza.preco = req.body.preco;
    atualiza.gravadora = req.body.gravadora;
    atualiza.ano = req.body.ano;
    atualiza.ativo = req.body.ativo;
    atualiza.oferta = req.body.oferta;
    await atualiza.save();

}
}