angular
	.module('app')
	.service('SrvProductos', function ($http, factoryRutas){

		this.insertarProducto = InsertarProducto;

		this.traerTodos = TraerTodos;

		this.traerUno = TraerUno;

		this.borrarProducto = BorrarProducto;

		console.log("rutaProd", factoryRutas.RutaProductos);

		this.traerUrlFotos = TraerUrlFotos;
		
		var url = factoryRutas.RutaProductos;

		function InsertarProducto(producto){

			console.log(producto);
			//return $http.post('http://baratinga.hol.es/ws1/producto/' + producto)
			return $http.post(url + producto)
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

		function TraerUno(id){

			return $http.get(url+id)
				.then(function (respuesta){

					console.log(respuesta);

					return respuesta;

				}).catch(function (error){

					console.info("error", error);

				})

		};


		function BorrarProducto(id){

			return $http.delete(url + id)
				.then(function (respuesta){

					console.log(respuesta);

				}).catch(function (error){

					console.log(error);

				})

		};

		function TraerUrlFotos(){
			return factoryRutas.RutaFotos;
		};

		

	})