(async()=> {

    // criando as tabelas - 
    const database = require('../models/db');
    const musica = require('../models/musica')
    const usuario = require('../models/usuario')
    const sequelize = require('sequelize')
    await database.sync();

    // testa se o banco esta ativo ou inativo
   
   
    try {
        await database.sync();
        await sequelize.authenticate()
        console.log('CONECTADO!')
      } catch (err) {
        console.log('Sem Conexao com o BD')
      }

     
/*
// criando os produtos (inserindo produtos na tabela)
const novaMusica = await musica.create({
  "artista": "Nickel Back",
  "musica": "How You Remind Me",
  "imagem": "../images/imagensAlbuns/1673421368957.jpg",
  "album": "./src/imagensAlbuns/Silver Side Up",
  "genero": "rock",
  "endereco": "./src/audios/1673421368960.mp3",
  "preco": "5,00",
  "relevancia": 0,
  "ano": "2001",
  

        "gravadora":"Indie",
        "ativo":1,
        "oferta":0
}) 
*/


//console.log('A NOVA MUSICA É ' + novaMusica)

//Lendo dados do banco
//traz todos os elementos da tabela
//const recebe = await musica.findAll();
//return recebe

//traz apenas os produtos com o ID selecionado
//const recebe = await musica.findByPk(1); 

//filtra produto por algum atributo
/*
const recebe = await musica.findAll({
    where:{
preco:'2'
    }
}); 
*/
//console.log(recebe);


/*
// atualizando um produto
//antes temos que fazer a busca do produto pelo ID
const altera = await musica.findByPk(2); 
altera.nome = 'Stalone';
await altera.save();


//deletando produtos
const deleta = await musica.findByPk(2); 
deleta.nome = 'Stalone';
await deleta.destroy();
*/

})();