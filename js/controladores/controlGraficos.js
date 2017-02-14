angular.module('app.controllers')

.controller('graficosCtrl', function($scope, $state, $timeout, UsuarioActual, SrvProductos, SrvSucursales, SrvPedidos, SrvEncuestas){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	$scope.ListaPedidos = [];
	$scope.ListaProductos = [];
	$scope.ListaSucursales = [];
	$scope.ListaEncuestas = [];

	$scope.dataVProd = [];
	$scope.nombresProd = [];

	$scope.dataVSuc = [];
	$scope.nombresSuc = [];

	$scope.dataCantPedidos = [];
	$scope.fechasPedidos = [];

	$scope.dataValorEnc = [];
	$scope.nombresEncCat = ["Calidad del Producto","Valor de Atención","Tiempo del Delivery"];
	$scope.encSeries = ['5','4','3','2','1'];
	$scope.encOptions = {
		yAxes: [{ticks: {min: 0, max:100}}]
	};

	SrvProductos.traerTodos()
    	.then(function (respuesta){

    		console.info("todos los pedidos", respuesta);

    		for (var i = respuesta.data.length - 1; i >= 0; i--) {
    			$scope.nombresProd.push(respuesta.data[i].nombre);
    			$scope.dataVProd.push(0);
    		};

    		$scope.ListaProductos = respuesta.data;

			SrvSucursales.traerTodas()
		    	.then(function (respuesta){

		    		console.info("todas las sucursales", respuesta);
		    		for (var i = respuesta.data.length - 1; i >= 0; i--) {
		    			$scope.nombresSuc.push(respuesta.data[i].nombre);
		    			$scope.dataVSuc.push(0);
		    		};

		    		$scope.ListaSucursales = respuesta.data;
		    		
					SrvPedidos.traerTodos()
				    	.then(function (respuesta){

				    		console.info("todos los pedidos", respuesta);
							$scope.ListaPedidos = respuesta.data;
							for (var i = $scope.ListaPedidos.length - 1; i >= 0; i--) {
								var nombreProducto = $scope.BuscarNombreProducto($scope.ListaPedidos[i].idProd);
								var nombreSucursal = $scope.BuscarNombreSucursal($scope.ListaPedidos[i].idSuc);

								var idxProd = $scope.BuscarIdxProducto(nombreProducto);
								var idxSuc = $scope.BuscarIdxSucursal(nombreSucursal);

								$scope.dataVProd[idxProd]++;
								$scope.dataVSuc[idxSuc]++;

								$scope.BuscarFechaAgregar($scope.ListaPedidos[i].fechaPedido);
							};

							console.info("dataVProd",$scope.dataVProd);
							console.info("nombresProd",$scope.nombresProd);

							console.info("dataVSuc",$scope.dataVSuc);
							console.info("nombresSuc",$scope.nombresSuc);

							console.info("fechasPedidos",$scope.fechasPedidos);
							console.info("dataCantPedidos",$scope.dataCantPedidos);

				    	}).catch(function (error){

				    		$scope.ListaPedidos = [];

				    	})

		    	}).catch(function (error){

		    		console.info("error",error);

		    		$scope.ListaSucursales = [];
		    	})

    	}).catch(function (error){

    		console.info("error",error);

    		$scope.ListaProductos = [];

    	})



    $scope.BuscarFechaAgregar = function(fecha){
    	var fechaString = fecha.split(" ")[0];
    	for (var i = $scope.fechasPedidos.length - 1; i >= 0; i--) {
    		if($scope.fechasPedidos[i] == fechaString){
    			$scope.dataCantPedidos[i]++;
    			return;
    		}
    	};

    	$scope.dataCantPedidos.push(1);
    	$scope.fechasPedidos.push(fechaString);
    	$scope.fechasPedidos.sort();
    };

    $scope.BuscarNombreProducto = function(id){
    	for (var i = $scope.ListaProductos.length - 1; i >= 0; i--) {
    		if($scope.ListaProductos[i].idProd == id){
    			return $scope.ListaProductos[i].nombre;
    		}
    	};

    	return "";
    };

    $scope.BuscarIdxProducto = function(nombre){
    	for (var i = $scope.nombresProd.length - 1; i >= 0; i--) {
    		if($scope.nombresProd[i] == nombre){
    			return i;
    		}
    	};

    	return -1;
    };

    $scope.BuscarNombreSucursal = function(id){
    	for (var i = $scope.ListaSucursales.length - 1; i >= 0; i--) {
    		if($scope.ListaSucursales[i].idSuc == id){
    			return $scope.ListaSucursales[i].nombre;
    		}
    	};

    	return "";
    };

    $scope.BuscarIdxSucursal = function(nombre){
    	for (var i = $scope.nombresSuc.length - 1; i >= 0; i--) {
    		if($scope.nombresSuc[i] == nombre){
    			return i;
    		}
    	};

    	return -1;
    };


	SrvEncuestas.traerTodas()
    	.then(function (respuesta){

    		console.info("todas las encuestas", respuesta);
        	$scope.ListaEncuestas = respuesta.data;
        	var cant5P = 0;
        	var cant4P = 0;
        	var cant3P = 0;
        	var cant2P = 0;
        	var cant1P = 0;

        	var cant5A = 0;
        	var cant4A = 0;
        	var cant3A = 0;
        	var cant2A = 0;
        	var cant1A = 0;

        	var cant5D = 0;
        	var cant4D = 0;
        	var cant3D = 0;
        	var cant2D = 0;
        	var cant1D = 0;
        	for (var i = $scope.ListaEncuestas.length - 1; i >= 0; i--) {
        		switch($scope.ListaEncuestas[i].valorProducto) {
				    case 5:
				        cant5P++;
				        break;
				    case 4:
				        cant4P++;
				        break;
				    case 3:
				        cant3P++;
				        break;
				    case 2:
				        cant2P++;
				        break;
				    case 1:
				        cant1P++;
				        break;
				    default:
				        break;
				}
        		switch($scope.ListaEncuestas[i].valorAtencion) {
				    case 5:
				        cant5A++;
				        break;
				    case 4:
				        cant4A++;
				        break;
				    case 3:
				        cant3A++;
				        break;
				    case 2:
				        cant2A++;
				        break;
				    case 1:
				        cant1A++;
				        break;
				    default:
				        break;
				}
        		switch($scope.ListaEncuestas[i].valorDemora) {
				    case 5:
				        cant5D++;
				        break;
				    case 4:
				        cant4D++;
				        break;
				    case 3:
				        cant3D++;
				        break;
				    case 2:
				        cant2D++;
				        break;
				    case 1:
				        cant1D++;
				        break;
				    default:
				        break;
				}
        	};
        	$scope.dataValorEnc = [
        			[cant5P,cant5A,cant5D],
        			[cant4P,cant4A,cant4D],
        			[cant3P,cant3A,cant3D],
        			[cant2P,cant2A,cant2D],
        			[cant1P,cant1A,cant1D]
        		];

    	}).catch(function (error){

    		$scope.ListaEncuestas = [];

    	})


})