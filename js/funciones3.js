function validar(){
	var nombre, apellidos, correo, telefono, expesion;
	nombre = document.getElementById("nombre").value;
	apellidos = document.getElementById("apellidos").value;
	correo = document.getElementById("correo").value;
	telefono = document.getElementById("telefono").value;
 
/*  El simbolo  | se crea en codigo asccii con alt+124 */

	expresion = /\w+@\w+\.+[a-z]/;


	if(nombre === "" || apellidos === "" || correo === "" || telefono === "" ){
		alert("Todos los campos son obligatorios");
		return false;
	}

	else if(nombre.length>30){
		alert("El nombre es muy largo");
		return false;		
	}

	else if(apellidos.length>80){
		alert("Los apellidos son muy largo");
		return false;		
	}

	else if(correo.length>100){
		alert("El correo es muy largo");
		return false;		
	}

	else if(!expresion.test(correo)){
		alert('El correo no es valido');
		return false;
	}

	else if(telefono.length>11){
		alert("El teléfono es muy largo");
		return false;		
	}

	else if(isNaN.(telefono)) {
		alert("El teléfono ingresado no es un numero");
		return false;		
	}


}