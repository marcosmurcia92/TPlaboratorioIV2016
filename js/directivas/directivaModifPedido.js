angular
	.module('app')

	.directive('modalModifPedido', function($interval, SrvPedidos, SrvProductos, SrvSucursales, SrvUsuarios, SrvOfertas){

		function modifPedidoCtrl($scope){

			$scope.miPedido.idProd = -1;
			$scope.miPedido.idSuc = -1;
			$scope.miPedido.idCliente = -1;
			$scope.miPedido.estado = "Pendiente";

			$scope.oferta = -1;

			var dtToday = new Date();
			var dtMin = dtToday;
			dtMin.setDate(dtMin.getDate() + 2);

			var month = dtMin.getMonth() + 1;
		    var day = dtMin.getDate();
		    var year = dtMin.getFullYear();
		    if(month < 10)
		        month = '0' + month.toString();
		    if(day < 10)
		        day = '0' + day.toString();

			$scope.minDate = day + '/' + month + '/' + year;
			var dtMax = dtToday;
			dtMax.setDate(dtMax.getDate() + 5);

			month = dtMax.getMonth() + 1;
		    day = dtMax.getDate();
		    year = dtMax.getFullYear();
		    if(month < 10)
		        month = '0' + month.toString();
		    if(day < 10)
		        day = '0' + day.toString();

			$scope.maxDate = day + '/' + month + '/' + year;

			$scope.ListaProductos = [];
			$scope.ListaSucursales = [];
			$scope.ListaOfertas = [];
			$scope.ListaUsuarios = [];

			$scope.ChequearFechas = function(){
				var checkMin = $scope.miPedido.fechaPedido < $scope.minDate;
				var checkMax = $scope.miPedido.fechaPedido > $scope.maxDate;

				return (checkMin || checkMax);
			}

			SrvProductos.traerTodos()
		    	.then(function (respuesta){

		    		console.info("todos los productos", respuesta);
		        	$scope.ListaProductos = respuesta.data;
		        	SrvSucursales.traerTodas()
				    	.then(function (respuesta){

				    		console.info("todas las sucursales", respuesta);
				        	$scope.ListaSucursales = respuesta.data;
				        	SrvUsuarios.traerTodos()
						    	.then(function (respuesta){

						    		console.info("todos los usuarios", respuesta);
						    		for (var i = 0; i < respuesta.data.length; i++) {
						    			if(respuesta.data[i].cargo == 'Cliente'){
						    				$scope.ListaUsuarios.push(respuesta.data[i]);
						    			}
						    		};

								    SrvOfertas.traerTodas()
								    	.then(function (respuesta){

								    		console.info("todas las ofertas", respuesta);
								        $scope.ListaOfertas = respuesta.data;

								    	}).catch(function (error){

								    		$scope.ListaOfertas = [];

								    	})

						    	}).catch(function (error){

		    						console.info("ERROR",error);
						    		$scope.ListaUsuarios = [];

						    	})
				    	}).catch(function (error){

		    				console.info("ERROR",error);
				    		$scope.ListaSucursales = [];

				    	})
		    	}).catch(function (error){

		    		console.info("ERROR",error);
		    		$scope.ListaProductos = [];

		    	});

		    $scope.refreshSelects = $interval(function(){
				if($scope.miPedido.idProd != -1){
					var prodSelect = document.getElementById('pedIdProd');
					if(prodSelect.options[0].value.includes("?")){
						prodSelect.options[$scope.miPedido.idProd].selected = true;
					}else{
						prodSelect.options[$scope.miPedido.idProd - 1].selected = true;
					}
				}
				if($scope.miPedido.idSuc != -1){
					var sucSelect = document.getElementById('pedIdSuc');
					if(sucSelect.options[0].value.includes("?")){
						sucSelect.options[$scope.miPedido.idSuc].selected = true;
					}else{
						sucSelect.options[$scope.miPedido.idSuc - 1].selected = true;
					}
				}
				if($scope.miPedido.idCliente != -1 && $scope.ListaUsuarios){
					var idxCliente = -1;
					var clienteSelect = document.getElementById('pedIdCliente');
					for (var i = clienteSelect.options.length - 1; i >= 0; i--) {
						if(clienteSelect.options[i].value == $scope.miPedido.idCliente){
							idxCliente = i;
						}
					}
					clienteSelect.options[idxCliente].selected = true;
					
				}
			},200);

		    $scope.updateMonto = $interval(function(){
		    	if($scope.miPedido.idProd != -1){
		    		var idxProd = $scope.BuscarIdxProducto($scope.miPedido.idProd);
		    		if(idxProd != -1){
		    			var idxSuc = $scope.BuscarIdxSucursal($scope.miPedido.idSuc);
		    			if(idxSuc != -1){
		    				$scope.oferta = $scope.BuscarOferta($scope.miPedido.idProd,$scope.miPedido.idSuc);
		    				if($scope.oferta != -1){
		    					$scope.miPedido.monto = $scope.ListaProductos[idxProd].precio * $scope.miPedido.cantPedida * ($scope.oferta / 100);
		    				}else{
		    					$scope.miPedido.monto = $scope.ListaProductos[idxProd].precio * $scope.miPedido.cantPedida;
		    				}
		    			}
		    		}
		    	}
		    },100);

		    $scope.BuscarIdxProducto = function(id){
		    	for (var i = $scope.ListaProductos.length - 1; i >= 0; i--) {
		    		if($scope.ListaProductos[i].idProd == id){
		    			return i;
		    		}
		    	};

		    	return -1;
		    };

		    $scope.BuscarIdxSucursal = function(id){
		    	for (var i = $scope.ListaSucursales.length - 1; i >= 0; i--) {
		    		if($scope.ListaSucursales[i].idSuc == id){
		    			return i;
		    		}
		    	};

		    	return -1;
		    };

		    $scope.BuscarOferta = function(idP,idS){
		    	for (var i = $scope.ListaOfertas.length - 1; i >= 0; i--) {
		    		if($scope.ListaOfertas[i].idProd == idP && $scope.ListaOfertas[i].idSuc == idS){
		    			return $scope.ListaOfertas[i].descuento;
		    		}
		    	};

		    	return -1;
		    }
		    

			$scope.Guardar = function(){

				$scope.modifparent();

			}

			$scope.CerrarModal = function(){
				//$interval.cancel($scope.refreshSelects);
				$scope.cancelmodif();
				document.getElementById('id05').style.display='none';
			}
		}

		return {
			scope: {miPedido: '=pedidoporparametro', modifparent: '&', cancelmodif: '&'},
			replace: true,
			restrict: 'E',
			templateUrl: 'templates/directivas/templateModalModifPedido.html',
			controller: modifPedidoCtrl
		};

	})
