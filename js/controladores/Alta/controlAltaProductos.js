angular.module('app.controllers')

.controller('altaProductosCtrl', function($scope, $state, $timeout,FileUploader,SrvProductos,UsuarioActual){
	
	$scope.SubidorDeArchivos=new FileUploader({url:SrvProductos.traerUrlFotos()});
  	$scope.SubidorDeArchivos.queueLimit = 3;

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	$scope.prod = {};
	$scope.prod.foto1 = "sin foto";
	$scope.prod.foto2 = "sin foto";
	$scope.prod.foto3 = "sin foto";


	$scope.SubidorDeArchivos.onSuccessItem=function(item, response, status, headers)
	  {
		console.info("Ya guardé el archivo.", item, response, status, headers);
	  };

	  $scope.SubidorDeArchivos.onCompleteAll =function()
	  {
		var prod = JSON.stringify($scope.prod);

		console.info("prod", $scope.prod);

	  	SrvProductos.insertarProducto(prod)
			.then(function (respuesta){

				console.info("respuesta", respuesta);

				$state.go('menuProductos.alta');

			}).catch(function (error){
				console.info("error", error);
			})
	  };

	$scope.Guardar = function(){

		console.log($scope.SubidorDeArchivos.queue);
		if($scope.SubidorDeArchivos.queue[0]!=undefined)
		{
			var nombreFoto = $scope.SubidorDeArchivos.queue[0]._file.name;
			$scope.prod.foto1=nombreFoto;
		}
		if($scope.SubidorDeArchivos.queue[1]!=undefined)
		{
			var nombreFoto = $scope.SubidorDeArchivos.queue[1]._file.name;
			$scope.prod.foto2=nombreFoto;
		}
		if($scope.SubidorDeArchivos.queue[2]!=undefined)
		{
			var nombreFoto = $scope.SubidorDeArchivos.queue[2]._file.name;
			$scope.prod.foto3=nombreFoto;
		}

		$scope.SubidorDeArchivos.uploadAll();

	}

})