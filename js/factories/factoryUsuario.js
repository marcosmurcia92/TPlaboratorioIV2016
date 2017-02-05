angular
	.module('app')
	.factory('UsuarioActual', [function(){

		var id = "";
		var nombre = "";
		var email = "";
		var cargo = "";

		return {

			login:function(userId,name,mail,job){

				id = userId;
				nombre = name;
				email = mail;
				cargo = job;

			},getId:function(){
				return id;
			},getName:function(){
				return nombre;
			},getEmail:function(){
				return email;
			},getCargo:function(){
				return cargo;
			},getFullData:function(){
				var jsonUsuario = {};
				jsonUsuario.id = id;
				jsonUsuario.nombre = nombre;
				jsonUsuario.email = email;
				jsonUsuario.cargo = cargo;

				return JSON.stringify(jsonUsuario);
			}

		};

	}])