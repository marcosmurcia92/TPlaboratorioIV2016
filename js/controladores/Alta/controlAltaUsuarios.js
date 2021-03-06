angular.module('app.controllers')

.controller('altaUsuariosCtrl', function($scope, $state, $timeout, UsuarioActual, SrvUsuarios, SrvSucursales){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	$scope.usuario = {};
	$scope.usuario.nombre = "Jacinto";
	$scope.usuario.email = "usuario1@usuario1.com";
	$scope.usuario.cargo = "Cliente";
	$scope.usuario.habilitado = 1;

	$scope.ListaSucursales = [];

	SrvSucursales.traerTodas()
    	.then(function (respuesta){

    		console.info("todas las sucursales", respuesta);
        $scope.ListaSucursales = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaSucursales = [];

    	})


	$scope.Guardar = function(){

		var jsonUsuario = JSON.stringify($scope.usuario);

		console.info("usuario", $scope.usuario);

		SrvUsuarios.verificarExistente($scope.usuario.email)
			.then(function (respuesta){

				console.info("Respuesta", respuesta);

				if(respuesta.data == "false"){
					SrvUsuarios.insertarUsuario(jsonUsuario)
						.then(function (respuesta){

							console.info("respuesta", respuesta);
							$scope.usuario.idUsu = respuesta.data.id;

							if($scope.usuario.idSuc != 0 && $scope.usuario.cargo == "Encargado"){
								SrvSucursales.traerUna($scope.usuario.idSuc)
						        	.then(function (respuesta){
							    		console.info("sucursal encontrada", respuesta);
								        $scope.SucursalParaModificar = respuesta.data;
								        $scope.SucursalParaModificar.encargado = 1;
								        var jsonSucursal = JSON.stringify($scope.SucursalParaModificar);
								    	SrvSucursales.modificarSucursal(jsonSucursal)
								    		.then(function (respuesta){
									    		$timeout(function(){
									    			console.info(respuesta);
													$state.go('menuUsuarios.lista');
									    		},100);
									    	}).catch(function (error){

									    		console.info("Error", error);

									    	})
							    	}).catch(function (error){
										console.info("error", error);
							    	})
							}else{
								$state.go('menuUsuarios.lista');
							}

						}).catch(function (error){
							console.info("error", error);
						})
				}else{
					var usuarioEncontrado = respuesta.data;
					var avisoModif = confirm("Usuario ya dentro del sistema, ¿Desea ingresar los datos nuevos?");
					if(avisoModif == true){
						$scope.usuario.idUsu = usuarioEncontrado.idUsu;
						jsonUsuario = JSON.stringify($scope.usuario);
						SrvUsuarios.modificarUsuario(jsonUsuario)
						.then(function (respuesta){

							console.info("respuesta", respuesta);

							if($scope.usuario.idSuc != 0 && $scope.usuario.cargo == "Encargado"){
								SrvSucursales.traerUna($scope.usuario.idSuc)
						        	.then(function (respuesta){
							    		console.info("sucursal encontrada", respuesta);
								        $scope.SucursalParaModificar = respuesta.data;
								        $scope.SucursalParaModificar.encargado = 1;
								        var jsonSucursal = JSON.stringify($scope.SucursalParaModificar);
								    	SrvSucursales.modificarSucursal(jsonSucursal)
								    		.then(function (respuesta){
									    		$timeout(function(){
									    			console.info(respuesta);
													$state.go('menuUsuarios.lista');
									    		},100);
									    	}).catch(function (error){

									    		console.info("Error", error);

									    	})
							    	}).catch(function (error){
										console.info("error", error);
							    	})
							}else{
								$state.go('menuUsuarios.lista');
							}

						}).catch(function (error){
							console.info("error", error);
						})
					}else{
						alert("Modificacion Cancelada, reingrese los datos.");
						$scope.usuario = {};
						$scope.usuario.nombre = "Jacinto";
						$scope.usuario.email = "usuario1@usuario1.com";
						$scope.usuario.cargo = "Cliente";
						$scope.usuario.habilitado = 1;
					}
				}

			}).catch(function (error){

				console.info("Error", error);

			})
	}

})