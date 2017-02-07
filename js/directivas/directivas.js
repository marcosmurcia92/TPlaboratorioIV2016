angular
	.module('app')
	// .directive('traerUsuarios', function(){

	// 	return {
	// 		scope: {miUsuario: '=usuarioporparametro'},
	// 		replace: true,
	// 		restrict: 'E',
	// 		templateUrl: 'templates/templateUsuarios.html'
	// 	};

	// })
	// .directive('traerProductos', function(){

	// 	return {
	// 		scope: {miProducto: '=productoporparametro'},
	// 		replace: true,
	// 		restrict: 'E',
	// 		templateUrl: 'templates/templateProductos.html'
	// 	};

	// })

	.directive('modalSucursal', function(){

		return {
			scope: {miSucursal: '=sucursalporparametro'},
			replace: true,
			restrict: 'E',
			templateUrl: 'templates/directivas/templateModalSucursal.html'
		};

	})

	.directive('modalProducto', function(){

		return {
			scope: {miProducto: '=productoporparametro'},
			replace: true,
			restrict: 'E',
			templateUrl: 'templates/directivas/templateModalProducto.html'
		};

	})

	.directive('modalUsuario', function(){

		return {
			scope: {miUsuario: '=usuarioporparametro'},
			replace: true,
			restrict: 'E',
			templateUrl: 'templates/directivas/templateModalUsuario.html'
		};

	})

	.directive('modalEncuesta', function(){

		function encuestaCtrl($scope){
			$scope.miEncuesta = {};

			//$scope.rate = 0;
			$scope.max = 5;
			$scope.isReadonly = false;

			$scope.hoveringOver = function(value) {
			  $scope.overStar = value;
			  $scope.percent = 100 * (value / $scope.max);
			};
		}

		return {
			scope: {miPedido: '=pedidoporparametro', registerparent: '&'},
			replace: true,
			restrict: 'E',
			templateUrl: 'templates/directivas/templateModalEncuesta.html',
			controller: encuestaCtrl
		};

	})
