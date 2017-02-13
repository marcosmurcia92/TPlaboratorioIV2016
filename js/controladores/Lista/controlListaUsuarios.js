angular.module('app.controllers')

.controller('listaUsuariosCtrl', function($scope, $rootScope, $state, $timeout, SrvUsuarios, SrvSucursales){

	$scope.titulo = "Listado de Usuarios";


    $scope.ListaUsuarios = [];

    $scope.SucursalParaMostrar = {
        nombre : "NOMBRE",
        localidad : "LOCALIDAD",
        foto1 : "placeholder1.png",
        foto2 : "placeholder1.png",
        foto3 : "placeholder1.png"
    };

    $scope.ToggleUser = function(usuario){
        if(usuario.idUsu == $rootScope.userActual.id){
            return;
        }

        if(usuario.habilitado == 1){
            usuario.habilitado = 0;
        }else{
            usuario.habilitado = 1;
        }
        var jsonUsuario = JSON.stringify(usuario);
        SrvUsuarios.modificarUsuario(jsonUsuario)
            .then(function (respuesta){
                $timeout(function(){
                    console.info(respuesta);
                },100);
            }).catch(function (error){

                console.info("Error", error);

            })
    };

    $scope.MostrarSucursal = function(sucursal){
        console.log("MI SUCURSAL ANTES", $scope.SucursalParaMostrar);
        SrvSucursales.traerUna(sucursal)
            .then(function (respuesta){
                console.info("sucursal encontrada", respuesta);
                $scope.SucursalParaMostrar = respuesta.data;
                console.log("MI SUCURSAL DESPUES", $scope.SucursalParaMostrar);
                document.getElementById('id01').style.display='block';
            }).catch(function (error){

                $scope.SucursalParaMostrar = {
                    nombre : "NOMBRE",
                    localidad : "LOCALIDAD",
                    foto1 : "placeholder1.png",
                    foto2 : "placeholder1.png",
                    foto3 : "placeholder1.png"
                };

            })
    };

    SrvUsuarios.traerTodos()
    	.then(function (respuesta){

    		console.info("todos los usuarios", respuesta);

    		
        $scope.ListaUsuarios = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaUsuarios = [];

    	})

})