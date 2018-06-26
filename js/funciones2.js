function galeria_imagenes(){
/*creamos una variabla para almacenar una colección de imagenes lo que se conoce como arreglo como todos los archivos tienen el mismo formato no se los coloco de lo contrario tendria que colocarlo, si se tratara de texto tendría que encerrar la palabra entre comillas ejemplo "casa" */
var imagenes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
var carta = ["APERITIVOS", "RECOMENDACION DEL CHEF", "ENTRADAS", "CEBICHES", "CHICHARRONES", "COMBINADOS MARINOS", "SOPAS", "ARROCES", "PESCADOS", "PASTAS", "POLLOS", "PLATOS CRIOLLOS", "COMBINADOS CRIOLLOS", "ENSALADAS", "ALL GRILL", "PLATOS DE FIN DE SEMANA", "GUARNICIONES", "PARRILLAS", "POSTRES", "CERVEZAS", "BEBIDAS"]

/*Creamos una variable y le asignamos el id del identidificador que le colocamos a la clase 
card-columns a través del DOM document.getElementById('galeria')*/
var galeria_total = "";


/*vamos a realizar un ciclo for para que repita una acción tantas veces se le indique, card va a contener todo lo que tiene la variable imagenes (arreglo) */
for(card of imagenes){

/*Vamos a insertar un condigo en HTML con la propiedad innerHTML del DOM, recuerda que galeria es el idetificador del div con la clase galeria que contiene todo el codigo de la card*/
/*importante las comillas invertidas nos permiten hacer una plantilla para agregar código HTML con el signo + antes del = estamos concatenando el código*/
    galeria_total += `    
            <div class="card">
                <a href="" data-toggle="modal" data-target="#id${card}">
                    <img src="img/${card}.jpg" alt="" class="card-img-top">
                </a>
                <div class="text-center"><h3>${carta[(card-1)]}</h3></div>
                  
                  <div class="modal fade" id="id${card}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
     
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                    	<div class="modal-content">
          							<div class="text-center bg-light"> 
          								<h1>${carta[(card-1)]}</h1>
          							</div>
          							<img src="img/${card}.jpg" alt="rio con puente" class="img-fluid rounded" />
          							<div class="text-center bg-light"> 
          								<button  class="btn btn-warning" onclick="ajax_get_json(${card})"><strong>Mostrar Menu</strong></button>
                          <div id="info${card}"></div>
                        </div>
                    	</div>	
                    </div>
					
                  </div>
            </div>
            `
            }
return galeria_total;         
}
document.getElementById("galeria").innerHTML = galeria_imagenes();


var resultado = [];
for (i = 1; i <= 21; i++){
  resultado[i] = document.getElementById("info"+i);
}


/*document.getElementById("info").innerHTML = ajax_get_json();*/

function ajax_get_json(tipo_item)
  {
   var xmlhttp;
    if(window.XMLHttpRequest){
      xmlhttp = new XMLHttpRequest();
    }
    else{
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
      if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            var datos = JSON.parse(xmlhttp.responseText);
            if(resultado[tipo_item].innerHTML === ""){
              
                for(var i in datos){
                  if (datos[i].tipo == tipo_item){
                    resultado[tipo_item].innerHTML += datos[i].item + " " + datos[i].descripcion_item + ".......... Precio US. Dollars: " + datos[i].precio_item + '<hr style="border-color:black">';
                  }
                }
              
            }
      }
    }

    xmlhttp.open("GET", "json/menu.json", true);
    xmlhttp.send();
    return resultado[tipo_item].innerHTML;
  }