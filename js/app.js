angular.module('app', ['app.controllers', 'ui.router', 'ui.grid', 'ui.grid.pagination', 'ui.grid.resizeColumns', 'ui.grid.selection', 'ui.grid.exporter', 'ui.grid.edit', 'angularFileUpload', 'satellizer'])

.run(function($rootScope,$auth,UsuarioActual){

	$rootScope.userActual = {};

	if($auth.isAuthenticated()){
		console.info("payload",$auth.getPayload());
		console.info("token",$auth.getToken());
		$rootScope.userActual.login = true;
		$rootScope.userActual.nombre = $auth.getPayload().nombre;
		$rootScope.userActual.foto = $auth.getPayload().foto;
		$rootScope.userActual.tipo = $auth.getPayload().tipo;
		UsuarioActual.login($auth.getPayload().nombre, $auth.getPayload().correo,  $auth.getPayload().tipo,$auth.getPayload().foto);	
	}else{
		$rootScope.userActual.login = false;
		$rootScope.userActual.nombre = "No Logueado";
		$rootScope.userActual.foto = "sin foto";
		$rootScope.userActual.tipo = "";
	}

})


.config(function ($stateProvider, $urlRouterProvider, $authProvider){

	$authProvider.loginUrl ="sidebar-template/ws1/servidor/jwt/php/auth.php";
	$authProvider.tokenName = "PizzeriasArgento";
	$authProvider.tokenPrefix="Aplicacion";
	$authProvider.authHeader="data";

	$stateProvider
		.state("inicio", {
			url:"/inicio",
			templateUrl:"templates/Inicio.html"
		})
		.state("login", {
			url:"/login",
			templateUrl:"templates/Login.html",
			controller:"LoginCtrl"
		})
		.state("register", {
			url:"/register",
			templateUrl:"templates/Register.html",
			controller:"controlRegistro"
		})


	$urlRouterProvider.otherwise("/inicio");

})


