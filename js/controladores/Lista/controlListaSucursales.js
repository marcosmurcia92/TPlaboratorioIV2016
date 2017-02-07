angular.module('app.controllers')

.controller('listaSucursalesCtrl', function($scope, $state, $timeout, SrvSucursales, SrvUsuarios){

	$scope.titulo = "Listado de Sucursales";


    $scope.ListaSucursales = [];

    $scope.SucursalParaMostrar = {
    	nombre : "NOMBRE",
    	localidad : "LOCALIDAD",
        foto1 : "placeholder1.png",
        foto2 : "placeholder1.png",
        foto3 : "placeholder1.png"
    };

    $scope.EncargadoParaMostrar = {
        nombre : "NOMBRE",
        email: "MAIL"
    };

    $scope.MostrarSucursal = function(sucursal){
    	$scope.SucursalParaMostrar = sucursal;
    	console.log("MI SUCURSAL", $scope.SucursalParaMostrar);
    	document.getElementById('id01').style.display='block';
    };

    $scope.MostrarEncargado = function(idSucursal){
        console.log("MI Encargado ANTES", $scope.EncargadoParaMostrar);
        SrvUsuarios.traerUnoPorSucursal(idSucursal)
            .then(function (respuesta){
                console.info("Encargado encontrado", respuesta);
                $scope.EncargadoParaMostrar = respuesta.data;
                console.log("MI Encargado DESPUES", $scope.EncargadoParaMostrar);
                document.getElementById('id02').style.display='block';
            }).catch(function (error){

                $scope.EncargadoParaMostrar = {
                    nombre : "NOMBRE",
                    email: "MAIL"
                };

            })

    };

    SrvSucursales.traerTodas()
    	.then(function (respuesta){

    		console.info("todas las sucursales", respuesta);
        $scope.ListaSucursales = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaSucursales = [];

    	})

})