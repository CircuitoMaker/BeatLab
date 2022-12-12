const ServicoModel = require('../models/ServicoModel')
var coletanea = require('../database/repertorio.json')


var index = 1;
var musicaAtual = coletanea[index]


module.exports = {
    listaServicos: (req,res)=>{
        const servicos = ServicoModel.index();
        return res.render('servicos', {listaServicos: servicos, title:"Lista de Serviços"})
    }, 
    mostraAdminServicos:(req,res) => {
        res.render("admin", {musicaAtual})
    },

    criaServico:(req,res) => {
        console.log(req.body)
        ServicoModel.createOne(req)
        res.send("A Música " + req.body.nome + " Foi adicionada com sucesso!")
    },
    buscaServico: (req,res) =>{
     res.send(ServicoModel.findOne(req))   
    }
}