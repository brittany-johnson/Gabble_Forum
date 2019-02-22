'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addConstraint('userinfos', ['username'], {
    type: 'unique',
    name: 'custom_unique_constraint_username_'
  });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
