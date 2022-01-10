'use strict';

const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Listings" }
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrlCheck(value) {
          if (Validator.isUrl(value) === 'false') {
            throw new Error('Must be a valid URL.');
          }
        }
      }
    },
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Listing, { foreignKey: 'listingId' });

  };
  return Image;
};
