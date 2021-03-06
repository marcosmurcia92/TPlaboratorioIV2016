angular.module('app.controllers')

.controller('listaPedidosCtrl', function($scope, $state, $timeout, UsuarioActual, SrvPedidos, SrvProductos, SrvSucursales, SrvUsuarios, SrvEncuestas){

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

    $scope.PedidoSeleccionado = {};

    $scope.PedidoParaModificar = {};

    $scope.EncuestaRegistrada = {};
    $scope.EncuestaParaMostrar = {
        foto1 : "sin foto",
        foto2 : "sin foto",
        foto3 : "sin foto"
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
        $scope.PedidoSeleccionado = pedido;
        console.info("PEDIDO PRESELECCIONADO", $scope.PedidoSeleccionado);
        document.getElementById('id04').style.display='block';
    };

    $scope.VerEncuesta = function(pedido){
        SrvEncuestas.traerUna(pedido.idPed)
            .then(function (respuesta){
                console.info("encuesta encontrada", respuesta);
                $scope.EncuestaParaMostrar = respuesta.data;
                document.getElementById('id06').style.display='block';
            }).catch(function (error){

                $scope.EncuestaParaMostrar = {
                    foto1 : "sin foto",
                    foto2 : "sin foto",
                    foto3 : "sin foto"
                };

            })
        
    };

    $scope.RegistrarEncuesta = function(){
        console.info("PEDIDO SELECCIONADO", $scope.PedidoSeleccionado);
        $scope.EncuestaRegistrada.idPed = $scope.PedidoSeleccionado.idPed;
        $scope.EncuestaRegistrada.idCliente = $scope.PedidoSeleccionado.idCliente;
        console.info("Encuesta Recibida", $scope.EncuestaRegistrada);
        var jsonEncuesta = JSON.stringify($scope.EncuestaRegistrada);
        SrvEncuestas.insertarEncuesta(jsonEncuesta)
            .then(function (respuesta){
                console.info("Respuesta", respuesta);
                $scope.PedidoSeleccionado.estado = "Cerrado";
                var jsonPedido = JSON.stringify($scope.PedidoSeleccionado);
                SrvPedidos.modificarPedido(jsonPedido)
                    .then(function (respuesta){
                        $timeout(function(){
                            console.info(respuesta);
                            document.getElementById('id04').style.display='none';
                        },100);
                    }).catch(function (error){

                        console.info("Error", error);
                    })
            }).catch(function (error){

                $scope.ListaPedidos = [];

            })

    };

    $scope.ModificarPedido = function(pedidoModif){
        $scope.PedidoParaModificar = pedidoModif;
        $scope.PedidoParaModificar.fechaPedido = new Date(pedidoModif.fechaPedido);
        document.getElementById('id05').style.display='block';
    };

    $scope.RealizarModificacion = function(){
        var jsonModif = JSON.stringify($scope.PedidoParaModificar);
        SrvPedidos.modificarPedido(jsonModif)
            .then(function (respuesta){
                $timeout(function(){
                    console.info(respuesta);
                    document.getElementById('id05').style.display='none';
                },100);
            }).catch(function (error){

                console.info("Error", error);

            })
    }

    $scope.CancelarModificacion = function(){
        $scope.ListaPedidos = [];
        SrvPedidos.traerTodos()
        .then(function (respuesta){

            console.info("todos los Pedidos", respuesta);
            $scope.ListaPedidos = respuesta.data;

        }).catch(function (error){

            $scope.ListaPedidos = [];

        })
    };

    SrvPedidos.traerTodos()
    	.then(function (respuesta){

    		console.info("todos los pedidos", respuesta);
            $scope.ListaPedidos = respuesta.data;
            for (var i = $scope.ListaPedidos.length - 1; i >= 0; i--) {
                $scope.ListaPedidos[i].fechaPedido = new Date(respuesta.data[i].fechaPedido);
            };

    	}).catch(function (error){

    		$scope.ListaPedidos = [];

    	})

})