angular.module('app.controllers')

.controller('exportarCtrl', function($scope, $state, $timeout, UsuarioActual){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

})