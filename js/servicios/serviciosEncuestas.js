angular
	.module('app')
	.service('SrvEncuestas', function ($http, factoryRutas){

		this.insertarEncuesta = InsertarEncuesta;

		this.traerTodas = TraerTodas;

		this.borrarEncuesta = BorrarEncuesta;

		console.log("rutaEnc", factoryRutas.RutaEncuestas);

		this.traerUrlFotos = TraerUrlFotos;
		
		var url = factoryRutas.RutaEncuestas;

		function InsertarEncuesta(encuesta){

			console.log(encuesta);
			//return $http.post('http://baratinga.hol.es/ws1/encuesta/' + encuesta)
			return $http.post(url + encuesta)
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


		function BorrarEncuesta(id){

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