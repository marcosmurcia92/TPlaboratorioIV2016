angular.module('app.controllers')

.controller('InicioCtrl', function($scope, $state, $timeout, UsuarioActual){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

})