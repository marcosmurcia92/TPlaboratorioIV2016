angular.module('app.controllers')

.controller('grillaUsuariosCtrl', function($scope, $state, $timeout, UsuarioActual, SrvUsuarios, i18nService, uiGridConstants){

	$scope.usuario = JSON.parse(UsuarioActual.getFullData());

	console.log($scope.usuario.tipo);


	$scope.titulo = "Listado de Usuarios";


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
    $scope.gridOptions.rowHeight = 100;
    $scope.gridOptions.columnDefs = columnDefs();

    console.log($scope.gridOptions.columnDefs);
    // Activo la busqueda en todos los campos.
    $scope.gridOptions.enableFiltering = true;
    // Configuracion del idioma.
    i18nService.setCurrentLang('es');

    /*data.data().then(function(rta){
      // Cargo los datos en la grilla.
      $scope.gridOptions.data = rta;
    });*/


    SrvUsuarios.traerTodos()
    	.then(function (respuesta){

    		console.info("todos los usuarios", respuesta);

    		$scope.gridOptions.data = respuesta.data;

    	}).catch(function (error){

    		$scope.gridOptions.data = [];

    	})


    $scope.Borrar = function (rta){

    	var dato = JSON.stringify(parseInt(rta.id)); 

    	SrvUsuarios.borrarUsuario(dato)
    		.then(function (respuesta){

    			SrvUsuarios.traerTodos()
			    	.then(function (respuesta){

			    		console.info("todos los usuarios", respuesta);

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
        { field: 'nombre', name: 'nombre'},
        { field: 'foto', name: 'foto',minWidth: 70, 
          cellTemplate:"<img width=\"60px\" ng-src=\"img/{{grid.getCellValue(row, col)}}\" lazy-src>"
        },
        { field: 'correo', name: 'correo'},
        { field: 'tipo', name: 'tipo'
          ,filter: {
            // term: '1',
            type: uiGridConstants.filter.SELECT,
            selectOptions: [
              {value: 'comprador', label: 'Comprador'},
              {value: 'vendedor', label: 'Vendedor'},
              {value: 'administrador', label: 'Administrador'}
            ]
          }
          //filtro de los datos
          ,cellFilter: 'tipoUsuario'

        },
        { field: 'borrar', name: 'borrar'
          ,cellTemplate:'<button ng-click="grid.appScope.Borrar(row.entity)" class="btn btn-danger btn-sm"><i class="glyphicon glyphicon-trash">&nbsp;Borrar</i></button>'
          , enableFiltering: false
        },
        { field: 'modificar', name: 'modificar'
          ,cellTemplate:'<button ui-sref="modificarUsuarios({id:row.entity.id, nombre:row.entity.nombre, correo:row.entity.correo, clave:row.entity.clave, tipo:row.entity.tipo})" class="btn btn-warning btn-sm"><i class="glyphicon glyphicon-erase">&nbsp;Modificar</i></button>'
          , enableFiltering: false
        },
      ];
    }

})