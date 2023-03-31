const ServicoModel = require('../models/ServicoModel')
var coletanea = require('../database/repertorio.json')
var musicaAtual = require('../database/musicaAtual.json')

const database = require('../models/db')
const musica = require('../models/musica')
const usuario = require('../models/usuario') 
const sequelize = require('sequelize')
const usuarioModel = require('../models/usuarioModel')

const registro = require('../routes/registro') 
const bcrypt = require('bcrypt');



module.exports = {
    listaServicos: async(req,res)=>{
        const registro = usuarioModel.index();
     
//********************* */
console.log('Nome ====>> ' + req.body.nome)  
        console.log('Sobrenome ====>> ' + req.body.surname) 
        console.log('nasc ====>> ' + req.body.nasc) 
        console.log('UserName ====>> ' + req.body.username) 

       // console.log("fieldnameeeee " + req.files['imagem'][0].filename)

//cripptografando a senha
let senhaCriptografada = bcrypt.hashSync(req.body.senha,10);


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
 
 //salva o novo usuario na session
req.session.usuario = newUsuario;

//*************************** */

        //res.send('Seja bem vindo '  + req.body.username + ' agora vc pode curtir suas músicas preferidas!')
        //  return res.render('registro', {listaServicos: registro, title:"Usuarios"})
        res.render('novoUsuario',{newUsuario})
    }, 


    mostraAdminServicos:async(req,res) => {
//     const busca = req.params.id

//     console.log("RECEBIDO NA BUSCA -- " + req.params.id);
    
//     const envia = await musica.findByPk(busca)
    
// console.log('TESTESSSSSS' + envia)

//     if(envia != null){
//     res.render("admin",{envia})
//     }else{
//       res.render("admin",{envia:{
//         artista:'Artista',
//         musica:'Musica',
//         album:'Album',
//         genero:'Gênero',
//         preco:'Preco R$',
//         gravadora:'Gravadora',
//         ano:'Ano',
//         id:'id',
//         ativo:'0',
//         oferta:'0'
//       }
//       })
//     }
    

    },



    criaUsuario:(req,res) => {
 
        console.log('req ponto body name  => '+ req.body.nome)
        usuario.criaUsuario(req)
        
// var envia='';

//         if(req.params.id){
//             envia = await musica.findAll({
//               where:{
//                 id:6 //req.params.id
//               }
//             })

//           }else{

//             envia = await musica.findByPk(11);           
//           }



console.log('recebido +++ ====== ' + envia.musica)

    //    res.redirect('/servicos/admin')
    //  res.render('admin',{title: 'express', message: envia});
        
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




    removeServico: (req,res) =>{
        ServicoModel.deleteOne(req)
        var music = req.body.id

        res.render('admin')
      // res.send("A Música " + music + " Foi EXCLUÍDA com sucesso!")   
       },


       atualizaServico:async(req,res)=>{
       ServicoModel.updateOne(req);
       res.send("A Música " + req.body.id + " Foi ATUALIZADA com sucesso!")  
       }

}