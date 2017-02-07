angular.module('app.controllers')

.controller('graficosCtrl', function($scope, $state, $timeout, UsuarioActual){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

})