angular.module('app.controllers')

.controller('listaSucursalesCtrl', function($scope, $state, $timeout, SrvSucursales){

	$scope.titulo = "Listado de Sucursales";


    $scope.ListaSucursales = [];

    SrvSucursales.traerTodas()
    	.then(function (respuesta){

    		console.info("todas las sucursales", respuesta);
        $scope.ListaSucursales = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaSucursales = [];

    	})

})