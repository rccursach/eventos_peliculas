'use strict';

//Start by defining the main module and adding the module dependencies
angular.module('peliculas', ['ngResource', 'ngAnimate', 'ngMessages', 'ui.router', 'ui.bootstrap', 'angularFileUpload']);

// Setting HTML5 Location Mode
angular.module('peliculas').config(['$locationProvider', '$httpProvider',
  function ($locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
  }
]);

angular.module('peliculas').run(function ($rootScope, $state) {

});

//Then define the init function for starting up the application
angular.element(document).ready(function () {
  angular.bootstrap(document, ['peliculas']);
});

