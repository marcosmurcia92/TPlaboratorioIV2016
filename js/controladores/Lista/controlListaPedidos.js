angular.module('app.controllers')

.controller('listaPedidosCtrl', function($scope, $state, $timeout, SrvPedidos){

	$scope.titulo = "Listado de Pedidos";


    $scope.ListaPedidos = [];

    SrvPedidos.traerTodos()
    	.then(function (respuesta){

    		console.info("todos los pedidos", respuesta);
        $scope.ListaPedidos = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaPedidos = [];

    	})

})