<?php
require_once"AccesoDatos.php";
class Pedido
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $idPed;
	public $idProd;
	public $idSuc;
	public $idCliente;
	public $monto;
	public $fechaPedido;
	public $cantPedida;
	public $estado;
  	//public $codFoto1

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
  	public function GetIdPedido()
	{
		return $this->idPed;
	}
  	public function GetIdProducto()
	{
		return $this->idProd;
	}
  	public function GetIdSucursal()
	{
		return $this->idSuc;
	}
	public function GetIdCliente()
	{
		return $this->idCliente;
	}
	public function GetMonto()
	{
		return $this->monto;
	}
	public function GetFechaPedido()
	{
		return $this->fechaPedido;
	}
	public function GetCantPedida()
	{
		return $this->cantPedida;
	}
	public function GetEstado()
	{
		return $this->estado;
	}

	/*public function getCodFoto1)
	{
		return $this->codFoto1
	}*/


	public function SetIdPedido($valor)
	{
		$this->idPed = $valor;
	}
	public function SetIdProducto($valor)
	{
		$this->idProd = $valor;
	}
	public function SetIdSucursal($valor)
	{
		$this->idSuc = $valor;
	}
	public function SetIdCliente($valor)
	{
		$this->idCliente = $valor;
	}
	public function SetMonto($valor)
	{
		$this->monto = $valor;
	}
	public function SetFechaPedido($valor)
	{
		$this->fechaPedido = $valor;
	}
	public function SetCantPedida($valor)
	{
		$this->cantPedida= $valor;
	}
	public function SetEstado($valor)
	{
		$this->estado= $valor;
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
			$obj = pedido::TraerUnapedido($id);
			
			$this->idProd = $obj->idProd;
			$this->idSuc = $obj->idSuc;
			$this->idCliente = $obj->idCliente;
			$this->monto = $obj->monto;
			$this->fechaPedido = $obj->fechaPedido;
			$this->cantPedida = $obj->cantPedida;
			$this->estado = $obj->estado;
			//$this->codFoto1= $obj->codFoto1
		}
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->idProd."-".$this->idSuc."-".$this->idCliente."-".$this->monto."-".$this->fechaPedido."-".$this->cantPedida."-".$this->estado;
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnPedido($idParametro) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM pedidos WHERE idPed=:idPed");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");
		$consulta->bindValue(':idPed', $idParametro, PDO::PARAM_INT);
		$consulta->execute();
		$pedidoBuscado= $consulta->fetchObject('pedido');
		return $pedidoBuscado;	
					
	}
	
	public static function TraerTodosLosPedidos()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM pedidos ");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerTodasLasPersonas() ");
		$consulta->execute();			
		$arrpedidoes= $consulta->fetchAll(PDO::FETCH_CLASS, "pedido");	
		return $arrpedidoes;
	}
	
	public static function BorrarPedido($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("DELETE FROM pedidos WHERE idPed=:idPed");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL BorrarPersona(:id)");	
		$consulta->bindValue(':idPed',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	
	public static function ModificarPedido($pedido)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				UPDATE pedidos 
				SET idProd=:idProd,
				idSuc=:idSuc,
				idCliente=:idCliente,
				monto=:monto,
				fechaPedido=:fechaPedido,
				cantPedida=:cantPedida,
				estado=:estado
				WHERE idPed=:idPed");
			$consulta->bindValue(':idPed',$pedido->idPed, PDO::PARAM_INT);
			$consulta->bindValue(':idProd', $pedido->idProd, PDO::PARAM_INT);
			$consulta->bindValue(':idSuc', $pedido->idSuc, PDO::PARAM_INT);
			$consulta->bindValue(':idCliente', $pedido->idCliente, PDO::PARAM_INT);
			$consulta->bindValue(':monto', $pedido->monto, PDO::PARAM_INT);
			$consulta->bindValue(':fechaPedido', $pedido->fechaPedido, PDO::PARAM_STR);
			$consulta->bindValue(':cantPedida', $pedido->cantPedida, PDO::PARAM_STR);
			$consulta->bindValue(':estado', $pedido->estado, PDO::PARAM_STR);
			return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

	public static function InsertarPedido($pedido)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into pedidos (idProd,idSuc,idCliente,monto,fechaPedido,cantPedida,estado) values(:idProd,:idSuc,:idCliente,:monto,:fechaPedido,:cantPedida,:estado)");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL Insertarpedido (:nombre,:nombre,:dni,:foto1,:foto1,:foto1,:codFoto1");
		$consulta->bindValue(':idProd', $pedido->idProd, PDO::PARAM_INT);
		$consulta->bindValue(':idSuc', $pedido->idSuc, PDO::PARAM_INT);
		$consulta->bindValue(':idCliente', $pedido->idCliente, PDO::PARAM_INT);
		$consulta->bindValue(':monto', $pedido->monto, PDO::PARAM_INT);
		$consulta->bindValue(':fechaPedido', $pedido->fechaPedido, PDO::PARAM_STR);
		$consulta->bindValue(':cantPedida', $pedido->cantPedida, PDO::PARAM_STR);
		$consulta->bindValue(':estado', $pedido->estado, PDO::PARAM_STR);
		//$consulta->bindValue(':codFoto1, $pedido->codFoto1 PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//


}
