const ServicoModel = require('../models/ServicoModel')
var coletanea = require('../database/repertorio.json')
var musicaAtual = require('../database/musicaAtual.json')

const database = require('../models/db')
const musica = require('../models/musica')
const sequelize = require('sequelize')


module.exports = {
    listaServicos:async (req,res)=>{

     

        const servicos = ServicoModel.index();
        return res.render('servicos', {listaServicos: servicos, title:"Lista de Serviços"})
    }, 


    mostraAdminServicos:async(req,res) => {
    const busca = req.params.id
    console.log("RECEBIDO NA BUSCA -- " + req.params.id);   
    const envia = await musica.findByPk(busca)   
    console.log('TESTESSSSSS ' + envia)

const produtos = await musica.findAll();
console.log(produtos[0])


  //  if(envia != null){
    res.render("admin",{produtos})
    // }else{
    //   res.render("admin",{produtos:produtos},{envia:{
    //     artista:'Artista',
    //     musica:'Musica',
    //     album:'Album',
    //     genero:'Gênero',
    //     preco:'Preco R$',
    //     gravadora:'Gravadora',
    //     ano:'Ano',
    //     id:'id',
    //     ativo:'0',
    //     oferta:'0'
    //   }
    //   })
    // }
    
    },



    criaServico:async(req,res) => {
 
        console.log('req ponto body => '+ req.body.musica)
        ServicoModel.createOne(req)
        
        const produtos = await musica.findAll();

        res.render('admin',{produtos})
      //res.send("A Música " + req.body.musica + " Foi adicionada com sucesso!")
    },

  

    buscaServico: async(req,res) =>{
    // ServicoModel.findOne(req)
     var busca = req.body.id

const envia = await musica.findByPk(11);
console.log('CONSULTA ----  ' + busca);
     res.render('admin',{envia})
    
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

        const produtos = await musica.findAll();

        res.render('admin',{produtos})
      // res.send("A Música " + music + " Foi EXCLUÍDA com sucesso!")   
       },




       atualizaServico:async(req,res)=>{
       ServicoModel.updateOne(req);
       res.send("A Música " + req.body.id + " Foi ATUALIZADA com sucesso!")  
       }

}