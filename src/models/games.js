'use strict';
const games = (sequelize, DataTypes) => sequelize.define('Games', {
  gamesName: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
module.exports =games;
