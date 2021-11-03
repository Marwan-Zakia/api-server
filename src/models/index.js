'use strict';
require('dotenv').config();
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');


let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const games = require('./games');
const food = require('./food');
let gamesModel= games(sequelize, DataTypes);
let foodModel = food(sequelize, DataTypes);



const Collection = require('./lib/collection.js');

const gamesCollection = new Collection(gamesModel);
const foodCollection = new Collection(foodModel);

module.exports = {
  db: sequelize,
  gamesCollection:gamesCollection, 
  foodCollection: foodCollection 
};