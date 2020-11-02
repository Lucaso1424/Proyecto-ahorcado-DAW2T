alert("Bienvenido");
// CREAMOS UN BOTON, COMO REFERENCIA DEL BOTON DE HTML
let primero = null; // NO SE PORQUE ES NULO


let boton = document.getElementById("abrir");


boton.addEventListener("click", abrir);
// FUNCION ADD EVENT LISTENER QUE CUANDO EL BOTÓN RECIBA UN CLICK, POR ESO GENERAMOS EL LET, ENTONCES EN EL 


document.getElementById("cerrar").addEventListener("click", cerrar)
// ABRIR VENTANAS EMERGENTES DE DIFERENTES ARCHIVOS DE PÁGINA, DONDE CREAMOS ESO EN UNA FUNCION

function abrir() {
// SE HACE CON LA ETIQUETA WINDOW.OPEN
primero =  window.open("../ventanas/primera_ventana.html", "primero", "top=20, left=700, width=400, height=200");
segundo =  window.open("../ventanas/segunda_ventana.html", "segundo", "top=285, left=700, width=400, height=200");
tercero =  window.open("../ventanas/tercera_ventana.html", "tercero", "top=800, left=700, width=400, height=200");
}

// CREAMOS OTRA FUNCION PARA CERRAR LA VENTANA
function cerrar() {
    primero.close();
    segundo.close();
    tercero.close();

}

document.getElementById("foto").addEventListener("click", foto)
// FUNCION ADD EVENT LISTENER QUE CUANDO EL BOTÓN RECIBA UN CLICK, POR ESO GENERAMOS EL LET, ENTONCES EN EL 

function foto(){
   document.getElementById("img1").src= "../img/Foto1.png";
}