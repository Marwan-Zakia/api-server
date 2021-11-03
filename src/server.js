'use strict';
const express = require('express');
require('dotenv').config();
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');


const PORT = process.env.PORT || 3001;

app.use(logger);
app.use(express.json());

const gamesRouter = require('./routes/games');
const foodRouter = require('./routes/food');

app.use(gamesRouter); 
app.use(foodRouter);

app.get('/', (req, res) => {
  res.status(200).send('everything is awesome ')

})




app.use('*', notFoundHandler);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => {
    console.log(`the server starts at ${PORT}`);
  });
}


module.exports = {
  server: app,
  start: start
}