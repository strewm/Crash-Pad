'use strict';

module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      validate: { min: -90, max: 90 }
    },
    lng: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      validate: { min: -180, max: 180 }
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
    Listing.belongsTo(models.User, { foreignKey: 'userId' });
    Listing.hasOne(models.Amenity, { foreignKey: 'listingId' });
    Listing.hasMany(models.Image, { foreignKey: 'listingId' });
  };
  return Listing;
};
