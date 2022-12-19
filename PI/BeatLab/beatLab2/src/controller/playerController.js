
var express = require('express');
var router = express.Router();

const fs = require('fs')
const path = require('path')

const PlayerModel = require('../models/PlayerModel');
var coletanea = require('../database/repertorio.json');
var musicaAtual = require('../database/musicaAtual.json');
var index = require('../database/index.json');



module.exports = {
    proximaMusica: (req,res)=>{
        console.log("Avancou uma Musica >> "  + req.body.func)
       //PlayerModel.avancaUma(req)
    // res.send("Avancou uma Musica >> "  + req.body.func)

     index[0].index++
   //musicaAtual.pop
   musicaAtual[0]=coletanea[index[0].index]
   console.log('A musica atual e = ' + musicaAtual[0].musica)
   fs.writeFileSync(path.join(__dirname , "../database/musicaAtual.json"), JSON.stringify(musicaAtual,null,4))
   fs.writeFileSync(path.join(__dirname , "../database/index.json"), JSON.stringify(index,null,4))



   res.redirect("../home")

    }, 
    musicaAnterior:(req,res) => {
        console.log("Voltou uma Musica << " + req.body.func)
       // PlayerModel.voltaUma(req)
        // res.send("Voltou uma Musica >> "  + req.body.func)


        index[0].index--
        //musicaAtual.pop
        musicaAtual[0]=coletanea[index[0].index]
        console.log('A musica atual e = ' + musicaAtual[0].musica)
        fs.writeFileSync(path.join(__dirname , "../database/musicaAtual.json"), JSON.stringify(musicaAtual,null,4))
        fs.writeFileSync(path.join(__dirname , "../database/index.json"), JSON.stringify(index,null,4))
     
     

        res.redirect("../home")
    }

}