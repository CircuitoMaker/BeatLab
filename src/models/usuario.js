const Sequelize = require('sequelize')
const database = require('../models/db')
const usuario = database.define('usuario',{
  
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },

    sobrenome: {
      type: Sequelize.STRING,
      allowNull: false
    },
  
    dataNasc: {
      type: Sequelize.STRING,
      allowNull: false
    },

    nomeDeUsuario: {
      type: Sequelize.STRING,
      allowNull: false
    },

    foto: {
      type: Sequelize.STRING,
      allowNull: false
    },
 
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
 
    telefone: {
      type: Sequelize.STRING,
      allowNull: false
    },

    senha: {
      type: Sequelize.STRING,
      allowNull: false
    },
    
    admin: {
      type: Sequelize.STRING,
      default: '0'
    }
  
    
});

module.exports = usuario;