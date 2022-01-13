'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo1@demo.io',
        username: 'demo-one',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'demo2@demo.io',
        username: 'demo-two',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'demo3@demo.io',
        username: 'demo-three',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'demo@demo.io',
        username: 'demo',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['demo-one', 'demo-two', 'demo-three'] }
    }, {});
  }
};
