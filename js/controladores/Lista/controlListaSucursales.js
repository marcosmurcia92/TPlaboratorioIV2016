angular.module('app.controllers')

.controller('listaSucursalesCtrl', function($scope, $state, $timeout, SrvSucursales){

	$scope.titulo = "Listado de Sucursales";


    $scope.ListaSucursales = [];

    $scope.SucursalParaMostrar = {
    	nombre : "NOMBRE",
    	localidad : "LOCALIDAD",
        foto1 : "placeholder1.png",
        foto2 : "placeholder1.png",
        foto3 : "placeholder1.png"
    };

    $scope.MostrarSucursal = function(sucursal){
    	$scope.SucursalParaMostrar = sucursal;
    	console.log("MI SUCURSAL", $scope.SucursalParaMostrar);
    	document.getElementById('id01').style.display='block';
    };

    SrvSucursales.traerTodas()
    	.then(function (respuesta){

    		console.info("todas las sucursales", respuesta);
        $scope.ListaSucursales = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaSucursales = [];

    	})

})