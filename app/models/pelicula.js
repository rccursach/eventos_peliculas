'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Pelicula Schema
 */
var PeliculaSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Debe proporcionar un nombre para la pelicula",
    unique : true,
    dropDups : true
  },
  imageURL: {
    type: String,
    default: '/img/peliculas/default.png'
  },
  updated: {
    type: Date
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Pelicula', PeliculaSchema);
