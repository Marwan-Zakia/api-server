'use strict';

const express = require('express');
const { gamesCollection } = require('../models/index');
const gamesRouter = express.Router();

async function getGames(req,res) {
  const id = parseInt(req.params.id);
    let gameItem = await gamesCollection.read(id);
    res.status(200).json(gameItem);
}

async function nameGame(req,res) {
    let newCusInfo = req.body;
    let gameItem = await gamesCollection.create(newCusInfo);
    res.status(201).json(gameItem);
}


async function updateGame(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let gameItem = await gamesCollection.update(id,obj);

  res.status(201).json(gameItem);
}
async function deleteGame(req, res) {
  const id = parseInt(req.params.id);
  let gameItem =await gamesCollection.delete(id);
  res.status(204).json(gameItem);
}

gamesRouter.get('/games/:id', getGames);
gamesRouter.get('/games', getGames);
gamesRouter.post('/games', nameGame); 
gamesRouter.put('/games/:id', updateGame);
gamesRouter.delete('/games/:id', deleteGame); 

module.exports = gamesRouter;