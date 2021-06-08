'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('data',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      email:{
        type:Sequelize.STRING,
        allowNull:false
      }
    },{
      timestamps:false
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('data');
  }
};
