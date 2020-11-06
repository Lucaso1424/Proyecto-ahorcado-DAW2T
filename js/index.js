// CREAMOS UN BOTON, COMO REFERENCIA DEL BOTON DE HTML
var palabrasUsuario = [];
var texto;
var random;


// CREAMOS UNA FUNCIÓN PARA INTRODUCIR LOS PARÁMETROS DE LAS PALABRAS E INICIAR EL JUEGO DIRECTAMENTE 
function iniciar_juego() {
    palabrasUsuario = prompt("Introduce 5 palabras para adivinar en el juego del ahorcado:").split(",");
}

// INICIAMOS EL JUEGO CON WINDOW.ONLOAD LLAMANDO A LA FUNCION DE INICIO DEL JUEGO
if (window.location.pathname == "/index.html") {
    window.onload = iniciar_juego();
    window.onload = abrir();
}

// ABRIR VENTANAS EMERGENTES DE DIFERENTES ARCHIVOS DE PÁGINA, DONDE CREAMOS ESO EN UNA FUNCION

function abrir() {
    // SE HACE CON LA ETIQUETA WINDOW.OPEN
    primero = window.open("../ventanas/primera_ventana.html", "primero", "top=20, left=700, width=400, height=200");
    segundo = window.open("../ventanas/segunda_ventana.html", "segundo", "top=285, left=700, width=400, height=200");
    tercero = window.open("../ventanas/tercera_ventana.html", "tercero", "top=800, left=700, width=400, height=200");
}

// FUNCION QUE RECARGA LA PAGINA PARA EMPEZAR LA PARTIDA DE NUEVO A PARTIR DE UN INTERVALO DE 5 SEGUNDOS
function foto() {
    document.write("<img id='img0' src='/img/Foto0.png' width='200'height='200'>");
    /*for (var i = 0; i < 7; i++) {
        document.write("<img id='img0' src='/img/Foto0.png' width='200' height='200'>");
    }*/
}

if (window.location.pathname == "/ventanas/primera_ventana.html") {
    window.onload = foto();
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
    console.log(texto);
}

function borrarEspacios() {
    texto = texto.trim();
    //alert(texto);
    //for (var i=0; i<texto.length;i++){
    //if(texto.charAt(i) == " "){
}

function comitasBajas() {
    let mostrar = [];
    texto = texto.split("")

    for (let letra of texto) {
        mostrar.push('_');
    }

    //document.getElementById("comitas").innerText = mostrar;
    document.write("<h2>" + mostrar + "</h2>");
}

var comitas_final = document.getElementById("comitas");
document.getElementById("comitas").addEventListener("click", comitasBajas);

var compara = document.getElementById("botonLetra");
document.getElementById("botonLetra").addEventListener("click", compararLetra);

function compararLetra() {
    // PASAR LAS LETRAS DIRECTAMENTE A MAYUSCULAS CON .toUpperCase
    compara = prompt("Dime una letra:").toUpperCase();
    for (let i = 0; i < texto.length; i++) {
        if (compara == texto[i]) {
            //document.getElementById("comita").innerHTML = texto.length ="_";
            console.log("Funciona");
        }
    }
}

var abandona = document.getElementById("cerrar");
document.getElementById("cerrar").addEventListener("click", abandonar_partida);

function abandonar_partida() {
    primero.close();
    segundo.close();
    tercero.close();
    if (window.location.pathname == "/index.html") {
        window.location.reload(true);
    }
}

function cambiarLetra() {

}

Array();
getRandom();
eliminarCaracteres();
borrarEspacios();
//comitasBajas();