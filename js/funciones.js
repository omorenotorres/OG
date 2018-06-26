function devuelve_mes(){
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	var mes = new Date().getMonth();
	var d = "<strong>Promociones del mes: " + meses[mes] + " del año: " + new Date().getFullYear() + "</strong>";
	return d;
}
document.getElementById("promociones").innerHTML = devuelve_mes();
