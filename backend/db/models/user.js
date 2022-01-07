'use strict';

const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');


// ------------------- User Model ------------------- //
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          };
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  }, {
    // Default scope when searching for Users returns ONLY 'username'
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      // User model scope for currentUser
      currentUser: { attributes: { exclude: ['hashedPassword'] } },
      // Used ONLY when checking login credentials of a user
      loginUser: { attributes: {} },
    },
  });


  // ------------------- User assocations ------------------- //
  User.associate = function (models) {
    // associations can be defined here
  };


  // ------------------- Instance model methods ------------------- //
  // Returns an object with only the User instance info that is safe to save to a JWT
  User.prototype.toSafeObject = function () {
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

  // Validate that 'password' string matches the User instance's hashedPassword
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };


  // ------------------- Static model methods ------------------- //
  // Returns a User with the requested id via currentUser scope
  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  // Search for one User with specified credential (username or email), then validate the password
  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');

    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });

    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    };
  };

  // During sign up, hash the User's password + return the created user
  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
    });

    return await User.scope('currentUser').findByPk(user.id);
  };

  return User;
};
