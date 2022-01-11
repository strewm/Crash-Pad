'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Listings', [
      {
        userId: 1,
        address: '5341 Highway 150',
        city: 'Sequatchie',
        state: 'TN',
        country: 'USA',
        lat: 35.146838,
        long: -85.673032,
        name: 'Denny Cove - Land to camp!',
        description: "Hello there! We are located in Sequatchie, TN, directly next to the amazing climbing at Denny Cove. Our property is on the cliff directly opposite of the Denny Cove East wall, which allows for unobstructed views of all of the climbing. We have all the amenities you might need, and can provide recommendations for local eats and climbs over the campfire. We know you'll enjoy your stay! Please note: Our site can accomodate up to 5 tents and 3 cars.",
        price: 15.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        address: '61 Arroyo Rd',
        city: 'Blue Diamond',
        state: 'NV',
        country: 'USA',
        lat: 36.045424,
        long: -115.401375,
        name: '(Site #1) Beautiful land in Red Rock Canyon!',
        description: '[Please note: This listing is for Site #1. It can accomodate up to 3 tents and 2 cars. Check out our other listing if you need more room!] Welcome! We have an extremely rare piece of land, located along Red Rock Canyon Road in Las Vegas, NV. We are 10 minutes from the majority of what Red Rock has to offer, making your alpine starts easy with no hassle. Gone are the days of trying to book one of the few sites at Red Rock campground, as well as the days of driving 45 minutes to BLM land! Ask us any questions about the climbing around here, and we would be happy to point you in the right direction.',
        price: 20.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        address: '61 Arroyo Rd',
        city: 'Blue Diamond',
        state: 'NV',
        country: 'USA',
        lat: 36.045424,
        long: -115.401375,
        name: '(Site #2) Beautiful land in Red Rock Canyon!',
        description: '[Please note: This listing is for Site #2. It can accomodate up to 5 tents and 3 cars. Check out our other listing if you need more room!] Welcome! We have an extremely rare piece of land, located along Red Rock Canyon Road in Las Vegas, NV. We are 10 minutes from the majority of what Red Rock has to offer, making your alpine starts easy with no hassle. Gone are the days of trying to book one of the few sites at Red Rock campground, as well as the days of driving 45 minutes to BLM land! Ask us any questions about the climbing around here, and we would be happy to point you in the right direction.',
        price: 25.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete('Listings', {
      userId: { [Op.in]: ['1', '2', '2'] }
    }, {});
  }
};
