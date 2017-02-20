angular
	.module('app')

	.directive('modalModifProducto', function(FileUploader, SrvProductos){

		function modifProductoCtrl($scope){
			$scope.SubidorDeArchivos=new FileUploader({url:SrvProductos.traerUrlFotos()});
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

			$scope.CerrarModal = function(){
				//$interval.cancel($scope.refreshSelects);
				$scope.cancelmodif();
				document.getElementById('id02').style.display='none';
			}
		}

		return {
			scope: {miProducto: '=productoporparametro', modifparent: '&', cancelmodif: '&'},
			replace: true,
			restrict: 'E',
			templateUrl: 'templates/directivas/templateModalModifProducto.html',
			controller: modifProductoCtrl
		};

	})
