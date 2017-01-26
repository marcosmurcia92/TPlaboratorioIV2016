angular
	.module('app')
	.directive('traerUsuarios', function(){

		return {
			scope: {miUsuario: '=usuarioporparametro'},
			replace: true,
			restrict: 'E',
			templateUrl: 'templates/templateUsuarios.html'
		};

	})
	.directive('traerProductos', function(){

		return {
			scope: {miProducto: '=productoporparametro'},
			replace: true,
			restrict: 'E',
			templateUrl: 'templates/templateProductos.html'
		};

	})
