angular
  .module('app')
  .factory('factoryRutas', function (){
  	var objeto = {};

    objeto.nombre = "Factory de rutas";

    objeto.RutaOfertas = 'http://localhost:8000/TPFinalLab4_Murcia/ws1/ofertas/';

    objeto.RutaPedidos = 'http://localhost:8000/TPFinalLab4_Murcia/ws1/pedidos/';

    objeto.RutaProductos = 'http://localhost:8000/TPFinalLab4_Murcia/ws1/productos/';

    objeto.RutaSucursales = 'http://localhost:8000/TPFinalLab4_Murcia/ws1/sucursales/';

    objeto.RutaUsuarios = 'http://localhost:8000/TPFinalLab4_Murcia/ws1/usuarios/';

    objeto.RutaFotos = 'http://localhost:8000/TPFinalLab4_Murcia/ws1/servidor/nexoFoto.php';

    return objeto;


    
  })