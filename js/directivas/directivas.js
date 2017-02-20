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

	.directive('modalModifSucursal', function(FileUploader, SrvSucursales){

		function modifSucursalCtrl($scope){
			$scope.SubidorDeArchivos=new FileUploader({url:SrvSucursales.traerUrlFotos()});
  			$scope.SubidorDeArchivos.queueLimit = 3;

  			$scope.willModifyPhotos = 1;

  			$scope.SubidorDeArchivos.onSuccessItem=function(item, response, status, headers)
			  {
				console.info("Ya guardé el archivo.", item, response, status, headers);
			  };

			  $scope.SubidorDeArchivos.onCompleteAll =function()
			  {
				$scope.modifparent();
			  };

			  $scope.TogglePhotoUpload = function(){
			  	if($scope.willModifyPhotos == 1){
			  		$scope.willModifyPhotos = 0;
			  	}else{
			  		$scope.willModifyPhotos = 1;
			  	}
			  }

			 $scope.Guardar = function(){

			  	if($scope.willModifyPhotos == 1){
					console.log($scope.SubidorDeArchivos.queue);
					if($scope.SubidorDeArchivos.queue[0]!=undefined)
					{
						var nombreFoto = $scope.SubidorDeArchivos.queue[0]._file.name;
						$scope.miSucursal.foto1=nombreFoto;
					}
					if($scope.SubidorDeArchivos.queue[1]!=undefined)
					{
						var nombreFoto = $scope.SubidorDeArchivos.queue[1]._file.name;
						$scope.miSucursal.foto2=nombreFoto;
					}
					if($scope.SubidorDeArchivos.queue[2]!=undefined)
					{
						var nombreFoto = $scope.SubidorDeArchivos.queue[2]._file.name;
						$scope.miSucursal.foto3=nombreFoto;
					}
					$scope.SubidorDeArchivos.uploadAll();
				}else{
					$scope.modifparent();
				}
			}
		}

		return {
			scope: {miSucursal: '=sucursalporparametro', modifparent: '&'},
			replace: true,
			restrict: 'E',
			templateUrl: 'templates/directivas/templateModalModifSucursal.html',
			controller: modifSucursalCtrl
		};

	})

	.directive('modalModifOferta', function(FileUploader, SrvSucursales){

		function modifOfertaCtrl($scope){


			 $scope.Guardar = function(){
				$scope.modifparent();
			}
		}

		return {
			scope: {miOferta: '=ofertaporparametro', modifparent: '&'},
			replace: true,
			restrict: 'E',
			templateUrl: 'templates/directivas/templateModalModifOferta.html',
			controller: modifOfertaCtrl
		};

	})

	.directive('modalModifPedido', function(FileUploader, SrvPedidoes){

		function modifPedidoCtrl($scope){

			 $scope.Guardar = function(){

				$scope.modifparent();
			}
		}

		return {
			scope: {miPedido: '=pedidoporparametro', modifparent: '&'},
			replace: true,
			restrict: 'E',
			templateUrl: 'templates/directivas/templateModalModifPedido.html',
			controller: modifPedidoCtrl
		};

	})

	.directive('modalModifProducto', function(FileUploader, SrvProductoes){

		function modifProductoCtrl($scope){
			$scope.SubidorDeArchivos=new FileUploader({url:SrvProductoes.traerUrlFotos()});
  			$scope.SubidorDeArchivos.queueLimit = 3;

  			$scope.willModifyPhotos = 1;

  			$scope.SubidorDeArchivos.onSuccessItem=function(item, response, status, headers)
			  {
				console.info("Ya guardé el archivo.", item, response, status, headers);
			  };

			  $scope.SubidorDeArchivos.onCompleteAll =function()
			  {
				$scope.modifparent();
			  };

			  $scope.TogglePhotoUpload = function(){
			  	if($scope.willModifyPhotos == 1){
			  		$scope.willModifyPhotos = 0;
			  	}else{
			  		$scope.willModifyPhotos = 1;
			  	}
			  }

			 $scope.Guardar = function(){

			  	if($scope.willModifyPhotos == 1){
					console.log($scope.SubidorDeArchivos.queue);
					if($scope.SubidorDeArchivos.queue[0]!=undefined)
					{
						var nombreFoto = $scope.SubidorDeArchivos.queue[0]._file.name;
						$scope.miProducto.foto1=nombreFoto;
					}
					if($scope.SubidorDeArchivos.queue[1]!=undefined)
					{
						var nombreFoto = $scope.SubidorDeArchivos.queue[1]._file.name;
						$scope.miProducto.foto2=nombreFoto;
					}
					if($scope.SubidorDeArchivos.queue[2]!=undefined)
					{
						var nombreFoto = $scope.SubidorDeArchivos.queue[2]._file.name;
						$scope.miProducto.foto3=nombreFoto;
					}
					$scope.SubidorDeArchivos.uploadAll();
				}else{
					$scope.modifparent();
				}
			}
		}

		return {
			scope: {miProducto: '=productoporparametro', modifparent: '&'},
			replace: true,
			restrict: 'E',
			templateUrl: 'templates/directivas/templateModalModifProducto.html',
			controller: modifProductoCtrl
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
