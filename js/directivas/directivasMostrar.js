angular
	.module('app')

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
