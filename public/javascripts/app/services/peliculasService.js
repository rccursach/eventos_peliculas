'use strict';

angular
  .module('peliculas')
  .factory('PeliculasService', PeliculasService);

PeliculasService.$inject = ['$resource'];

function PeliculasService($resource) {
  return $resource('api/peliculas/:peliculaId', {
    peliculaId: '@_id'
  }, {
    update: {
      method: 'PUT'
    }
  });
}