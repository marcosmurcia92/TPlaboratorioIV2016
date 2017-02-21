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

	.directive('modalOfertas', function(SrvOfertas){

		function ofertasCtrl($scope){
			$scope.ListaOfertas = [];
			SrvOfertas.traerTodas()
	    	.then(function (respuesta){

	    		console.info("todas las ofertas", respuesta);
	        $scope.ListaOfertas = respuesta.data;

	    	}).catch(function (error){

	    		$scope.ListaOfertas = [];

	    	})
		}

		return {
			scope: {miSucursal: '=sucursalparaofertar'},
			replace: true,
			restrict: 'E',
			templateUrl: 'templates/directivas/templateModalOfertas.html',
			controller: ofertasCtrl
		};

	})
