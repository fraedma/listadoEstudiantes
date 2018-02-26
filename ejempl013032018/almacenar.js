var boton = document.getElementById('guardar');
 boton.addEventListener('click',almacenar, false);

 var lista = document.getElementById('listado');
 lista.addEventListener('click',listado, false);



  

var alumno = new estudiantes();

function almacenar()
{
      var nombre = document.getElementById("nombre");
      var apellidos= document.getElementById("apellidos");
      var edad = document.getElementById("edad");
      var profesion = document.getElementById("profesion");
      var ciudad = document.getElementById("ciudad");
      var nota1 = document.getElementById("nota1");
      var nota2 = document.getElementById("nota2");

       var objeto=new persona(nombre.value,apellidos.value,edad.value,profesion.value,ciudad.value,nota1.value,nota2.value);
       alumno.put_listEst(objeto);


    alert("Alumno almacenado");

    
     
    nombre.value=" ";
    apellidos.value=" ";
    edad.value=" ";
    profesion.value=" ";
    ciudad.value=" ";
    profesion.value=" ";
    nota1.value=" ";
    nota2.value=" ";
    


 }

function listado()
 {
    var padre = document.getElementById("tbody");
    padre.innerHTML="";
   var n = alumno.get_n_listEst();
   
   for(var x=0;x<n;x++)
   {
     
      var obj_alumno = alumno.get_listEsts(x);
      
      var fila = document.createElement("tr"); 
      
      var celda =document.createElement("td"); 
      var texto = document.createElement("p");
      texto.innerHTML = obj_alumno.get_nombre();
      celda.appendChild(texto);
      fila.appendChild(celda);
      
      var celda =document.createElement("td"); 
      var texto = document.createElement("p");
      texto.innerHTML = obj_alumno.get_apellidos();
      celda.appendChild(texto);
      fila.appendChild(celda);
      
      var celda =document.createElement("td"); 
      var texto = document.createElement("p");
      texto.innerHTML = obj_alumno.get_edad();
      celda.appendChild(texto);
      fila.appendChild(celda);
      
      var celda =document.createElement("td"); 
      var texto = document.createElement("p");
      texto.innerHTML = obj_alumno.get_profesion();
      celda.appendChild(texto);
      fila.appendChild(celda);
      
      var celda =document.createElement("td"); 
      var texto = document.createElement("p");
      texto.innerHTML = obj_alumno.get_ciudad();
      celda.appendChild(texto);
      fila.appendChild(celda);
            
	var celda =document.createElement("td"); 
	          var texto = document.createElement("p");
	          texto.innerHTML = obj_alumno.get_nota1();
	          celda.appendChild(texto);
	          fila.appendChild(celda);
		  
	var celda =document.createElement("td"); 
	          var texto = document.createElement("p");
	          texto.innerHTML = obj_alumno.get_nota2();
	          celda.appendChild(texto);
	          fila.appendChild(celda);
	
  var celda =document.createElement("td"); 
            var texto = document.createElement("p");
            texto.innerHTML = obj_alumno.notafinal();
            celda.appendChild(texto);
            fila.appendChild(celda);  
      
      padre.appendChild(fila);
      
   }

  }

 /*function procesar()
 {
   nomina. procesamiento();
   alert("Los trabajadores han sido liquidados");
 } */
