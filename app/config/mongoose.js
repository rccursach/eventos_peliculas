'use strict';

var config = require('./config');
var mongoose = require('mongoose');

module.exports.loadModels = function() {
  require('../models/pelicula');
};

module.exports.connect = function () {
  var _this = this;

  var db = mongoose.connect(config.db.uri, config.db.options, function (err) {
    // Log Error
    if (err) {
      console.error('Could not connect to MongoDB!');
      console.log(err);
    }
    else {
      // Enabling mongoose debug mode if required
      mongoose.set('debug', config.db.debug);
    }
  });
};