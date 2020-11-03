// CREAMOS UN BOTON, COMO REFERENCIA DEL BOTON DE HTML
let primero = null;
var palabrasUsuario;
var texto;
var random;

let boton = document.getElementById("abrir");

// CREAMOS UNA FUNCIÓN PARA INTRODUCIR LOS PARÁMETROS DE LAS PALABRAS E INICIAR EL JUEGO DIRECTAMENTE 
function iniciar_juego() {
    palabrasUsuario = prompt("Introduce 5 palabras para adivinar en el juego del ahorcado:").split(",");
}

// INICIAMOS EL JUEGO CON WINDOW.ONLOAD LLAMANDO A LA FUNCION DE INICIO DEL JUEGO
window.onload = iniciar_juego();


// FUNCION ADD EVENT LISTENER QUE CUANDO EL BOTÓN RECIBA UN CLICK, POR ESO GENERAMOS EL LET
document.getElementById("cerrar").addEventListener("click", cerrar);

// ABRIR VENTANAS EMERGENTES DE DIFERENTES ARCHIVOS DE PÁGINA, DONDE CREAMOS ESO EN UNA FUNCION

function abrir() {
    // SE HACE CON LA ETIQUETA WINDOW.OPEN
    primero = window.open("../ventanas/primera_ventana.html", "primero", "top=20, left=700, width=400, height=200");
    segundo = window.open("../ventanas/segunda_ventana.html", "segundo", "top=285, left=700, width=400, height=200");
    tercero = window.open("../ventanas/tercera_ventana.html", "tercero", "top=800, left=700, width=400, height=200");
}

window.onload = abrir();

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
    for (var i = 0; i < 7; i++) {
        document.getElementById("img0").src = '/img/Foto' + i + '.png';
    }
}

function Array() {
    if (palabrasUsuario == "") {
        palabrasUsuario = ["patata", "elefante", "gundam", "auriculares", "ordenador"]
    }

    console.log(palabrasUsuario);
}

// RANDOMIZA LA PALABRA DEL ARRAY
function getRandom() {
    random = parseInt(Math.random() * palabrasUsuario.length);
    texto = palabrasUsuario[random];
    console.log(random, texto);
}

// CONVERTIMOS EL ARRAY EN UN LET PARA QUE NOS SALGA UN TEXTO RANDOMIZADO EN FORMATO STRING

function eliminarCaracteres() {
    texto = texto.toUpperCase();

    const acentos_espacios = {
        'Á': 'A',
        'À': 'A',
        'É': 'E',
        'È': 'E',
        'Í': 'I',
        'Ì': 'I',
        'Ó': 'O',
        'Ò': 'O',
        'Ú': 'U',
        'Ù': 'U',
        'Ü': "U"

    };

    //acentos_espacios = acentos_espacios.replace(/Á/g,"")

    console.log(texto);
}

function borrarEspacios() {
    texto = texto.trim();
    //alert(texto);
    //for (var i=0; i<texto.length;i++){
    //if(texto.charAt(i) == " "){
}

// CREAMOS 
function comitasBajas(){
    let mostrar = [];
    texto = texto.split("")
    
    for(let letra of texto){
        mostrar.push('_');
    }

    document.write("<h1>"+mostrar+"</h1>");
}


Array();
getRandom();
eliminarCaracteres();
borrarEspacios();
comitasBajas();