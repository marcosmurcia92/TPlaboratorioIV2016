angular.module('app.controllers')

.controller('altaSucursalesCtrl', function($scope, $state, $timeout,UsuarioActual,FileUploader,SrvSucursales){
	
	$scope.SubidorDeArchivos=new FileUploader({url:SrvSucursales.traerUrlFotos()});
  	$scope.SubidorDeArchivos.queueLimit = 3;

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	$scope.suc = {};
	$scope.suc.encargado = 0;
	$scope.suc.foto1 = "sin foto";
	$scope.suc.foto2 = "sin foto";
	$scope.suc.foto3 = "sin foto";


	$scope.SubidorDeArchivos.onSuccessItem=function(item, response, status, headers)
	  {
		console.info("Ya guardé el archivo.", item, response, status, headers);
	  };

	  $scope.SubidorDeArchivos.onCompleteAll =function()
	  {
		var suc = JSON.stringify($scope.suc);

		console.info("suc", $scope.suc);

	  	SrvSucursales.insertarSucursal(suc)
			.then(function (respuesta){

				console.info("respuesta", respuesta);

				$state.go('menuSucursales.alta');

			}).catch(function (error){
				console.info("error", error);
			})
	  };

	$scope.Guardar = function(){

		console.log($scope.SubidorDeArchivos.queue);
		if($scope.SubidorDeArchivos.queue[0]!=undefined)
		{
			var nombreFoto = $scope.SubidorDeArchivos.queue[0]._file.name;
			$scope.suc.foto1=nombreFoto;
		}
		if($scope.SubidorDeArchivos.queue[1]!=undefined)
		{
			var nombreFoto = $scope.SubidorDeArchivos.queue[1]._file.name;
			$scope.suc.foto2=nombreFoto;
		}
		if($scope.SubidorDeArchivos.queue[2]!=undefined)
		{
			var nombreFoto = $scope.SubidorDeArchivos.queue[2]._file.name;
			$scope.suc.foto3=nombreFoto;
		}

		$scope.SubidorDeArchivos.uploadAll();

	}

})