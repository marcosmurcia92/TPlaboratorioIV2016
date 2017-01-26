angular
	.module('app')
	.factory('UsuarioActual', [function(){

		var nombre = "";
		var email = "";
		var tipo = "";
		var foto = "";

		return {

			login:function(name,mail,type,photo){

				nombre = name;
				email = mail;
				tipo = type;
				foto = photo;

			},getName:function(){
				return nombre;
			},getEmail:function(){
				return email;
			},getTipo:function(){
				return tipo;
			},getFoto:function(){
				return foto;
			},getFullData:function(){
				var jsonUsuario = {};
				jsonUsuario.nombre = nombre;
				jsonUsuario.email = email;
				jsonUsuario.tipo = tipo;
				jsonUsuario.foto = foto;

				return JSON.stringify(jsonUsuario);
			}

		};

	}])