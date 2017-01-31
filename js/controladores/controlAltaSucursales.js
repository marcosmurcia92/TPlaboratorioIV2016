angular.module('app.controllers')

.controller('altaSucursalesCtrl', function($scope, $state, $timeout,FileUploader){
	
	$scope.SubidorDeArchivos=new FileUploader({url:SrvUsuarios.traerUrlFotos()});
  	$scope.SubidorDeArchivos.queueLimit = 1;

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	$scope.user = {};
	$scope.user.foto = "sin foto";

	$scope.user.tipo = 'invalido';

	$scope.SubidorDeArchivos.onSuccessItem=function(item, response, status, headers)
	  {
		console.info("Ya guardé el archivo.", item, response, status, headers);
	  };

	  $scope.SubidorDeArchivos.onCompleteAll =function()
	  {
		var user = JSON.stringify($scope.user);

		console.info("user", $scope.user);

	  	SrvUsuarios.insertarUsuario(user)
			.then(function (respuesta){

				console.info("respuesta", respuesta);

				$state.go('grillaUsuarios');

			}).catch(function (error){
				console.info("error", error);
			})
	  };

	$scope.Guardar = function(){

		console.log($scope.SubidorDeArchivos.queue);
		if($scope.SubidorDeArchivos.queue[0]!=undefined)
		{
			var nombreFoto = $scope.SubidorDeArchivos.queue[0]._file.name;
			$scope.user.foto=nombreFoto;
		}

		$scope.SubidorDeArchivos.uploadAll();

	}

})