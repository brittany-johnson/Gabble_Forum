'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('Likes', {
     id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      autoIncrement: false,
     },
     createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
     UserId: {
      type: Sequelize.UUID,
      primaryKey: true,
     },
     PostId: {
      type: Sequelize.UUID,
      primaryKey: true,
     },
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Likes');
  }
};
