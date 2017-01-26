angular.module('app.controllers')

.controller('directivasCtrl', function($scope, $state, $timeout, SrvUsuarios, SrvProductos, UsuarioActual){

	$scope.listadoUsuarios = [];

	$scope.listadoProductos = [];

	SrvUsuarios.traerTodos()
    	.then(function (respuesta){

    		console.info("todos los usuarios", respuesta);

    		$scope.listadoUsuarios = respuesta.data;

    	}).catch(function (error){

    		$scope.listadoUsuarios = [];

    	})

    SrvProductos.traerTodos()
    	.then(function (respuesta){

    		console.info("todos los productos", respuesta);

    		$scope.listadoProductos = respuesta.data;

    	}).catch(function (error){

    		$scope.listadoProductos = [];

    	})

})