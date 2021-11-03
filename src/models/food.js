'use strict';
const food = (sequelize, DataTypes) => sequelize.define('Food', {
foodName: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  
  module.exports = food;