angular.module('app.controllers')

.controller('exportarCtrl', function($scope, $state, $timeout, UsuarioActual, SrvUsuarios, SrvProductos, SrvSucursales, SrvOfertas, SrvPedidos, SrvEncuestas){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	$scope.ListaSucursales = [];
	$scope.ListaUsuarios = [];
	$scope.ListaOfertas = [];
	$scope.ListaProductos = [];
	$scope.ListaPedidos = [];
	$scope.ListaEncuestas = [];


    $scope.tableFlags = {
        usuariosON : true,
        sucursalesON : true,
        productosON : true,
        pedidosON : true,
        ofertasON : true,
        encuestasON : true
    };

    $scope.ExportarPDF = function () {
        html2canvas(document.getElementById('exportthis'), {
            onrendered: function (canvas) {
                var data = canvas.toDataURL();

                // var link = document.createElement('a');
                // link.download = "test.jpg";
                // link.href = data;
                // link.click();
                var docDefinition = {
                    content: [{
                        image: data,
                        fit: [590, 100000]
                    }]
                };
                pdfMake.createPdf(docDefinition).download("reporte.pdf");
             }
        });
    };

    $scope.ExportarCSV = function($event,csvDivName, fileName){
        switch(csvDivName) {
            case 'usu':
                $scope.usuariosCsv.generate($event, fileName);
                var link = document.createElement('a');
                link.download = fileName;
                link.href = $scope.usuariosCsv.link();
                link.click();
                break;
            case 'suc':
                $scope.sucursalesCsv.generate($event, fileName);
                var link = document.createElement('a');
                link.download = fileName;
                link.href = $scope.sucursalesCsv.link();
                link.click();
                break;
            case 'prod':
                $scope.productosCsv.generate($event, fileName);
                var link = document.createElement('a');
                link.download = fileName;
                link.href = $scope.productosCsv.link();
                link.click();
                break;
            case 'ped':
                $scope.pedidosCsv.generate($event, fileName);
                var link = document.createElement('a');
                link.download = fileName;
                link.href = $scope.pedidosCsv.link();
                link.click();
                break;
            case 'ofer':
                $scope.ofertasCsv.generate($event, fileName);
                var link = document.createElement('a');
                link.download = fileName;
                link.href = $scope.ofertasCsv.link();
                link.click();
                break;
            case 'enc':
                $scope.encuestasCsv.generate($event, fileName);
                var link = document.createElement('a');
                link.download = fileName;
                link.href = $scope.encuestasCsv.link();
                link.click();
                break;
            default:
                break;
        }
    };

	SrvOfertas.traerTodas()
    	.then(function (respuesta){

    		console.info("todas las ofertas", respuesta);
            $scope.ListaOfertas = respuesta.data;
            for (var i = $scope.ListaOfertas.length - 1; i >= 0; i--) {
                $scope.ListaOfertas[i].fechaFin = new Date(respuesta.data[i].fechaFin);
            };

            SrvUsuarios.traerTodos()
            .then(function (respuesta){

                console.info("todos los usuarios", respuesta);
                $scope.ListaUsuarios = respuesta.data;

                SrvSucursales.traerTodas()
                    .then(function (respuesta){

                        console.info("todas las sucursales", respuesta);
                        $scope.ListaSucursales = respuesta.data;

                        SrvProductos.traerTodos()
                            .then(function (respuesta){

                                console.info("todos los productos", respuesta);
                                $scope.ListaProductos = respuesta.data;

                                SrvPedidos.traerTodos()
                                .then(function (respuesta){

                                    console.info("todos los pedidos", respuesta);
                                    $scope.ListaPedidos = respuesta.data;
                                    for (var i = $scope.ListaPedidos.length - 1; i >= 0; i--) {
                                        $scope.ListaPedidos[i].fechaPedido = new Date(respuesta.data[i].fechaPedido);
                                    };

                                    SrvEncuestas.traerTodas()
                                        .then(function (respuesta){

                                            console.info("todas las encuestas", respuesta);
                                        $scope.ListaEncuestas = respuesta.data;

                                        }).catch(function (error){

                                            $scope.ListaSucursales = [];

                                        })

                                }).catch(function (error){

                                    $scope.ListaPedidos = [];

                                })
                            }).catch(function (error){

                                $scope.ListaProductos = [];

                            })

                    }).catch(function (error){

                        $scope.ListaSucursales = [];

                    })

            }).catch(function (error){

                $scope.ListaUsuarios = [];

            })
    	}).catch(function (error){

    		$scope.ListaOfertas = [];

    	})
    
})