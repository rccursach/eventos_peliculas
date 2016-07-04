'use strict';

/**
 * Module dependencies
 */

var peliculas = require('../controllers/peliculas');

module.exports = function(app) {
  // Peliculas Routes
  app.route('/api/peliculas')
    .get(peliculas.list)
    .post(peliculas.create);

  app.route('/api/peliculas/:peliculaId')
    .get(peliculas.read)
    .put(peliculas.update)
    .delete(peliculas.delete);

  // Finish by binding the Pelicula middleware
  app.param('peliculaId', peliculas.peliculaByID);
};
/*

var express = require('express');
var router = express.Router();
var peliculas = require('../controllers/peliculas');

/-* GET home page. *-/
router.get('/', peliculas.list);
router.post('/', peliculas.create);
//router.get('/api/peliculas', );
//router.get('/api/peliculas', );
//router.get('/api/peliculas', );

module.exports = router;
*/