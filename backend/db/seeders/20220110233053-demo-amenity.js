'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Amenities', [
      {
        listingId: 1,
        water: 'true',
        electricity: 'true',
        kitchen: 'true',
        shower: 'true',
        toilet: 'true',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: 2,
        water: 'true',
        electricity: 'true',
        kitchen: 'false',
        shower: 'false',
        toilet: 'true',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: 3,
        water: 'true',
        electricity: 'true',
        kitchen: 'false',
        shower: 'false',
        toilet: 'true',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete('Amenities', {
      listingId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
