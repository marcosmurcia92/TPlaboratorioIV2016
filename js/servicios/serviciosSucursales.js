angular
	.module('app')
	.service('SrvSucursales', function ($http, factoryRutas){

		this.insertarSucursal = InsertarSucursal;

		this.traerTodas = TraerTodas;

		this.traerUna = TraerUna;

		this.borrarSucursal = BorrarSucursal;

		this.modificarSucursal = ModificarSucursal;

		console.log("rutaSuc", factoryRutas.RutaSucursales);

		this.traerUrlFotos = TraerUrlFotos;
		
		var url = factoryRutas.RutaSucursales;

		function InsertarSucursal(sucursal){

			console.log(sucursal);
			//return $http.post('http://baratinga.hol.es/ws1/Sucursal/' + Sucursal)
			return $http.post(url + sucursal)
				.then(function (respuesta){

					console.log(respuesta);

					return respuesta;

				}).catch(function (error){

					console.log(error);

				})

		};

		function ModificarSucursal(sucursal){

			console.log(sucursal);
			//return $http.post('http://baratinga.hol.es/ws1/sucursal/' + sucursal)
			return $http.put(url + sucursal)
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


		function TraerUna(id){

			return $http.get(url+id)
				.then(function (respuesta){

					console.log(respuesta);

					return respuesta;

				}).catch(function (error){

					console.info("error", error);

				})

		};


		function BorrarSucursal(id){

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