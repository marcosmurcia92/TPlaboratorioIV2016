angular
	.module('app')
	.service('SrvUsuarios', function ($http, factoryRutas){

		this.insertarUsuario = InsertarUsuario;

		this.traerTodos = TraerTodos;

		this.borrarUsuario = BorrarUsuario;

		this.modificarUsuario = ModificarUsuario;

		this.traerUrlFotos = TraerUrlFotos;

		console.log("rutaUser", factoryRutas.RutaUsuarios);

		var url = factoryRutas.RutaUsuarios;

		function InsertarUsuario(usuario){

			console.log(usuario);
			//return $http.post('http://baratinga.hol.es/ws1/usuario/' + usuario)
			return $http.post(url + usuario)
				.then(function (respuesta){

					console.log(respuesta);

					return respuesta;

				}).catch(function (error){

					console.log(error);

				})

		};


		function ModificarUsuario(usuario){

			console.log(usuario);

			return $http.put(url + usuario)
				.then(function (respuesta){

					console.log(respuesta);

					return respuesta;

				}).catch(function (error){

					console.log(error);

				})

		}


		function TraerTodos(){

			return $http.get(url)
				.then(function (respuesta){

					console.log(respuesta);

					return respuesta;

				}).catch(function (error){

					console.info("error", error);

				})

		};


		function BorrarUsuario(id){

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