'use strict';

angular
  .module('peliculas')
  .controller('PeliculasListController', PeliculasListController);

PeliculasListController.$inject = ['PeliculasService', '$scope'];

function PeliculasListController(PeliculasService, $scope) {
  var vm = this;

  vm.peliculas = PeliculasService.query();
}