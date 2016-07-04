'use strict';

// Setting up route
angular.module('peliculas').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise('/');

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    // Home state routing
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'javascripts/app/views/list-peliculas.client.view.html',
      controller: 'PeliculasListController',
      controllerAs: 'vm',
      data: {
        pageTitle: 'Peliculas List'
      }
    })
    .state('not-found', {
      url: '/not-found',
      templateUrl: 'javascripts/app/views/404.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('bad-request', {
      url: '/bad-request',
      templateUrl: 'javascripts/app/views/400.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('forbidden', {
      url: '/forbidden',
      templateUrl: 'javascripts/app/views/403.client.view.html',
      data: {
        ignoreState: true
      }
    });
  }
]);