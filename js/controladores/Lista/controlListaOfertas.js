angular.module('app.controllers')

.controller('listaOfertasCtrl', function($scope, $state, $timeout, SrvOfertas){

	$scope.titulo = "Listado de Ofertas";


    $scope.ListaOfertas = [];

    SrvOfertas.traerTodas()
    	.then(function (respuesta){

    		console.info("todas las ofertas", respuesta);
        $scope.ListaOfertas = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaOfertas = [];

    	})

})