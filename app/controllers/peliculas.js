'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Pelicula = mongoose.model('Pelicula'),
  errorHandler = require(path.resolve('./app/controllers/errors')),
  _ = require('lodash');

/**
 * Create a Pelicula
 */
exports.create = function(req, res) {
  var pelicula = new Pelicula(req.body);
  pelicula.user = req.user;

  pelicula.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(pelicula);
    }
  });
};

/**
 * Show the current Pelicula
 */
exports.read = function(req, res) {
  // convert mongoose document to JSON
  var pelicula = req.pelicula ? req.pelicula.toJSON() : {};

  res.jsonp(pelicula);
};

/**
 * Update a Pelicula
 */
exports.update = function(req, res) {
  var pelicula = req.pelicula ;

  pelicula = _.extend(pelicula , req.body);

  pelicula.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(pelicula);
    }
  });
};

/**
 * Delete an Pelicula
 */
exports.delete = function(req, res) {
  var pelicula = req.pelicula ;

  pelicula.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(pelicula);
    }
  });
};

/**
 * List of Peliculas
 */
exports.list = function(req, res) { 
  //Pelicula.find().sort('-created').populate('user', 'displayName').exec(function(err, peliculas) {
    Pelicula.find().sort('-created').exec(function(err, peliculas) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(peliculas);
    }
  });
};

/**
 * Pelicula middleware
 */
exports.peliculaByID = function(req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Pelicula is invalid'
    });
  }

  // Pelicula.findById(id).populate('user', 'displayName').exec(function (err, pelicula) {
  Pelicula.findById(id).exec(function (err, pelicula) {
    if (err) {
      return next(err);
    } else if (!pelicula) {
      return res.status(404).send({
        message: 'No Pelicula with that identifier has been found'
      });
    }
    req.pelicula = pelicula;
    next();
  });
};
