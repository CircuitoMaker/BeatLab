
const fs = require('fs')
const path = require('path')
const { receiveMessageOnPort } = require('worker_threads')

const ServicoModel = require('./ServicoModel')

const database = require('./db')
const usuario = require('./usuario')
const sequelize = require('sequelize')


module.exports={
    index:async()=>{
        return usuario
    },

    criaUsuario:async(req,file)=> {
        console.log('Nome ====>> ' + req.body.nome)  
        console.log('Sobrenome ====>> ' + req.body.sobrenome) 
        console.log('nasc ====>> ' + req.body.nasc) 
        console.log('UserName ====>> ' + req.body.userName) 

        console.log("fieldnameeeee " + req.files['imagem'][0].filename)

// criando os usuarios (inserindo usuarios na tabela do banco)
 const novoUsuario = await usuario.create({
    nome:req.body.nome,
    sobrenome: req.body.surname,
    nasc:req.body.nasc,
    userName:req.body.username,
    email:req.body.email,
    phone:req.body.phone,
    senha:req.body.senha
   // imagem:'../images/imagensUsers/' + req.files['imagem'][0].filename  
})

res.send('usuario criado!')
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