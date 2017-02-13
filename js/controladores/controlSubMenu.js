angular.module('app.controllers')

.controller('MenuCtrl', function($scope, $rootScope, $auth, $state, $timeout, UsuarioActual){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	if(!$auth.isAuthenticated()){
		$rootScope.userActual.login = false;
		$rootScope.userActual.nombre = "No Logueado";
		$rootScope.userActual.cargo = "";
		$state.go('inicio');
	}

})