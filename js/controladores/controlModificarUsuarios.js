angular.module('app.controllers')

.controller('modificarUsuariosCtrl', function($scope, $state, $timeout, $stateParams, UsuarioActual, SrvUsuarios){

	$scope.SubidorDeArchivos=new FileUploader({url:SrvUsuarios.traerUrlFotos()});
  	$scope.SubidorDeArchivos.queueLimit = 1;

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	$scope.user = {};

	$scope.user.id = $stateParams.id;
	$scope.user.nombre = $stateParams.nombre;
	$scope.user.correo = $stateParams.correo;
	$scope.user.clave = $stateParams.clave;
	$scope.user.copiaclave = $stateParams.clave;
	$scope.user.tipo = $stateParams.tipo;
	$scope.user.foto = $stateParams.foto;

	console.log($scope.user);

	$scope.SubidorDeArchivos.onSuccessItem=function(item, response, status, headers)
	  {
		console.info("Ya guardé el archivo.", item, response, status, headers);
	  };

	  $scope.SubidorDeArchivos.onCompleteAll =function()
	  {
		var user = JSON.stringify($scope.user);

		console.info("user", $scope.user);

	  	SrvUsuarios.modificarUsuario(user)
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