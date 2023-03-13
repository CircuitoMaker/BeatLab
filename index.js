(async()=> {

    // criando as tabelas - 
    const database = require('./db');
    const musica = require('./musica')
   

    const sequelize = require('sequelize')
   
    // testa se o banco esta ativo ou inativo
    try {
        await database.sync();
        //await sequelize.authenticate()
        console.log('CONECTADO!')
      } catch (err) {
        console.log('Sem Conexao com o BD')
      }

     



/*
// criando os produtos (inserindo produtos na tabela)
const novaMusica = musica.create({
nome:'tes',
album:'ual',
genero:'pop',
imagem:'lin12',
endereco:'..ah',
preco:'2',
ano:'202',
gravadora:'rds',
ativo:1,
oferta:0,
artista:'Robe s'
})
*/

//Lendo dados do banco
//traz todos os elementos da tabela
//const recebe = await musica.findAll();

//traz apenas os produtos com o ID selecionado
const recebe = await musica.findByPk(1); 

//filtra produto por algum atributo
/*
const recebe = await musica.findAll({
    where:{
preco:'2'
    }
}); 
*/
console.log(recebe);


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