angular.module('app.controllers')

.controller('exportarCtrl', function($scope, $state, $timeout, UsuarioActual, SrvUsuarios, SrvProductos, SrvSucursales, SrvOfertas, SrvPedidos, SrvEncuestas){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	$scope.ListaSucursales = [];
	$scope.ListaUsuarios = [];
	$scope.ListaOfertas = [];
	$scope.ListaProductos = [];
	$scope.ListaPedidos = [];
	$scope.ListaEncuestas = [];

	SrvOfertas.traerTodas()
    	.then(function (respuesta){

    		console.info("todas las ofertas", respuesta);
        $scope.ListaOfertas = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaOfertas = [];

    	})

    SrvUsuarios.traerTodos()
    	.then(function (respuesta){

    		console.info("todos los usuarios", respuesta);

    		
        $scope.ListaUsuarios = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaUsuarios = [];

    	})

    SrvSucursales.traerTodas()
    	.then(function (respuesta){

    		console.info("todas las sucursales", respuesta);
        $scope.ListaSucursales = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaSucursales = [];

    	})

    SrvProductos.traerTodos()
    	.then(function (respuesta){

    		console.info("todos los productos", respuesta);
        $scope.ListaProductos = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaProductos = [];

    	})

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

    	}).catch(function (error){

    		$scope.ListaSucursales = [];

    	})
})