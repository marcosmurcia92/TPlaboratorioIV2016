angular.module('app.controllers')

.controller('controlRegistro', function($scope, $state, SrvUsuarios){

	$scope.usuario = {};
	$scope.usuario.nombre = "Jacinto";
	$scope.usuario.email = "usuario1@usuario1.com";
	$scope.usuario.cargo = "Cliente";
	$scope.usuario.idSuc = 0;
	$scope.usuario.habilitado = 1;

	$scope.Guardar = function(){


		SrvUsuarios.verificarExistente($scope.usuario.email)
			.then(function (respuesta){

				console.info("Respuesta", respuesta);

				if(respuesta.data == "false"){
					var usuarioJson = JSON.stringify($scope.usuario);
					SrvUsuarios.insertarUsuario(usuarioJson)
						.then(function (respuesta){

							console.info("Respuesta", respuesta);
							alert("REGISTRADO EXITOSAMENTE, INGRESE AL SISTEMA.");
							$state.go("login");

						}).catch(function (error){

							console.info("Error", error);

						})
				}else{
					alert("USUARIO YA EXISTENTE");
				}

			}).catch(function (error){

				console.info("Error", error);

			})

		

	}

})