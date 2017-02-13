angular.module('app.controllers')

.controller('graficosCtrl', function($scope, $state, $timeout, UsuarioActual, SrvPedidos, SrvEncuestas){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	$scope.ListaPedidos = [];
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

	SrvPedidos.traerTodos()
    	.then(function (respuesta){

    		console.info("todos los pedidos", respuesta);
        $scope.ListaPedidos = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaPedidos = [];

    	})

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