<?php
require_once"AccesoDatos.php";
class Producto
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $id;
	public $nombre;
	public $porcentaje;
  	//public $codFoto;

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
  	public function GetIdProducto()
	{
		return $this->id;
	}
	public function GetNombre()
	{
		return $this->nombre;
	}
	public function GetPorcentaje()
	{
		return $this->porcentaje;
	}

	/*public function getCodFoto()
	{
		return $this->codFoto;
	}*/


	public function SetIdProducto($valor)
	{
		$this->id = $valor;
	}
	public function SetNombre($valor)
	{
		$this->nombre = $valor;
	}
	public function SetPorcentaje($valor)
	{
		$this->porcentaje = $valor;
	}

	/*public function SetCodFoto($valor)
	{
		$this->codFoto = $valor;
	}*/
//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	public function __construct($id=NULL)
	{
		if($id != NULL){
			$obj = Producto::TraerUnProducto($id);
			
			$this->nombre = $obj->nombre;
			$this->porcentaje = $obj->porcentaje;;
			//$this->codFoto = $obj->codFoto;
		}
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->nombre."-".$this->porcentaje;
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnProducto($idParametro) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM misproductos WHERE id=:id");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");
		$consulta->bindValue(':id', $idParametro, PDO::PARAM_INT);
		$consulta->execute();
		$productoBuscado= $consulta->fetchObject('producto');
		return $productoBuscado;	
					
	}
	
	public static function TraerTodosLosProductos()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM misproductos ");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerTodasLasPersonas() ");
		$consulta->execute();			
		$arrProductos= $consulta->fetchAll(PDO::FETCH_CLASS, "producto");	
		return $arrProductos;
	}
	
	public static function BorrarProducto($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("DELETE FROM misproductos WHERE id=:id");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL BorrarPersona(:id)");	
		$consulta->bindValue(':id',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	
	public static function ModificarProducto($producto)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				UPDATE misproductos 
				SET nombre=:nombre,
				porcentaje=:porcentaje
				WHERE id=:id");
			//$consulta =$objetoAccesoDato->RetornarConsulta("CALL ModificarProducto(:id,:nombre,:nombre,:foto1,:foto2,:foto3)");
			$consulta->bindValue(':id',$producto->id, PDO::PARAM_INT);
			$consulta->bindValue(':nombre', $producto->nombre, PDO::PARAM_STR);
			$consulta->bindValue(':porcentaje', $producto->porcentaje, PDO::PARAM_STR);
			return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

	public static function InsertarProducto($producto)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into misproductos (nombre,porcentaje)values(:nombre,:porcentaje)");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL InsertarProducto (:nombre,:nombre,:dni,:foto1,:foto2,:foto3,:codFoto)");
		$consulta->bindValue(':nombre', $producto->nombre, PDO::PARAM_STR);
		$consulta->bindValue(':porcentaje', $producto->porcentaje, PDO::PARAM_STR);
		//$consulta->bindValue(':codFoto', $producto->codFoto, PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//


}
