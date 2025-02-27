'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.createTable('hospedes', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull:false,
          autoIncrement: true,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        documento: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        telefone: {
          type: Sequelize.STRING,
          allowNull:false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
    
  },

  down: (queryInterface) => {
  

      return queryInterface.dropTable('hospedes');
   
  }
};
