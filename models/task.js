'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    timeCompleted: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Task;
};