angular.module('app.controllers')

.controller('altaPedidosCtrl', function($scope, $state, $timeout, $interval, UsuarioActual, SrvPedidos, SrvProductos, SrvSucursales, SrvUsuarios){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	$scope.ped = {};
	$scope.ped.idProd = -1;
	$scope.ped.idSuc = -1;
	$scope.ped.idCliente = -1;
	$scope.ped.estado = "Pendiente";

	$scope.ListaProductos = [];
	$scope.ListaSucursales = [];
	$scope.ListaUsuarios = [];

	SrvProductos.traerTodos()
    	.then(function (respuesta){

    		console.info("todos los productos", respuesta);
        	$scope.ListaProductos = respuesta.data;
        	SrvSucursales.traerTodas()
		    	.then(function (respuesta){

		    		console.info("todas las sucursales", respuesta);
		        	$scope.ListaSucursales = respuesta.data;
		        	SrvUsuarios.traerTodos()
				    	.then(function (respuesta){

				    		console.info("todos los usuarios", respuesta);
				        	$scope.ListaUsuarios = respuesta.data;

				    	}).catch(function (error){

    						console.info("ERROR",error);
				    		$scope.ListaUsuarios = [];

				    	})
		    	}).catch(function (error){

    				console.info("ERROR",error);
		    		$scope.ListaSucursales = [];

		    	})
    	}).catch(function (error){

    		console.info("ERROR",error);
    		$scope.ListaProductos = [];

    	});


    $scope.updateMonto = $interval(function(){
    	if($scope.ped.idProd != -1){
    		var idxProd = $scope.BuscarIdxProducto($scope.ped.idProd);
    		if(idxProd != -1){
    			$scope.ped.monto = $scope.ListaProductos[idxProd].precio * $scope.ped.cantPedida;
    		}
    	}
    },100);

    $scope.BuscarIdxProducto = function(id){
    	for (var i = $scope.ListaProductos.length - 1; i >= 0; i--) {
    		if($scope.ListaProductos[i].idProd == id){
    			return i;
    		}
    	};

    	return -1;
    };
    

	$scope.Guardar = function(){

		var pedido = JSON.stringify($scope.ped);

		console.info("pedido", $scope.ped);

		SrvPedidos.insertarPedido(pedido)
			.then(function (respuesta){

				console.info("respuesta", respuesta);

				$state.go('menuPedidos.lista');

			}).catch(function (error){
				console.info("error", error);
			})

	};

})