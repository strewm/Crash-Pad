'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [
      {
        listingId: 1,
        url: 'https://images.unsplash.com/photo-1544449343-3d4722cd602f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: 1,
        url: 'https://images.unsplash.com/photo-1480779735619-f73b30fdc062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: 1,
        url: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: 2,
        url: 'https://images.unsplash.com/photo-1606638582560-0c11b986e2cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: 3,
        url: 'https://images.unsplash.com/photo-1606638582560-0c11b986e2cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: 3,
        url: 'https://images.unsplash.com/photo-1627776353512-48d5b0a63e7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: 3,
        url: 'https://images.unsplash.com/photo-1627776353501-3370031896ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: 3,
        url: 'https://images.unsplash.com/photo-1626034802591-67bfe98559f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        listingId: 3,
        url: 'https://images.unsplash.com/photo-1486082570281-d942af5c39b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete('Images', {
      listingId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
