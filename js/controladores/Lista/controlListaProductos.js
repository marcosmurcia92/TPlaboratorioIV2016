angular.module('app.controllers')

.controller('listaProductosCtrl', function($scope, $state, $timeout, SrvProductos){

	$scope.titulo = "Listado de Productos";


    $scope.ListaProductos = [];

    $scope.ProductoParaMostrar = {
    	nombre : "NOMBRE",
    	precio : "123",
        foto1 : "placeholder1.png",
        foto2 : "placeholder1.png",
        foto3 : "placeholder1.png"
    };

    $scope.MostrarProducto = function(producto){
        console.log("MI Producto ANTES", $scope.ProductoParaMostrar);
    	$scope.ProductoParaMostrar = producto;
        console.log("MI Producto DESPUES", $scope.ProductoParaMostrar);
    	document.getElementById('id01').style.display='block';
    };

    SrvProductos.traerTodos()
    	.then(function (respuesta){

    		console.info("todos los productos", respuesta);
        $scope.ListaProductos = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaProductos = [];

    	})

})