angular.module('app.controllers')

.controller('MenuCtrl', function($scope, $auth, $state, $timeout, UsuarioActual){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	if(!$auth.isAuthenticated()){
		$state.go('inicio');
	}

})