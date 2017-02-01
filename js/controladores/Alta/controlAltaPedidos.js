angular.module('app.controllers')

.controller('altaPedidosCtrl', function($scope, $state, $timeout, UsuarioActual, SrvPedidos){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	$scope.pedido = {};

	$scope.Guardar = function(){

		var pedido = JSON.stringify($scope.pedido);

		console.info("pedido", $scope.pedido);

		SrvPedidos.insertarPedido(pedido)
			.then(function (respuesta){

				console.info("respuesta", respuesta);

				$state.go('menuPedidos.lista');

			}).catch(function (error){
				console.info("error", error);
			})

	}

})