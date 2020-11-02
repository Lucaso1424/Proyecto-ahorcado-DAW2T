// CREAMOS UN BOTON, COMO REFERENCIA DEL BOTON DE HTML
let primero = null;


let boton = document.getElementById("abrir");


boton.addEventListener("click", abrir);
// FUNCION ADD EVENT LISTENER QUE CUANDO EL BOTÓN RECIBA UN CLICK, POR ESO GENERAMOS EL LET


document.getElementById("cerrar").addEventListener("click", cerrar)
// ABRIR VENTANAS EMERGENTES DE DIFERENTES ARCHIVOS DE PÁGINA, DONDE CREAMOS ESO EN UNA FUNCION

function abrir() {
    // SE HACE CON LA ETIQUETA WINDOW.OPEN
    primero = window.open("../ventanas/primera_ventana.html", "primero", "top=20, left=700, width=400, height=200");
    segundo = window.open("../ventanas/segunda_ventana.html", "segundo", "top=285, left=700, width=400, height=200");
    tercero = window.open("../ventanas/tercera_ventana.html", "tercero", "top=800, left=700, width=400, height=200");
}

// CREAMOS OTRA FUNCION PARA CERRAR LA VENTANA
function cerrar() {
    primero.close();
    segundo.close();
    tercero.close();
}


// FUNCION QUE RECARGA LA PAGINA PARA EMPEZAR LA PARTIDA DE NUEVO A PARTIR DE UN INTERVALO DE 5 SEGUNDOS8
function abandonar_partida() {
    location.reload(true)
}

// FUNCION ADD EVENT LISTENER QUE CUANDO EL BOTÓN RECIBA UN CLICK, POR ESO GENERAMOS EL LET 

function foto() {
    for (var i = 0; i < 6; i++) {
        document.getElementById("img0").src = '/img/Foto' + i + '.png';
    }
}

function Array() {
    var palabrasUsuario;

    palabrasUsuario = prompt("Introduce 5 palabras para adivinar en el juego del ahorcado:").split(",");

    if (palabrasUsuario == "") {
        palabrasUsuario = ["patata", "elefante", "gundam", "auriculares", "ordenador"]
    }

    console.log(palabrasUsuario);
    
    // LO DEJAMOS GUARDADO EN UNA CONSTANTE
    const random = Math.floor(Math.random() * palabrasUsuario.length);
    console.log(random, palabrasUsuario[random]);
}

Array();