angular.module('app.controllers')

.controller('altaOfertasCtrl', function($scope, $state, $timeout, UsuarioActual, SrvOfertas, SrvProductos, SrvSucursales){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	$scope.ofer = {};

	$scope.ListaProductos = [];
	$scope.ListaSucursales = [];

	SrvProductos.traerTodos()
    	.then(function (respuesta){

    		console.info("todos los productos", respuesta);
        	$scope.ListaProductos = respuesta.data;
        	SrvSucursales.traerTodas()
		    	.then(function (respuesta){

		    		console.info("todas las sucursales", respuesta);
		        	$scope.ListaSucursales = respuesta.data;
		        	
		    	}).catch(function (error){

    				console.info("ERROR",error);
		    		$scope.ListaSucursales = [];

		    	})
    	}).catch(function (error){

    		console.info("ERROR",error);
    		$scope.ListaProductos = [];

    	});

	$scope.Guardar = function(){

		var oferta = JSON.stringify($scope.ofer);

		console.info("oferta", $scope.ofer);

		SrvOfertas.insertarOferta(oferta)
			.then(function (respuesta){

				console.info("respuesta", respuesta);

				$state.go('menuOfertas.lista');

			}).catch(function (error){
				console.info("error", error);
			})

	}

})