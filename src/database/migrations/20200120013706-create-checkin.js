'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
    return queryInterface.createTable('checkins', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true,
      },
      hospede: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'hospedes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      data_entrada: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      data_saida: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      adicional_veiculo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
  
      return queryInterface.dropTable('checkins');
    
  }
};
