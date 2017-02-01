angular.module('app.controllers')

.controller('altaOfertasCtrl', function($scope, $state, $timeout, UsuarioActual, SrvOfertas){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	$scope.oferta = {};

	$scope.Guardar = function(){

		var oferta = JSON.stringify($scope.oferta);

		console.info("oferta", $scope.oferta);

		SrvOfertas.insertarOferta(oferta)
			.then(function (respuesta){

				console.info("respuesta", respuesta);

				$state.go('menuOfertas.lista');

			}).catch(function (error){
				console.info("error", error);
			})

	}

})