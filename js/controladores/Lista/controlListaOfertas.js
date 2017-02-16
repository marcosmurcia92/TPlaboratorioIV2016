angular.module('app.controllers')

.controller('listaOfertasCtrl', function($scope, $state, $timeout, SrvOfertas, SrvProductos, SrvSucursales){

	$scope.titulo = "Listado de Ofertas";

    $scope.ListaOfertas = [];

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

     $scope.ExportarPDF = function () {
        html2canvas(document.getElementById('exportthis'), {
            onrendered: function (canvas) {
                var data = canvas.toDataURL();
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500,
                    }]
                };
                pdfMake.createPdf(docDefinition).download("test.pdf");
            }
        });
    };

    $scope.ExportarCSV = function($event, fileName){
        $scope.ofertasCsv.generate($event, fileName);
        document.location.href=$scope.ofertasCsv.link();
    };

    SrvOfertas.traerTodas()
    	.then(function (respuesta){

    		console.info("todas las ofertas", respuesta);
        $scope.ListaOfertas = respuesta.data;

    	}).catch(function (error){

    		$scope.ListaOfertas = [];

    	})

})