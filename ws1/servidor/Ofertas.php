<?php
require_once"AccesoDatos.php";
class Oferta
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $idOfer;
	public $idProd;
	public $idSuc;
	public $fechaFin;
	public $descuento;
  	//public $codFoto1

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
  	public function GetIdOferta()
	{
		return $this->idOfer;
	}
  	public function GetIdProducto()
	{
		return $this->idProd;
	}
  	public function GetIdSucursal()
	{
		return $this->idSuc;
	}
	public function GetFechaFin()
	{
		return $this->fechaFin;
	}
	public function GetDescuento()
	{
		return $this->descuento;
	}

	/*public function getCodFoto1)
	{
		return $this->codFoto1
	}*/


	public function SetIdOferta($valor)
	{
		$this->idOfer = $valor;
	}
	public function SetIdProducto($valor)
	{
		$this->idProd = $valor;
	}
	public function SetIdSucursal($valor)
	{
		$this->idSuc = $valor;
	}
	public function SetFechaFin($valor)
	{
		$this->fechaFin = $valor;
	}
	public function SetDescuento($valor)
	{
		$this->descuento = $valor;
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
			$obj = oferta::TraerUnaoferta($id);
			
			$this->idProd = $obj->idProd;
			$this->idSuc = $obj->idSuc;
			$this->fechaFin = $obj->fechaFin;
			$this->descuento = $obj->descuento;
			//$this->codFoto1= $obj->codFoto1
		}
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->idProd."-".$this->idSuc."-".$this->fechaFin."-".$this->descuento;
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnaOferta($idParametro) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM ofertas WHERE idOfer=:idOfer");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");
		$consulta->bindValue(':idOfer', $idParametro, PDO::PARAM_INT);
		$consulta->execute();
		$ofertaBuscada= $consulta->fetchObject('oferta');
		return $ofertaBuscada;	
					
	}
	
	public static function TraerTodasLasOfertas()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM ofertas ");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerTodasLasPersonas() ");
		$consulta->execute();			
		$arrOfertas= $consulta->fetchAll(PDO::FETCH_CLASS, "oferta");	
		return $arrOfertas;
	}
	
	public static function BorrarOferta($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("DELETE FROM ofertas WHERE idOfer=:idOfer");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL BorrarPersona(:id)");	
		$consulta->bindValue(':idOfer',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	
	public static function ModificarOferta($oferta)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				UPDATE ofertas 
				SET idProd=:idProd,
				idSuc=:idSuc,
				fechaFin=:fechaFin,
				descuento=:descuento
				WHERE idOfer=:idOfer");
			$consulta->bindValue(':idOfer',$oferta->idOfer, PDO::PARAM_INT);
			$consulta->bindValue(':idProd', $oferta->idProd, PDO::PARAM_INT);
			$consulta->bindValue(':idSuc', $oferta->idSuc, PDO::PARAM_INT);
			$consulta->bindValue(':fechaFin', $oferta->fechaFin, PDO::PARAM_STR);
			$consulta->bindValue(':descuento', $oferta->descuento, PDO::PARAM_INT);
			return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

	public static function InsertarOferta($oferta)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into ofertas (idProd,idSuc,fechaFin,descuento) values(:idProd,:idSuc,:fechaFin,:descuento)");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL Insertaroferta (:nombre,:nombre,:dni,:foto1,:foto1,:foto1,:codFoto1");
		$consulta->bindValue(':idProd', $oferta->idProd, PDO::PARAM_INT);
		$consulta->bindValue(':idSuc', $oferta->idSuc, PDO::PARAM_INT);
		$consulta->bindValue(':fechaFin', $oferta->fechaFin, PDO::PARAM_STR);
		$consulta->bindValue(':descuento', $oferta->descuento, PDO::PARAM_INT);
		//$consulta->bindValue(':codFoto1, $oferta->codFoto1 PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//


}
