angular.module('app.controllers')

.controller('listaPedidosCtrl', function($scope, $state, $timeout, SrvPedidos, SrvProductos, SrvSucursales, SrvUsuarios){

	$scope.titulo = "Listado de Pedidos";

    $scope.ListaPedidos = [];

    $scope.ProductoParaMostrar = {
    	nombre : "NOMBRE",
    	precio : "123",
        foto1 : "placeholder1.png",
        foto2 : "placeholder1.png",
        foto3 : "placeholder1.png"
    };

    $scope.SucursalParaMostrar = {
    	nombre : "NOMBRE",
    	localidad : "LOCALIDAD",
        foto1 : "placeholder1.png",
        foto2 : "placeholder1.png",
        foto3 : "placeholder1.png"
    };

    $scope.ClienteParaMostrar = {
    	nombre : "NOMBRE",
    	email: "MAIL"
    };

    $scope.MostrarProducto = function(idProducto){
        console.log("MI Producto ANTES", $scope.ProductoParaMostrar);
        SrvProductos.traerUno(idProducto)
        	.then(function (respuesta){
	    		console.info("producto encontrado", respuesta);
		        $scope.ProductoParaMostrar = respuesta.data;
	        	console.log("MI Producto DESPUES", $scope.ProductoParaMostrar);
	    		document.getElementById('id01').style.display='block';
	    	}).catch(function (error){

	    		$scope.ProductoParaMostrar = {
			    	nombre : "NOMBRE",
			    	precio : "123",
			        foto1 : "placeholder1.png",
			        foto2 : "placeholder1.png",
			        foto3 : "placeholder1.png"
			    };

	    	})

    };

    $scope.MostrarSucursal = function(sucursal){
    	console.log("MI SUCURSAL ANTES", $scope.SucursalParaMostrar);
        SrvSucursales.traerUna(sucursal)
        	.then(function (respuesta){
	    		console.info("sucursal encontrada", respuesta);
		        $scope.SucursalParaMostrar = respuesta.data;
	        	console.log("MI SUCURSAL DESPUES", $scope.SucursalParaMostrar);
	    		document.getElementById('id02').style.display='block';
	    	}).catch(function (error){

	    		$scope.SucursalParaMostrar = {
			    	nombre : "NOMBRE",
			    	localidad : "LOCALIDAD",
			        foto1 : "placeholder1.png",
			        foto2 : "placeholder1.png",
			        foto3 : "placeholder1.png"
			    };

	    	})
    };

    $scope.MostrarCliente = function(cliente){
    	console.log("MI CLIENTE ANTES", $scope.ClienteParaMostrar);
        SrvUsuarios.traerUno(cliente)
        	.then(function (respuesta){
	    		console.info("cliente encontrado", respuesta);
		        $scope.ClienteParaMostrar = respuesta.data;
	        	console.log("MI CLIENTE DESPUES", $scope.ClienteParaMostrar);
	    		document.getElementById('id03').style.display='block';
	    	}).catch(function (error){

			    $scope.ClienteParaMostrar = {
			    	nombre : "NOMBRE",
			    	email: "MAIL"
			    };

	    	})
    };

    $scope.CerrarPedido = function(pedido){
    	pedido.estado = "Esperando Encuesta";
    	var jsonPedido = JSON.stringify(pedido);
    	SrvPedidos.modificarPedido(jsonPedido)
    		.then(function (respuesta){
	    		$timeout(function(){
	    			console.info(respuesta);
	    		},100);
	    	}).catch(function (error){

	    		console.info("Error", error);

	    	})
    };

    // $scope.BuscarIdxPedido = function(id){
    // 	for (var i = $scope.ListaPedidos.length - 1; i >= 0; i--) {
    // 		if($scope.ListaPedidos[i].idPed == id){
    // 			return i;
    // 		}
    // 	};

    // 	return -1;
    // };

    $scope.RealizarEncuesta = function(pedido){

    };

    $scope.ModificarPedido = function(pedido){

    };

    SrvPedidos.traerTodos()
    	.then(function (respuesta){

    		console.info("todos los pedidos", respuesta);
        $scope.ListaPedidos = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaPedidos = [];

    	})

})