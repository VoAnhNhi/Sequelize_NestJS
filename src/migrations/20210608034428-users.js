'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users',{
      username:{
        type:Sequelize.STRING,
        primaryKey:true,
        allowNull:false
      },
      password:{
        type:Sequelize.STRING,
        allowNull:false
      }
    },{
      timestamps:false
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
