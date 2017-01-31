angular
	.module('app')
	.service('SrvSucursales', function ($http, factoryRutas){

		this.insertarSucursal = InsertarSucursal;

		this.traerTodas = TraerTodas;

		this.borrarSucursal = BorrarSucursal;

		console.log("rutaSuc", factoryRutas.RutaSucursales);

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


		function TraerTodas(){

			return $http.get(url)
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

		

	})