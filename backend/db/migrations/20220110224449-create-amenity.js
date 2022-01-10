'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Amenities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      listingId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Listings" }
      },
      water: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      electricity: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      kitchen: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      shower: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      toilet: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Amenities');
  }
};
