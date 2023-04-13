const ServicoModel = require('../models/ServicoModel')
var coletanea = require('../database/repertorio.json')
var musicaAtual = require('../database/musicaAtual.json')
const musica = require('../models/musica')

const database = require('../models/db')
const usuario = require('../models/usuario') 
const sequelize = require('sequelize')
const usuarioModel = require('../models/usuarioModel')

const registro = require('../routes/registro') 
const bcrypt = require('bcrypt');



module.exports = {
    listaServicos: async(req,res)=>{
        const registro = usuarioModel.index();
     
//********************* */
        // console.log('Nome ====>> ' + req.body.nome)  
        // console.log('Sobrenome ====>> ' + req.body.surname) 
        // console.log('nasc ====>> ' + req.body.nasc) 
        // console.log('UserName ====>> ' + req.body.username) 

       // console.log("fieldnameeeee " + req.files['imagem'][0].filename)

//cripptografando a senha
let senhaCriptografada = bcrypt.hashSync(req.body.senha, 10);

// criando os produtos (inserindo produtos na tabela do banco)
 const novoUsuario = await usuario.create({
    nome:req.body.name,
    sobrenome: req.body.surname,
    dataNasc:req.body.nasc,
    nomeDeUsuario:req.body.username,
    email:req.body.email,
    telefone:req.body.phone,
    senha:senhaCriptografada,
    foto:'../images/imagensUsers/' + req.files['imagem'][0].filename,
    admin:0
    
 })

 const newUsuario = {
    nome:req.body.name,
    sobrenome: req.body.surname,
    dataNasc:req.body.nasc,
    nomeDeUsuario:req.body.username,
    email:req.body.email,
    telefone:req.body.phone,
    senha:req.body.senha,
    foto:'../images/imagensUsers/' + req.files['imagem'][0].filename,
    admin:0
 }
 

    
        res.render('novoUsuario',{newUsuario})
    }, 


    mostraAdminServicos:async(req,res) => {
//     const busca = req.params.id
//     console.log("RECEBIDO NA BUSCA -- " + req.params.id);
    
    },



    criaUsuario:(req,res) => {
        console.log('req ponto body name  => '+ req.body.nome)
        usuario.criaUsuario(req)
        //console.log('recebido +++ ====== ' + envia.musica)
        // res.redirect('/servicos/admin')
        //res.render('admin',{title: 'express', message: envia});
        res.send("o usuario " + req.body.name + " Foi cadastrado com sucesso!")
    },

  

    buscaServico: async(req,res) =>{
    // ServicoModel.findOne(req)
     var busca = req.body.id
     const envia = await musica.findByPk(11);
     console.log('CONSULTA ----  ' + busca);
     res.render('admin',{envia})  
     //res.send('Buscando ' + busca + ' id')
    },


        removeUsuario: (req,res) =>{
        ServicoModel.deleteOne(req)

        var userId = req.body.id

        usuario.destroy({
            where:{
              id:userId
            }
          });
     

        res.render('cadastro')
      // res.send("A Música " + music + " Foi EXCLUÍDA com sucesso!")   
       },





       atualizaServico:async(req,res)=>{

     console.log("Atualizando o usuario do ID = " + req.body.id);

    const atualiza = await usuario.findByPk(req.body.id);
    atualiza.nome = req.body.nome;
    atualiza.sobrenome = req.body.sobrenome;
    atualiza.dataNasc = req.body.dataNasc;
    atualiza.nomeDeUsuario = req.body.nomeDeUsuario;
    //atualiza.foto = '../images/imagensUsers/' + req.files['imagem'][0].filename;
   // atualiza.foto = "../images/imagensUsers/" + req.body.foto;
    atualiza.telefone = req.body.telefone;
    await atualiza.save();

//refaz o cookie para atualizar as views
    const busca = await usuario.findAll({
        where:{
             id:req.body.id
         }
     })
    res.cookie('userLogged', busca[0], { maxAge: 3600000 }); // expira em 1 hora
    
       const userLogged = req.cookies.userLogged;
       res.render('load');
    //    res.render('meuPerfil',userLogged);  
       }

}