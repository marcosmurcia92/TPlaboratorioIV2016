angular
	.module('app')
	.service('SrvOfertas', function ($http, factoryRutas){

		this.insertarOferta = InsertarOferta;

		this.modificarOferta = ModificarOferta;

		this.traerTodas = TraerTodas;

		this.borrarOferta = BorrarOferta;

		console.log("rutaOfer", factoryRutas.RutaOfertas);

		var url = factoryRutas.RutaOfertas;

		function InsertarOferta(oferta){

			console.log(oferta);
			return $http.post(url + oferta)
				.then(function (respuesta){

					console.log(respuesta);

					return respuesta;

				}).catch(function (error){

					console.log(error);

				})

		};

		function ModificarOferta(oferta){

			console.log(oferta);
			return $http.put(url + oferta)
				.then(function (respuesta){

					console.log(respuesta);

					return respuesta;

				}).catch(function (error){

					console.log(error);

				})

		};


		function TraerTodas(){

			return $http.get(url)
				.then(function (respuesta){

					console.log(respuesta);

					return respuesta;

				}).catch(function (error){

					console.info("error", error);

				})

		};


		function BorrarOferta(id){

			return $http.delete(url + id)
				.then(function (respuesta){

					console.log(respuesta);

				}).catch(function (error){

					console.log(error);

				})

		};

		

	})