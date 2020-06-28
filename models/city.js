'use strict';
module.exports = (sequelize, DataTypes) => {
  var city = sequelize.define('city', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    city: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    price: DataTypes.STRING,
    status: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true
  });
  city.associate = function(models) {
    // associations can be defined here
  };
  return city;
};