'use strict';

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Product', {
    title    : {
      type: DataTypes.STRING,
      allowNull : false
    },
    category : {
      type: DataTypes.STRING,
      allowNull : false
    },
    price    : {
      type     : DataTypes.INTEGER,
      allowNull : false
    }
  });

  return model;
};
