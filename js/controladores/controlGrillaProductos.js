angular.module('app.controllers')

.controller('grillaProductosCtrl', function($scope, $state, $timeout, UsuarioActual, SrvProductos, i18nService, uiGridConstants){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	console.log($scope.usuario.tipo);


	$scope.titulo = "Listado de Productos";


	$scope.gridOptions = {
      // Configuracion para exportar datos.
      exporterCsvFilename: 'misdatos.csv',
      exporterCsvColumnSeparator: ';',
      exporterPdfDefaultStyle: {fontSize: 9},
      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
      exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'red'},
      exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
      exporterPdfFooter: function ( currentPage, pageCount ) {
        return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
      },
      exporterPdfCustomFormatter: function ( docDefinition ) {
        docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
        docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
        return docDefinition;
      },
      exporterPdfOrientation: 'portrait',
      exporterPdfPageSize: 'LETTER',
      exporterPdfMaxGridWidth: 500,
      exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
      onRegisterApi: function(gridApi){
        $scope.gridApi = gridApi;
      }
    };
    $scope.gridOptions.enableGridMenu = true;
    $scope.gridOptions.selectAll = true;
    $scope.gridOptions.paginationPageSizes = [25, 50, 75];
    // Configuracion de la paginacion
    $scope.gridOptions.paginationPageSize = 25;
    $scope.gridOptions.columnDefs = columnDefs();

    console.log($scope.gridOptions.columnDefs);

    if ($scope.usuario.tipo == "comprador") {
    	$scope.gridOptions.columnDefs[2].visible = false;
    };
    // Activo la busqueda en todos los campos.
    $scope.gridOptions.enableFiltering = false;
    // Configuracion del idioma.
    i18nService.setCurrentLang('es');

    /*data.data().then(function(rta){
      // Cargo los datos en la grilla.
      $scope.gridOptions.data = rta;
    });*/


    SrvProductos.traerTodos()
    	.then(function (respuesta){

    		console.info("todos los productos", respuesta);

    		$scope.gridOptions.data = respuesta.data;

    	}).catch(function (error){

    		$scope.gridOptions.data = [];

    	})


    $scope.Borrar = function (rta){

    	var dato = JSON.stringify(parseInt(rta.id)); 

    	SrvProductos.borrarProducto(dato)
    		.then(function (respuesta){

    			SrvProductos.traerTodos()
			    	.then(function (respuesta){

			    		console.info("todos los productos", respuesta);

			    		$scope.gridOptions.data = respuesta.data;

			    	}).catch(function (error){

			    		$scope.gridOptions.data = [];

			    	})

    		}).catch(function (error){

    			console.log(error);

    		})

    }

    function columnDefs () {
      return [
        { field: 'nombre', name: 'nombre', height:45},
        { field: 'porcentaje', name: 'porcentaje'},
        { field: 'borrar', name: 'borrar'
          ,cellTemplate:'<button ng-click="grid.appScope.Borrar(row.entity)" class="btn btn-danger btn-sm"><i class="glyphicon glyphicon-trash">&nbsp;Borrar</i></button>'
          ,visible: true
        },
      ];
    }

})