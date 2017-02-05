angular.module('app', ['app.controllers', 'ngMap', 'ngAnimate', 'ngTouch', 'ngFader', 'ui.bootstrap', 'ui.router', 'ui.grid', 'ui.grid.pagination', 'ui.grid.resizeColumns', 'ui.grid.selection', 'ui.grid.exporter', 'ui.grid.edit', 'angularFileUpload', 'satellizer'])

.run(function($rootScope,$auth,UsuarioActual,$state){

	$rootScope.userActual = {};

	if($auth.isAuthenticated()){
		console.info("payload",$auth.getPayload());
		console.info("token",$auth.getToken());
		$rootScope.userActual.login = true;
		$rootScope.userActual.nombre = $auth.getPayload().nombre;
		$rootScope.userActual.cargo = $auth.getPayload().cargo;
		UsuarioActual.login($auth.getPayload().nombre, $auth.getPayload().correo,  $auth.getPayload().cargo,$auth.getPayload().foto);	
	}else{
		$rootScope.userActual.login = false;
		$rootScope.userActual.nombre = "No Logueado";
		$rootScope.userActual.cargo = "";
	}

	$rootScope.Logout = function (){

		$auth.logout();

		UsuarioActual.login("", "", "");

		$rootScope.userActual = {};
		$rootScope.userActual.login = false;
		$rootScope.userActual.nombre = "No Logueado";
		$rootScope.userActual.foto = "sin foto";

		$state.go('inicio');

	};

})


.config(function ($stateProvider, $urlRouterProvider, $authProvider){

	$authProvider.loginUrl ="TPFinalLab4_Murcia/ws1/servidor/jwt/php/auth.php";
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
		.state("menuSucursales", {
			url:"/menu-sucursales",
			templateUrl:"templates/Menu-Sucursales.html",
			controller:"MenuCtrl",
			abstract:true
		})
		.state("menuSucursales.lista", {
			url:"/lista",
			views:{
				"subVista":{
					templateUrl:"templates/Suc-Lista.html",
					controller:"listaSucursalesCtrl"
				}
			}
		})
		.state("menuSucursales.alta", {
			url:"/alta",
			views:{
				"subVista":{
					templateUrl:"templates/Suc-Alta.html",
					controller:"altaSucursalesCtrl"
				}
			}
		})

		.state("menuProductos", {
			url:"/menu-productos",
			templateUrl:"templates/Menu-Productos.html",
			controller:"MenuCtrl",
			abstract:true
		})
		.state("menuProductos.lista", {
			url:"/lista",
			views:{
				"subVista":{
					templateUrl:"templates/Prod-Lista.html",
					controller:"listaProductosCtrl"
				}
			}
		})
		.state("menuProductos.alta", {
			url:"/alta",
			views:{
				"subVista":{
					templateUrl:"templates/Prod-Alta.html",
					controller:"altaProductosCtrl"
				}
			}
		})

		.state("menuPedidos", {
			url:"/menu-pedidos",
			templateUrl:"templates/Menu-Pedidos.html",
			controller:"MenuCtrl",
			abstract:true
		})
		.state("menuPedidos.lista", {
			url:"/lista",
			views:{
				"subVista":{
					templateUrl:"templates/Ped-Lista.html",
					controller:"listaPedidosCtrl"
				}
			}
		})
		.state("menuPedidos.alta", {
			url:"/alta",
			views:{
				"subVista":{
					templateUrl:"templates/Ped-Alta.html",
					controller:"altaPedidosCtrl"
				}
			}
		})

		.state("menuOfertas", {
			url:"/menu-ofertas",
			templateUrl:"templates/Menu-Ofertas.html",
			controller:"MenuCtrl",
			abstract:true
		})
		.state("menuOfertas.lista", {
			url:"/lista",
			views:{
				"subVista":{
					templateUrl:"templates/Ofer-Lista.html",
					controller:"listaOfertasCtrl"
				}
			}
		})
		.state("menuOfertas.alta", {
			url:"/alta",
			views:{
				"subVista":{
					templateUrl:"templates/Ofer-Alta.html",
					controller:"altaOfertasCtrl"
				}
			}
		})

		.state("menuUsuarios", {
			url:"/menu-usuarios",
			templateUrl:"templates/Menu-Usuarios.html",
			controller:"MenuCtrl",
			abstract:true
		})
		.state("menuUsuarios.lista", {
			url:"/lista",
			views:{
				"subVista":{
					templateUrl:"templates/Usu-Lista.html",
					controller:"listaUsuariosCtrl"
				}
			}
		})
		.state("menuUsuarios.alta", {
			url:"/alta",
			views:{
				"subVista":{
					templateUrl:"templates/Usu-Alta.html",
					controller:"altaUsuariosCtrl"
				}
			}
		})


	$urlRouterProvider.otherwise("/inicio");

})


