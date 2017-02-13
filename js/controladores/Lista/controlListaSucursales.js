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

    $scope.SucursalParaModificar = {};

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

    $scope.ModificarSucursal = function(sucModif){
        $scope.SucursalParaModificar = sucModif;
        document.getElementById('id03').style.display='block';
    };

    $scope.RealizarModificacion = function(){
        var jsonModif = JSON.stringify($scope.SucursalParaModificar);
        SrvSucursales.modificarSucursal(jsonModif)
            .then(function (respuesta){
                $timeout(function(){
                    console.info(respuesta);
                    document.getElementById('id03').style.display='none';
                },100);
            }).catch(function (error){

                console.info("Error", error);

            })
    }

    SrvSucursales.traerTodas()
    	.then(function (respuesta){

    		console.info("todas las sucursales", respuesta);
        $scope.ListaSucursales = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaSucursales = [];

    	})

})