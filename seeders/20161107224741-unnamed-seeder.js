'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Tasks', [{
        name: 'Program Assignment',
        completed: false
      },
      {
        name: 'Put Away Dishes',
        completed: false
      },
      {
        name: 'Take out Trash',
        completed: false
      },
      {
        name: 'Do Laundry',
        completed: false
      },
      {
        name: 'Test',
        completed: true
      }]);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Tasks', null, {});
  }
};
