angular.module('app.controllers')

.controller('controlRegistro', function($scope, $state, SrvUsuarios){

	$scope.usuario = {};
	$scope.usuario.nombre = "Jacinto";
	$scope.usuario.email = "usuario1@usuario1.com";
	$scope.usuario.cargo = "Cliente";
	$scope.usuario.habilitado = 1;

	$scope.Guardar = function(){

		var usuarioJson = JSON.stringify($scope.usuario);

		SrvUsuarios.insertarUsuario(usuarioJson)
			.then(function (respuesta){

				console.info("Respuesta", respuesta);

			}).catch(function (error){

				console.info("Error", error);

			})

	}

})