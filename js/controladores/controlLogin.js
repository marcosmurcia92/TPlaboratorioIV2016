angular.module('app.controllers', [])

.controller("LoginCtrl", function($scope, $auth, UsuarioActual, $state, $rootScope){

	$scope.usuario = {};

	$scope.usuario.nombre = "";
	$scope.usuario.email = "";
	$scope.usuario.clave = "";

	if ($auth.isAuthenticated()){
		console.info("getToken", $auth.getToken());
		console.info("token", $auth.getPayload());
	} else{
	    console.info("token", $auth.getPayload());
	    console.info("Factory Usuario Actual", UsuarioActual.getFullData());
	}

	$scope.IngresoAdmin = function(){
		$scope.usuario.nombre = "admin";
		$scope.usuario.email = "admin@admin.com";
		$scope.usuario.clave = "123";
	}

	$scope.IngresoEncargado = function(){
		$scope.usuario.nombre = "encargado";
		$scope.usuario.email = "encargado@encargado.com";
		$scope.usuario.clave = "456";
	}

	$scope.IngresoEmpleado = function(){
		$scope.usuario.nombre = "empleado";
		$scope.usuario.email = "empleado@empleado.com";
		$scope.usuario.clave = "789";
	}

	$scope.IngresoCliente = function(){
		$scope.usuario.nombre = "cliente";
		$scope.usuario.email = "cliente@cliente.com";
		$scope.usuario.clave = "321";
	}

	$scope.Guardar=function(){

	/*$auth.authenticate('github')
	  .then(function(response) {
	    alert(response);
	  })
	  .catch(function(response) {
	    alert(response);
	  });*/
	$auth.login($scope.usuario)
	  .then(function(response) {
	    console.info("correcto", response); //Sabemos que nos devuelve un token correcto SOLO CON EL ISAUTHENTICATED
	    if ($auth.isAuthenticated()){
	    	console.info("token", $auth.getPayload());
	    	UsuarioActual.login($auth.getPayload().id,$auth.getPayload().nombre, $auth.getPayload().email,  $auth.getPayload().cargo);
	    	$rootScope.userActual = JSON.parse(UsuarioActual.getFullData());
	    	$rootScope.userActual.login = true;
	    	console.log($rootScope.userActual);
	    	$state.go('inicio');
	    }
	    else
	    	console.info("no token", $auth.getPayload());
	  })
	  .catch(function(response) {
	    console.info("NO volvio bien", response);
	  });

	}
	
})