'use strict';
module.exports = function ( req, res, next) {

  const errorObject = {
    status: 404,
    message: 'Sorry'
  }

  res.status(404).json(errorObject);
}