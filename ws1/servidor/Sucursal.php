<?php
require_once"AccesoDatos.php";
class Sucursal
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $idSuc;
	public $nombre;
	public $direccion;
	public $localidad;
	public $lat;
	public $lng;
	public $telefono;
	public $encargado;
	public $foto1;
	public $foto2;
	public $foto3;
  	//public $codFoto1

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
  	public function GetIdSucursal()
	{
		return $this->idSuc;
	}
	public function GetNombre()
	{
		return $this->nombre;
	}
	public function GetDireccion()
	{
		return $this->direccion;
	}
	public function GetLocalidad()
	{
		return $this->localidad;
	}
	public function GetLat()
	{
		return $this->lat;
	}
	public function GetLng()
	{
		return $this->lng;
	}
	public function GetTelefono()
	{
		return $this->telefono;
	}
  	public function GetEncargado()
	{
		return $this->encargado;
	}
	public function GetFoto1()
	{
		return $this->foto1;
	}
	public function GetFoto2()
	{
		return $this->foto2;
	}
	public function GetFoto3()
	{
		return $this->foto3;
	}

	/*public function getCodFoto1)
	{
		return $this->codFoto1
	}*/


	public function SetIdSucursal($valor)
	{
		$this->idSuc = $valor;
	}
	public function SetNombre($valor)
	{
		$this->nombre = $valor;
	}
	public function SetDireccion($valor)
	{
		$this->direccion = $valor;
	}
	public function SetLocalidad($valor)
	{
		$this->localidad = $valor;
	}
	public function SetLat($valor)
	{
		$this->lat = $valor;
	}
	public function SetLng($valor)
	{
		$this->lng = $valor;
	}
	public function SetTelefono($valor)
	{
		$this->telefono = $valor;
	}
	public function SetEncargado($valor)
	{
		$this->encargado = $valor;
	}
	public function SetFoto1($valor)
	{
		$this->foto1= $valor;
	}
	public function SetFoto2($valor)
	{
		$this->foto2= $valor;
	}
	public function SetFoto3($valor)
	{
		$this->foto3= $valor;
	}

	/*public function SetCodFoto1$valor)
	{
		$this->codFoto1= $valor;
	}*/
//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	public function __construct($id=NULL)
	{
		if($id != NULL){
			$obj = Sucursal::TraerUnaSucursal($id);
			
			$this->nombre = $obj->nombre;
			$this->direccion = $obj->direccion;
			$this->localidad = $obj->localidad;
			$this->lat = $obj->lat;
			$this->lng = $obj->lng;
			$this->telefono = $obj->telefono;
			$this->encargado = $obj->encargado;
			$this->foto1 = $obj->foto1;
			$this->foto2 = $obj->foto2;
			$this->foto3 = $obj->foto3;
			//$this->codFoto1= $obj->codFoto1
		}
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->nombre."-".$this->direccion."-".$this->localidad."-".$this->lat."-".$this->lng."-".$this->telefono."-".$this->encargado."-".$this->foto1."-".$this->foto2."-".$this->foto3;
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnaSucursal($idParametro) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM sucursales WHERE idSuc=:idSuc");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");
		$consulta->bindValue(':idSuc', $idParametro, PDO::PARAM_INT);
		$consulta->execute();
		$sucursalBuscado= $consulta->fetchObject('sucursal');
		return $sucursalBuscado;	
					
	}
	
	public static function TraerTodasLasSucursales()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM sucursales ");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerTodasLasPersonas() ");
		$consulta->execute();			
		$arrSucursales= $consulta->fetchAll(PDO::FETCH_CLASS, "sucursal");	
		return $arrSucursales;
	}
	
	public static function BorrarSucursal($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("DELETE FROM sucursales WHERE idSuc=:idSuc");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL BorrarPersona(:id)");	
		$consulta->bindValue(':idSuc',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	
	public static function ModificarSucursal($sucursal)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				UPDATE sucursales 
				SET nombre=:nombre,
				direccion=:direccion,
				localidad=:localidad,
				lat=:lat,
				lng=:lng,
				telefono=:telefono,
				encargado=:encargado,
				foto1=:foto1,
				foto2=:foto2,
				foto3=:foto3
				WHERE idSuc=:idSuc");
			//$consulta =$objetoAccesoDato->RetornarConsulta("CALL Modificarsucursal(:id,:nombre,:nombre,:foto1,:foto1,:foto1)");
			$consulta->bindValue(':idSuc',$sucursal->idSuc, PDO::PARAM_INT);
			$consulta->bindValue(':nombre', $sucursal->nombre, PDO::PARAM_STR);
			$consulta->bindValue(':direccion', $sucursal->direccion, PDO::PARAM_STR);
			$consulta->bindValue(':localidad', $sucursal->localidad, PDO::PARAM_STR);
			$consulta->bindValue(':lat', $sucursal->lat, PDO::PARAM_STR);
			$consulta->bindValue(':lng', $sucursal->lng, PDO::PARAM_STR);
			$consulta->bindValue(':telefono', $sucursal->telefono, PDO::PARAM_STR);
			$consulta->bindValue(':encargado', $sucursal->encargado, PDO::PARAM_INT);
			$consulta->bindValue(':foto1', $sucursal->foto1, PDO::PARAM_STR);
			$consulta->bindValue(':foto2', $sucursal->foto2, PDO::PARAM_STR);
			$consulta->bindValue(':foto3', $sucursal->foto3, PDO::PARAM_STR);
			return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

	public static function InsertarSucursal($sucursal)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into sucursales (nombre,direccion,localidad,lat,lng,telefono,encargado,foto1,foto2,foto3) values(:nombre,:direccion,:localidad,:lat,:lng,:telefono,:encargado,:foto1,:foto2,:foto3)");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL Insertarsucursal (:nombre,:nombre,:dni,:foto1,:foto1,:foto1,:codFoto1");
		$consulta->bindValue(':nombre', $sucursal->nombre, PDO::PARAM_STR);
		$consulta->bindValue(':direccion', $sucursal->direccion, PDO::PARAM_STR);
		$consulta->bindValue(':localidad', $sucursal->localidad, PDO::PARAM_STR);
		$consulta->bindValue(':lat', $sucursal->lat, PDO::PARAM_STR);
		$consulta->bindValue(':lng', $sucursal->lng, PDO::PARAM_STR);
		$consulta->bindValue(':telefono', $sucursal->telefono, PDO::PARAM_STR);
		$consulta->bindValue(':encargado', $sucursal->encargado, PDO::PARAM_INT);
		$consulta->bindValue(':foto1', $sucursal->foto1, PDO::PARAM_STR);
		$consulta->bindValue(':foto2', $sucursal->foto2, PDO::PARAM_STR);
		$consulta->bindValue(':foto3', $sucursal->foto3, PDO::PARAM_STR);
		//$consulta->bindValue(':codFoto1, $sucursal->codFoto1 PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//


}
