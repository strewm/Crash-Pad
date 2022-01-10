'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Listings" }
    },
    water: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    electricity: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    kitchen: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    shower: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    toilet: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {});
  Amenity.associate = function(models) {
    // associations can be defined here
    Amenity.belongsTo(models.Listing, { foreignKey: 'listingId' })
  };
  return Amenity;
};
