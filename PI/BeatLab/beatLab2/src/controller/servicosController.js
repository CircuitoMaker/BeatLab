const ServicoModel = require('../models/ServicoModel')
var coletanea = require('../database/repertorio.json')
var musicaAtual = require('../database/musicaAtual.json')



module.exports = {
    listaServicos: (req,res)=>{
        const servicos = ServicoModel.index();
        return res.render('servicos', {listaServicos: servicos, title:"Lista de Serviços"})
    }, 

    mostraAdminServicos:(req,res) => {
        res.render("admin", {musicaAtual})
    },

    criaServico:(req,res) => {
        console.log('req ponto body => '+ req.body.musica)
        ServicoModel.createOne(req)
        res.send("A Música " + req.body.musica + " Foi adicionada com sucesso!")
    },

    buscaServico: (req,res) =>{
     res.send(ServicoModel.findOne(req))
    },


    removeServico: (req,res) =>{
        ServicoModel.deleteOne(req)
        var music = req.body.id
       res.send("A Música " + music + " Foi EXCLUÍDA com sucesso!")   
       },

       atualizaServico:(req,res)=>{
       ServicoModel.updateOne(req)
       res.send("A Música " + req.body.id+ " Foi ATUALIZADA com sucesso!")  
       }

}