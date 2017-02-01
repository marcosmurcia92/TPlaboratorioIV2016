angular.module('app.controllers')

.controller('listaProductosCtrl', function($scope, $state, $timeout, SrvProductos){

	$scope.titulo = "Listado de Productos";


    $scope.ListaProductos = [];

    SrvProductos.traerTodos()
    	.then(function (respuesta){

    		console.info("todos los productos", respuesta);
        $scope.ListaProductos = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaProductos = [];

    	})

})