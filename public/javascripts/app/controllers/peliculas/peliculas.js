'use strict';

// Peliculas controller
angular
  .module('peliculas')
  .controller('PeliculasController', PeliculasController);

PeliculasController.$inject = ['$scope', '$state', 'peliculaResolve'];

function PeliculasController ($scope, $state, pelicula) {
  var vm = this;

  vm.pelicula = pelicula;
  vm.error = null;
  vm.form = {};
  vm.remove = remove;
  vm.save = save;

  // Remove existing Pelicula
  function remove() {
    if (confirm('Seguro que desea eliminar esta película?')) {
      vm.pelicula.$remove($state.go('peliculas.list'));
    }
  }

  // Save Pelicula
  function save(isValid) {
    if (!isValid) {
      $scope.$broadcast('show-errors-check-validity', 'vm.form.peliculaForm');
      return false;
    }

    // TODO: move create/update logic to service
    if (vm.pelicula._id) {
      vm.pelicula.$update(successCallback, errorCallback);
    } else {
      vm.pelicula.$save(successCallback, errorCallback);
    }

    function successCallback(res) {
      $state.go('peliculas.view', {
        peliculaId: res._id
      });
    }

    function errorCallback(res) {
      vm.error = res.data.message;
    }
  }
}