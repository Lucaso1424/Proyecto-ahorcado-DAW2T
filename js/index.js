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
    window.onload = abrirVentanas();
}

// ABRIR VENTANAS EMERGENTES DE DIFERENTES ARCHIVOS DE PÁGINA, DONDE CREAMOS ESO EN UNA FUNCION

function abrirVentanas() {
    // SE HACE CON LA ETIQUETA WINDOW.OPEN
    primero = window.open("../ventanas/primera_ventana.html", "primero", "top=1000, left=0, width=400, height=350");
    segundo = window.open("../ventanas/segunda_ventana.html", "segundo", "top=2000, left=500, width=400, height=350");
    tercero = window.open("../ventanas/tercera_ventana.html", "tercero", "top=3000, left=1000, width=400, height=350");
}

// FUNCION QUE RECARGA LA PAGINA PARA EMPEZAR LA PARTIDA DE NUEVO A PARTIR DE UN INTERVALO DE 5 SEGUNDOS
function dinujoAhorcado() {
    primero.document.write("<img src='/img/Foto6.png' width='350'height='350'>");
    /*for (var i = 0; i < 7; i++) {
        document.write("<img id='img0' src='/img/Foto0.png' width='200' height='200'>");
    }*/
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
    segundo.document.write("<h2>" + mostrar + "</h2>");
}

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

function estadisticas() {
    tercero.document.write("<h2>Partida actual</h2>");
    tercero.document.write("<p>Letras correctas:</p>");
    tercero.document.write("<p>Letras restantes:</p>");

    tercero.document.write("<h2>Estadísticas globales</h2>");
    tercero.document.write("<p>Abandonos:</p>");
    tercero.document.write("<p>Número de veces colgado:</p>");
}

Array();
getRandom();
eliminarCaracteres();
borrarEspacios();
comitasBajas();
dinujoAhorcado();
estadisticas();