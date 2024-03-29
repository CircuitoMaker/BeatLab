const Sequelize = require('sequelize')
const database = require('../models/db')
const musica = database.define('repertorio',{
  
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    
    artista: {
      type: Sequelize.STRING,
      allowNull: false
    },

    musica: {
      type: Sequelize.STRING,
      allowNull: false
    },
  
    album: {
      type: Sequelize.STRING,
      allowNull: false
    },
 
    genero: {
      type: Sequelize.STRING,
      allowNull: false
    },
 
    imagem: {
      type: Sequelize.STRING,
      allowNull: false
    },

    endereco: {
      type: Sequelize.STRING,
      allowNull: false
    },
 
    preco: {
      type: Sequelize.STRING,
      allowNull: false
    },
 
    ano: {
      type: Sequelize.STRING,
      allowNull: false
    },
 
    gravadora: {
      type: Sequelize.STRING,
      allowNull: false
    },

    ativo: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
 
    oferta: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
    
});

module.exports = musica;