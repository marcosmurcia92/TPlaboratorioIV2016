<?php
require_once"AccesoDatos.php";
class Inventario
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $idInv;
	public $idProd;
	public $idSuc;
  	//public $codFoto1

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
  	public function GetIdInventario()
	{
		return $this->idInv;
	}
  	public function GetIdProducto()
	{
		return $this->idProd;
	}
  	public function GetIdSucursal()
	{
		return $this->idSuc;
	}

	/*public function getCodFoto1)
	{
		return $this->codFoto1
	}*/


	public function SetIdInventario($valor)
	{
		$this->idInv = $valor;
	}
	public function SetIdProducto($valor)
	{
		$this->idProd = $valor;
	}
	public function SetIdSucursal($valor)
	{
		$this->idSuc = $valor;
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
			$obj = Inventario::TraerUnInventario($id);
			
			$this->idProd = $obj->idProd;
			$this->idSuc = $obj->idSuc;
			//$this->codFoto1= $obj->codFoto1
		}
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->idProd."-".$this->idSuc;
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnInventario($idParametro) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM inventarios WHERE idInv=:idInv");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");
		$consulta->bindValue(':idInv', $idParametro, PDO::PARAM_INT);
		$consulta->execute();
		$inventarioBuscado= $consulta->fetchObject('inventario');
		return $inventarioBuscado;	
					
	}

	public static function TraerUnInventarioPorIds($idProducto,$idSucursal) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM inventarios WHERE idProd=:idProd AND idSuc=:idSuc");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");
		$consulta->bindValue(':idProd', $idProducto, PDO::PARAM_INT);
		$consulta->bindValue(':idSuc', $idSucursal, PDO::PARAM_INT);
		$consulta->execute();
		$inventarioBuscado = $consulta->fetchObject('inventario');
		return $inventarioBuscado;	
					
	}
	
	public static function TraerTodosLosInventarios()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM inventarios ");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerTodasLasPersonas() ");
		$consulta->execute();			
		$arrInventarios= $consulta->fetchAll(PDO::FETCH_CLASS, "inventario");	
		return $arrInventarios;
	}

	public static function TraerTodosLosInventariosDeSucursal($idSucursal)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM inventarios WHERE idSuc=:idSuc");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerTodasLasPersonas() ");
		$consulta->bindValue(':idSuc', $idSucursal, PDO::PARAM_INT);
		$consulta->execute();			
		$arrInventarios= $consulta->fetchAll(PDO::FETCH_CLASS, "inventario");	
		return $arrInventarios;
	}

	public static function TraerTodosLosInventariosDeProducto($idProducto)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM inventarios WHERE idProd=:idProd");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerTodasLasPersonas() ");
		$consulta->bindValue(':idProd', $idProducto, PDO::PARAM_INT);
		$consulta->execute();			
		$arrInventarios= $consulta->fetchAll(PDO::FETCH_CLASS, "inventario");	
		return $arrInventarios;
	}
	
	public static function BorrarInventario($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("DELETE FROM inventarios WHERE idInv=:idInv");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL BorrarPersona(:id)");	
		$consulta->bindValue(':idInv',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	
	public static function ModificarInventario($inventario)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				UPDATE inventarios 
				SET idProd=:idProd,
				idSuc=:idSuc
				WHERE idInv=:idInv");
			$consulta->bindValue(':idInv',$inventario->idInv, PDO::PARAM_INT);
			$consulta->bindValue(':idProd', $inventario->idProd, PDO::PARAM_INT);
			$consulta->bindValue(':idSuc', $inventario->idSuc, PDO::PARAM_INT);
			$consulta->bindValue(':fechaFin', $inventario->fechaFin, PDO::PARAM_STR);
			$consulta->bindValue(':descuento', $inventario->descuento, PDO::PARAM_INT);
			return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

	public static function InsertarInventario($inventario)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into inventarios (idProd,idSuc) values(:idProd,:idSuc)");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL Insertaroferta (:nombre,:nombre,:dni,:foto1,:foto1,:foto1,:codFoto1");
		$consulta->bindValue(':idProd', $inventario->idProd, PDO::PARAM_INT);
		$consulta->bindValue(':idSuc', $inventario->idSuc, PDO::PARAM_INT);
		//$consulta->bindValue(':codFoto1, $inventario->codFoto1 PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//


}
