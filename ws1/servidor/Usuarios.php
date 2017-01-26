<?php
require_once"AccesoDatos.php";
class Usuario
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $idUsu;
	public $nombre;
  	public $email;
  	public $clave;
  	public $cargo;

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS
  	public function GetIdUsuario()
	{
		return $this->idUsu;
	}
	public function GetNombre()
	{
		return $this->nombre;
	}
	public function GetEmail()
	{
		return $this->email;
	}
	public function GetClave()
	{
		return $this->clave;
	}
	public function GetCargo()
	{
		return $this->cargo;
	}

	// public function getFoto()
	// {
	// 	return $this->foto;
	// }


	public function SetIdUsuario($valor)
	{
		$this->idUsu = $valor;
	}
	public function SetNombre($valor)
	{
		$this->nombre = $valor;
	}
	public function SetEmail($valor)
	{
		$this->email = $valor;
	}
	public function SetClave($valor)
	{
		$this->clave = $valor;
	}
	public function SetCargo($valor)
	{
		$this->cargo = $valor;
	}

	// public function SetFoto($valor)
	// {
	// 	$this->foto = $valor;
	// }
//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	public function __construct($idUsu=NULL)
	{
		if($idUsu != NULL){
			$obj = Usuario::TraerUnUsuario($idUsu);
			
			$this->nombre = $obj->nombre;
			$this->email = $obj->email;
			$this->clave = $obj->clave;
			$this->cargo = $obj->cargo;
		}
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->nombre."-".$this->email."-".$this->clave."-".$this->cargo;
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnUsuario($idParametro) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM usuarios WHERE idUsu=:idUsu");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");
		$consulta->bindValue(':idUsu', $idParametro, PDO::PARAM_INT);
		$consulta->execute();
		$usuarioBuscado= $consulta->fetchObject('usuario');
		return $usuarioBuscado;	
					
	}
	
	public static function TraerTodosLosUsuarios()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM usuarios ");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerTodasLasPersonas() ");
		$consulta->execute();			
		$arrUsuarios= $consulta->fetchAll(PDO::FETCH_CLASS, "usuario");	
		return $arrUsuarios;
	}

	public static function AutenticarUsuario($mailUsuario, $nombreUsuario, $claveUsuario)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("SELECT * FROM usuarios WHERE email=:email AND nombre=:nombre AND clave=:clave");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerTodasLasPersonas() ");
		$consulta->bindValue(':email', $mailUsuario, PDO::PARAM_STR);
		$consulta->bindValue(':nombre', $nombreUsuario, PDO::PARAM_STR);
		$consulta->bindValue(':clave', $claveUsuario, PDO::PARAM_STR);
		$consulta->execute();			
		$usuarioBuscado= $consulta->fetchObject('usuario');
		return $usuarioBuscado;	
	}
	
	public static function BorrarUsuario($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("DELETE FROM usuarios WHERE idUsu=:idUsu");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL BorrarPersona(:id)");	
		$consulta->bindValue(':idUsu',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	
	public static function ModificarUsuario($usuario)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				UPDATE usuarios 
				SET nombre=:nombre,
				email=:email,
				clave=:clave,
				cargo=:cargo
				WHERE idUsu=:idUsu");
			//$consulta =$objetoAccesoDato->RetornarConsulta("CALL ModificarUsuario(:id,:nombre,:nombre,:email,:clave,:cargo)");
			$consulta->bindValue(':idUsu',$usuario->idUsu, PDO::PARAM_INT);
			$consulta->bindValue(':nombre', $usuario->nombre, PDO::PARAM_STR);
			$consulta->bindValue(':email', $usuario->email, PDO::PARAM_STR);
			$consulta->bindValue(':clave', $usuario->clave, PDO::PARAM_STR);
			$consulta->bindValue(':cargo', $usuario->cargo, PDO::PARAM_STR);
			//$consulta->bindValue(':foto', $usuario->foto, PDO::PARAM_STR);
			return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

	public static function InsertarUsuario($usuario)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("INSERT into usuarios (nombre,email,nombre,clave,cargo) values(:nombre,:email,:clave,:cargo)");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL InsertarUsuario (:nombre,:nombre,:dni,:email,:clave,:cargo,:codFoto)");
		$consulta->bindValue(':nombre', $usuario->nombre, PDO::PARAM_STR);
		$consulta->bindValue(':email', $usuario->email, PDO::PARAM_STR);
		$consulta->bindValue(':clave', $usuario->clave, PDO::PARAM_STR);
		$consulta->bindValue(':cargo', $usuario->cargo, PDO::PARAM_STR);
		//$consulta->bindValue(':foto', $usuario->foto, PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//


}