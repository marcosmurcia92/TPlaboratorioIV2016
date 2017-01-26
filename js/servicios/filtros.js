angular.module('app')
  .filter('tipoUsuario', function () {
    var tipo = {
      'comprador': 'Comprador',
      'vendedor': 'Vendedor',
      'administrador': 'Administrador'
    }
    return function (input) {
      if (!input)
        return '';
      return tipo[input];
    };
  });
