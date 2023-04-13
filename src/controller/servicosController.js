const ServicoModel = require('../models/ServicoModel')
var coletanea = require('../database/repertorio.json')
var musicaAtual = require('../database/musicaAtual.json')

const database = require('../models/db')
const musica = require('../models/musica')
const sequelize = require('sequelize')
const path = require('path')

module.exports = {
    listaServicos:async (req,res)=>{
      const userLogged = req.cookies.userLogged;
        const servicos = ServicoModel.index();
        return res.render('servicos', {listaServicos: servicos, title:"Lista de Serviços",userLogged})
    }, 


    mostraAdminServicos:async(req,res) => {

      if(req.cookies.userLogged.admin=="1"){

    const busca = req.params.id
   // console.log("RECEBIDO NA BUSCA -- " + req.params.id);   
    const envia = await musica.findByPk(busca)   
    //console.log('TESTESSSSSS ' + envia)

const produtos = await musica.findAll();
//console.log(produtos[0])

const caminho=[];
for(var x=0; x < produtos.length; x++){
  caminho[x] = produtos[x].endereco.substr(5);
//console.log("CAMINHO = " + caminho[x])
}

const userLogged = req.cookies.userLogged;
    res.render("admin",{produtos,caminho,userLogged})
      }else{
        return res.send("Você precisa estar LOGADO e ser um ADMIN para ter acesso a está página!")
      }

    },



    criaServico:async(req,res) => {
 
        //console.log('req ponto body => '+ req.body.musica)
        ServicoModel.createOne(req)

        const produtos = await musica.findAll();

const caminho=[];
for(var x=0; x < produtos.length; x++){
  caminho[x] = produtos[x].endereco.substr(5);
//console.log("CAMINHO = " + caminho[x])
}
       
const userLogged = req.cookies.userLogged;
        res.redirect('/load');
        res.render('admin',{title: 'Express', produtos,caminho,userLogged})
      //res.send("A Música " + req.body.musica + " Foi adicionada com sucesso!")
    },

  

    buscaServico: async(req,res) =>{
      const userLogged = req.cookies.userLogged;
     const busca = req.body.id
    // console.log("BUSCA === " + busca);    
      let cardMusic = await musica.findByPk(busca) //{id:busca,imagem:"gato",musica:"cao"};
     //console.log("MININCARD === " + cardMusic.musica)

     const produtos = await musica.findAll();
     const caminho=[];

for(var x=0; x < produtos.length; x++){
caminho[x] = produtos[x].endereco.substr(5);
//console.log("CAMINHO = " + caminho[x])
}


     res.render('admin',{produtos,caminho,cardMusic,userLogged})
     //res.send('Buscando ' + busca + ' id')
    },




    removeServico:async (req,res) =>{
        ServicoModel.deleteOne(req)

        var music = req.body.id
      
        musica.destroy({
          where:{
            id:music
          }
        });
        const userLogged = req.cookies.userLogged;
        const produtos = await musica.findAll();
        const caminho=[];
        for(var x=0; x < produtos.length; x++){
          caminho[x] = produtos[x].endereco.substr(5);
       // console.log("CAMINHO = " + caminho[x])
        }
        res.render('admin',{produtos,caminho,userLogged})
      // res.send("A Música " + music + " Foi EXCLUÍDA com sucesso!")   
       },




       atualizaServico:async(req,res)=>{
       ServicoModel.updateOne(req);

       const produtos = await musica.findAll();
       const caminho=[];
       for(var x=0; x < produtos.length; x++){
         caminho[x] = produtos[x].endereco.substr(5);
      // console.log("CAMINHO = " + caminho[x])
       }
       const userLogged = req.cookies.userLogged;
       res.render('admin',{produtos,caminho,userLogged})
       //res.send("A Música " + req.body.id + " Foi ATUALIZADA com sucesso!");  

       }

}