angular.module('app.controllers')

.controller('controlRegistro', function($scope, $state, SrvUsuarios){

	$scope.usuario = {};
	$scope.usuario.nombre = "Jacinto";
	$scope.usuario.email = "usuario1@usuario1.com"
	$scope.usuario.clave = 1234;
	$scope.usuario.copiaclave = 1234;

	$scope.Guardar = function(){

		$scope.usuario.habilitado = true;

		var usuarioJson = JSON.stringify($scope.usuario);

		SrvUsuarios.InsertarUsuario(usuarioJson)
			.then(function (respuesta){

				console.info("Respuesta", respuesta);

			}).catch(function (error){

				console.info("Error", error);

			})

	}

})