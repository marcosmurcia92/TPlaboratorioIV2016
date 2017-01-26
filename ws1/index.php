<?php
use Slim\Http\Headers;
header('Content-Type: image/jpeg');
include_once('servidor/Usuarios.php');
include_once('servidor/Productos.php');


require 'vendor/autoload.php';



$app = new Slim\App(['settings' => ['displayErrorDetails' => true]]);

$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost:8000/Murcia.SPLab42016/')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});

$app->get('/', function ($request, $response, $args) {
    $response->write("Welcome to Slim!");
    return $response;
});

$app->get('/productos[/]', function ($request, $response, $args) {
    $datos = Producto::TraerTodosLosProductos();
    $response->write(json_encode($datos)); 
    
    return $response;
});

$app->get('/usuarios[/]', function ($request, $response, $args) {
    
    $datos = Usuario::TraerTodosLosUsuarios();
    $response->write(json_encode($datos));

    return $response;
});

$app->post('/productos/{objeto}', function ($request, $response, $args) {
    $producto = json_decode($args['objeto']);

    Producto::InsertarProducto($producto);
    
    $response->write($args['objeto']);
});


$app->post('/usuarios/{objeto}', function ($request, $response, $args) {

    $usuario = json_decode($args['objeto']);

    Usuario::InsertarUsuario($usuario);
    
    $response->write($args['objeto']);
}); 


$app->put('/usuarios/{objeto}', function ($request, $response, $args) {

    $usuario = json_decode($args['objeto']);

    
    Usuario::ModificarUsuario($usuario);
    
    $response->write($args['objeto']);
});


$app->delete('/productos/{id}', function ($request, $response, $args) {
    Producto::BorrarProducto($args['id']);
    return $response;
});

$app->delete('/usuarios/{id}', function ($request, $response, $args) {
    Usuario::BorrarUsuario($args['id']);
    return $response;
});


$app->run();
