'use strict';
const data = require('../../data/technologies.json');
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('UserTechnologies', {
      TechnologyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Technologies',
          key: 'id',
          as: 'TechnologyId'
        },
        primaryKey: true
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
          as: 'UserId'
        },
        primaryKey: true
      },
      level: {
        type: Sequelize.ENUM(data.levels)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('UserTechnologies');
  }
};
