angular.module('app.controllers')

.controller('listaUsuariosCtrl', function($scope, $state, $timeout, SrvUsuarios){

	$scope.titulo = "Listado de Usuarios";


    $scope.ListaUsuarios = [];

    SrvUsuarios.traerTodos()
    	.then(function (respuesta){

    		console.info("todos los usuarios", respuesta);

    		
        $scope.ListaUsuarios = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaUsuarios = [];

    	})

})