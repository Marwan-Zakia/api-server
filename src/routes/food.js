'use strict';

const express = require('express');
// const { food } = require('../models/index');
const foodRouter = express.Router();
const {foodCollection} = require('../models/index');



foodRouter.get('/food', getFood); 
 foodRouter.get('/food/:id', getFood); 
foodRouter.post('/food', nameFood); 
foodRouter.put('/food/:id', updateFood); 
foodRouter.delete('/food/:id', deleteFood); 

async function getFood(req,res) {
  const id = parseInt(req.params.id);
    let foodItem = await foodCollection.read(id);
    res.status(200).json(foodItem);
}

async function nameFood(req,res) {
    let foodBody = req.body;
    let foodItem = await foodCollection.create(foodBody);
    res.status(201).json(foodItem);
}


async function updateFood(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let foodItem = await foodCollection.update(id,obj);

  res.status(201).json(foodItem);
}
async function deleteFood(req, res) {
  const id = parseInt(req.params.id);
  let foodItem =await foodCollection.delete(id);
  res.status(204).json(foodItem);
}





module.exports = foodRouter;