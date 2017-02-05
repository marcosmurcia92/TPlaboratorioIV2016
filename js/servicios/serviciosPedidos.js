angular
	.module('app')
	.service('SrvPedidos', function ($http, factoryRutas){

		this.insertarPedido = InsertarPedido;

		this.traerTodos = TraerTodos;

		this.borrarPedido = BorrarPedido;

		this.modificarPedido = ModificarPedido;

		console.log("rutaPed", factoryRutas.RutaPedidos);

		var url = factoryRutas.RutaPedidos;

		function InsertarPedido(pedido){

			console.log(pedido);
			//return $http.post('http://baratinga.hol.es/ws1/Pedido/' + Pedido)
			return $http.post(url + pedido)
				.then(function (respuesta){

					console.log(respuesta);

					return respuesta;

				}).catch(function (error){

					console.log(error);

				})

		};

		function ModificarPedido(pedido){

			console.log(pedido);
			//return $http.post('http://baratinga.hol.es/ws1/Pedido/' + Pedido)
			return $http.put(url + pedido)
				.then(function (respuesta){

					console.log(respuesta);

					return respuesta;

				}).catch(function (error){

					console.log(error);

				})

		};


		function TraerTodos(){

			return $http.get(url)
				.then(function (respuesta){

					console.log(respuesta);

					return respuesta;

				}).catch(function (error){

					console.info("error", error);

				})

		};


		function BorrarPedido(id){

			return $http.delete(url + id)
				.then(function (respuesta){

					console.log(respuesta);

				}).catch(function (error){

					console.log(error);

				})

		};

		

	})