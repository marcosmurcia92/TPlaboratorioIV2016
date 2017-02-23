angular
	.module('app')

	.directive('modalAltaEncuesta', function(FileUploader,SrvEncuestas){

		function encuestaCtrl($scope){

			//$scope.rate = 0;
			$scope.max = 5;
			$scope.isReadonly = false;

			$scope.hoveringOver = function(value) {
			  $scope.overStar = value;
			  $scope.percent = 100 * (value / $scope.max);
			};

			$scope.SubidorDeArchivos=new FileUploader({url:SrvEncuestas.traerUrlFotos()});
  			$scope.SubidorDeArchivos.queueLimit = 3;

  			$scope.willAddPhotos = 1;

  			$scope.SubidorDeArchivos.onSuccessItem=function(item, response, status, headers)
			  {
				console.info("Ya guardé el archivo.", item, response, status, headers);
			  };

			  $scope.SubidorDeArchivos.onCompleteAll =function()
			  {
				$scope.registerparent();
			  };

			  $scope.TogglePhotoUpload = function(){
			  	if($scope.willAddPhotos == 1){
			  		$scope.willAddPhotos = 0;
			  	}else{
			  		$scope.willAddPhotos = 1;
			  	}
			  }

			 $scope.Guardar = function(){

			 	if($scope.miEncuesta.comentario == null || $scope.miEncuesta.comentario == ''){
			 		$scope.miEncuesta.comentario = "sin comentario";
			 	}

			  	if($scope.willAddPhotos == 1){
					console.log($scope.SubidorDeArchivos.queue);
					if($scope.SubidorDeArchivos.queue[0]!=undefined)
					{
						var nombreFoto = $scope.SubidorDeArchivos.queue[0]._file.name;
						$scope.miEncuesta.foto1=nombreFoto;
					}
					if($scope.SubidorDeArchivos.queue[1]!=undefined)
					{
						var nombreFoto = $scope.SubidorDeArchivos.queue[1]._file.name;
						$scope.miEncuesta.foto2=nombreFoto;
					}
					if($scope.SubidorDeArchivos.queue[2]!=undefined)
					{
						var nombreFoto = $scope.SubidorDeArchivos.queue[2]._file.name;
						$scope.miEncuesta.foto3=nombreFoto;
					}
					$scope.SubidorDeArchivos.uploadAll();
				}else{
					$scope.miEncuesta.foto1 = "sin foto";
					$scope.miEncuesta.foto2 = "sin foto";
					$scope.miEncuesta.foto3 = "sin foto";
					$scope.registerparent();
				}
			}

			$scope.CerrarModal = function(){
				//$interval.cancel($scope.refreshSelects);
				$scope.miEncuesta = {};
				$scope.miPedido = {};
				$scope.SubidorDeArchivos.clearQueue();
				document.getElementById('fileInput').value = '';
				document.getElementById('id04').style.display='none';
			}
		}

		return {
			scope: {miEncuesta:'=encuestaporparametro', registerparent: '&'},
			replace: true,
			restrict: 'E',
			templateUrl: 'templates/directivas/templateModalAltaEncuesta.html',
			controller: encuestaCtrl
		};

	})
