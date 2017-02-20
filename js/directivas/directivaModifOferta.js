angular
	.module('app')

	.directive('modalModifOferta', function($interval, SrvProductos, SrvSucursales){

		function modifOfertaCtrl($scope){
			$scope.ListaProductos = [];
			$scope.ListaSucursales = [];

			$scope.refreshSelects = $interval(function(){
				if($scope.miOferta.idProd){
					var prodSelect = document.getElementById('oferIdProd');
					if(prodSelect.options[0].value.includes("?")){
						prodSelect.options[$scope.miOferta.idProd].selected = true;
					}else{
						prodSelect.options[$scope.miOferta.idProd - 1].selected = true;
					}
				}
				if($scope.miOferta.idSuc){
					var sucSelect = document.getElementById('oferIdSuc');
					if(sucSelect.options[0].value.includes("?")){
						sucSelect.options[$scope.miOferta.idSuc].selected = true;
					}else{
						sucSelect.options[$scope.miOferta.idSuc - 1].selected = true;
					}
				}
			},200);

			SrvProductos.traerTodos()
		    	.then(function (respuesta){

		    		console.info("todos los productos", respuesta);
		        	$scope.ListaProductos = respuesta.data;
		        	SrvSucursales.traerTodas()
				    	.then(function (respuesta){

				    		console.info("todas las sucursales", respuesta);
				        	$scope.ListaSucursales = respuesta.data;
				        	
				    	}).catch(function (error){

		    				console.info("ERROR",error);
				    		$scope.ListaSucursales = [];

				    	})
		    	}).catch(function (error){

		    		console.info("ERROR",error);
		    		$scope.ListaProductos = [];

		    	});

			$scope.Guardar = function(){
				$scope.modifparent();
			}

			$scope.CerrarModal = function(){
				//$interval.cancel($scope.refreshSelects);
				$scope.cancelmodif();
				document.getElementById('id03').style.display='none';
			}
		}

		return {
			scope: {miOferta: '=ofertaporparametro', modifparent: '&', cancelmodif: '&'},
			replace: true,
			restrict: 'E',
			templateUrl: 'templates/directivas/templateModalModifOferta.html',
			controller: modifOfertaCtrl
		};

	})
