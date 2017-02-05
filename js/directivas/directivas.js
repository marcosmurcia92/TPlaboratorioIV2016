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

	.directive('modalCliente', function(){

		return {
			scope: {miCliente: '=clienteporparametro'},
			replace: true,
			restrict: 'E',
			templateUrl: 'templates/directivas/templateModalCliente.html'
		};

	})
