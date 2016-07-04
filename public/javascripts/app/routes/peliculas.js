'use strict';

angular
  .module('peliculas')
  .config(routeConfig);

routeConfig.$inject = ['$stateProvider'];

function routeConfig($stateProvider) {
  $stateProvider
    .state('peliculas', {
      abstract: true,
      url: '/peliculas',
      template: '<ui-view/>'
    })
    .state('peliculas.list', {
      url: '',
      templateUrl: 'javascripts/app/views/list-peliculas.client.view.html',
      controller: 'PeliculasListController',
      controllerAs: 'vm',
      data: {
        pageTitle: 'Peliculas List'
      }
    })
    .state('peliculas.create', {
      url: '/create',
      templateUrl: 'javascripts/app/views/form-pelicula.client.view.html',
      controller: 'PeliculasController',
      controllerAs: 'vm',
      resolve: {
        peliculaResolve: newPelicula
      },
      data: {
        roles: ['user', 'admin'],
        pageTitle : 'Peliculas Create'
      }
    })
    .state('peliculas.edit', {
      url: '/:peliculaId/edit',
      templateUrl: 'javascripts/app/views/form-pelicula.client.view.html',
      controller: 'PeliculasController',
      controllerAs: 'vm',
      resolve: {
        peliculaResolve: getPelicula
      },
      data: {
        roles: ['user', 'admin'],
        pageTitle: 'Edit Pelicula {{ peliculaResolve.name }}'
      }
    })
    .state('peliculas.view', {
      url: '/:peliculaId',
      templateUrl: 'javascripts/app/views/view-pelicula.client.view.html',
      controller: 'PeliculasController',
      controllerAs: 'vm',
      resolve: {
        peliculaResolve: getPelicula
      },
      data:{
        pageTitle: 'Pelicula {{ articleResolve.name }}'
      }
    });
}

getPelicula.$inject = ['$stateParams', 'PeliculasService'];

function getPelicula($stateParams, PeliculasService) {
  return PeliculasService.get({
    peliculaId: $stateParams.peliculaId
  }).$promise;
}

newPelicula.$inject = ['PeliculasService'];

function newPelicula(PeliculasService) {
  return new PeliculasService();
}