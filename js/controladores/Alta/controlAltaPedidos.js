angular.module('app.controllers')

.controller('altaPedidosCtrl', function($scope, $state, $timeout, $interval, UsuarioActual, SrvPedidos, SrvProductos, SrvSucursales, SrvUsuarios, SrvOfertas){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	$scope.ped = {};
	$scope.ped.idProd = -1;
	$scope.ped.idSuc = -1;
	$scope.ped.idCliente = -1;
	$scope.ped.estado = "Pendiente";

	$scope.oferta = -1;

	var dtToday = new Date();
	var dtMin = dtToday;
	dtMin.setDate(dtMin.getDate() + 2);

	var month = dtMin.getMonth() + 1;
    var day = dtMin.getDate();
    var year = dtMin.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();

	$scope.minDate = day + '/' + month + '/' + year;
	var dtMax = dtToday;
	dtMax.setDate(dtMax.getDate() + 5);

	month = dtMax.getMonth() + 1;
    day = dtMax.getDate();
    year = dtMax.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();

	$scope.maxDate = day + '/' + month + '/' + year;

	$scope.ListaProductos = [];
	$scope.ListaSucursales = [];
	$scope.ListaOfertas = [];
	$scope.ListaUsuarios = [];

	$scope.ChequearFechas = function(){
		var checkMin = $scope.ped.fechaPedido < $scope.minDate;
		var checkMax = $scope.ped.fechaPedido > $scope.maxDate;

		return (checkMin || checkMax);
	}

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
                            SrvOfertas.traerTodas()
                            .then(function (respuesta){

                                console.info("todas las ofertas", respuesta);
                            $scope.ListaOfertas = respuesta.data;

                            }).catch(function (error){

                                $scope.ListaOfertas = [];

                            })

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
    			var idxSuc = $scope.BuscarIdxSucursal($scope.ped.idSuc);
    			if(idxSuc != -1){
    				$scope.oferta = $scope.BuscarOferta($scope.ped.idProd,$scope.ped.idSuc);
    				if($scope.oferta != -1){
    					$scope.ped.monto = $scope.ListaProductos[idxProd].precio * $scope.ped.cantPedida * ($scope.oferta / 100);
    				}else{
    					$scope.ped.monto = $scope.ListaProductos[idxProd].precio * $scope.ped.cantPedida;
    				}
    			}
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

    $scope.BuscarIdxSucursal = function(id){
    	for (var i = $scope.ListaSucursales.length - 1; i >= 0; i--) {
    		if($scope.ListaSucursales[i].idSuc == id){
    			return i;
    		}
    	};

    	return -1;
    };

    $scope.BuscarOferta = function(idP,idS){
    	for (var i = $scope.ListaOfertas.length - 1; i >= 0; i--) {
    		if($scope.ListaOfertas[i].idProd == idP && $scope.ListaOfertas[i].idSuc == idS){
    			return $scope.ListaOfertas[i].descuento;
    		}
    	};

    	return -1;
    }
    

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