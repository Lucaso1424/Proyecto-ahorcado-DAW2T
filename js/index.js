// CREAMOS UN BOTON, COMO REFERENCIA DEL BOTON DE HTML
var palabrasUsuario = [];
var mostrar = [];
var convertido = [];
var convertido_final = [];
var texto;
var random;
var intentos = 6;

var abandona = document.getElementById("cerrar");
document.getElementById("cerrar").addEventListener("click", timeout_abandonar);

var compara = document.getElementById("botonLetra");
document.getElementById("botonLetra").addEventListener("click", compararLetra);

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
    primero = window.open("../ventanas/primera_ventana.html", "primero", "top=300, left=0, width=400, height=350");
    segundo = window.open("../ventanas/segunda_ventana.html", "segundo", "top=300, left=500, width=400, height=350");
    segundo.document.write("<h2 id='letra'>" + convertido_final + "</h2>"); //EDIT
    tercero = window.open("../ventanas/tercera_ventana.html", "tercero", "top=300, left=1000, width=400, height=350");
    primero.document.write("<img src='img/Foto0.png' id='img01'>");
}

function Array() {
    if (palabrasUsuario == "") {
        palabrasUsuario = ["patata", "elefante", "gundam", "auriculares", "ordenador"];
    }
    console.log(palabrasUsuario);
}

// RANDOMIZA LA PALABRA DEL ARRAY
function getRandom() {
    random = parseInt(Math.random() * palabrasUsuario.length);
    texto = palabrasUsuario[random];
    console.log(random, texto);
    // LLAMAMOS A LA FUNCIÓN DE ELIMINAR CARACTERES PARA QUE ELIMINE LOS ACENTOS CREADOS
    texto = eliminarCaracteres(texto);
    console.log(texto);
}

// CONVERTIMOS EL ARRAY EN UN LET PARA QUE NOS SALGA UN TEXTO RANDOMIZADO EN FORMATO STRING
function eliminarCaracteres() {
    texto = texto.toUpperCase();
    texto = texto.trim();

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
        'Ü': "U",
        " ": ""
    };

    var cambio = /[áàéèíìóòúùü ]/ig;

    var cambio_final = texto.replace(cambio, function (a) {
        return acentos_espacios[a]
    });
    // EN EL REPLACE AGREGAMOS LOS NUMEROS PARA SUSTITUIR
    cambio_final = cambio_final.replace(/[1234567890!¿?+-]/ig, "");

    return cambio_final;
}

function comitasBajas() {
    texto = texto.split("");

    for (let letra of texto) {
        mostrar.push('_');
    }

    convertido = mostrar.toString();
    convertido_final = convertido.replace(/[,]/gi, " ")
    // PONEMOS UN ID PARA LUEGO PODER CAMBIAR LAS _ POR LA LETRA CAMBIADA
    segundo.document.getElementById("letra").innerHTML = convertido_final; //EDIT
}
console.log(mostrar);

function compararLetra() {
    // PASAR LAS LETRAS DIRECTAMENTE A MAYUSCULAS CON .toUpperCase
    compara = prompt("Dime una letra:").toUpperCase();
    // CREAMOS UN BUCLE PARA QUE RECORRA LA POSICIÓN DEL LA PALABRA
    for (let i = 0; i < texto.length; i++) {
        if (compara == texto[i]) {
            mostrar[i] = compara;
            // REPETIMOS DE NUEVO EL EL .toString PARA PODER UTILIZAR EL CONVERTIDO_FINAL CON LAS _ Y CAMBIAR LA POSICION DE LA LETRA
            convertido = mostrar.toString();
            convertido_final = convertido.replace(/[,]/gi, " ");
            // PONEMOS EL GETELEMENTBYID CON EL INNERHTML PARA CAMBIAR EL HTML CON EL ID
            segundo.document.getElementById("letra").innerHTML = convertido_final;
        }
    }
    // AQUI COMPROBAMOS CON EL OPERADOR ! SI TEXTO ES DISTINTO DE LA LETRA QUE COMPROBAMOS
    if (!texto.includes(compara)) {
        // RESTAMOS LOS INTENTOS DISPONIBLES Y LOS MOSTRAMOS EN UN ALERT
        intentos--;
        cambiarFoto();
        alert("Fallido, te quedan " + intentos + " intentos.");
   
    }     
    if (intentos <= 0) {
        // MOSTRAMOS LA PALABRA DEL ARRAY DEL TEXTO
        alert("Has perdido el juego, la palabra era: " + texto + ".");
        // VOLVEMOS A PONER LOS INTENTOS A 6
        intentos = 6;
        i = 1;
        mostrar = []; //DEFINIR DE NUEVO LA VARIABLE
        // LLAMAMOS A LA FUNCIÓN RANDOM PARA QUE COJA OTRA PALABRA DE NUEVO
        getRandom();
        comitasBajas();


    }
    // COMPROBAMOS CON UN IF SI LA PALABRA ES EL TEXTO CON UN .toString Y UN REPLACE DE LAS , POR ESPACIOS PARA COMPROBAR EL IF
    if (convertido_final == texto.toString().replace(/[,]/gi, " ")) {
        alert("Enhorabuena, has ganado la partida, la palabra era " + convertido_final + ".");
        intentos = 6; 
        primero.document.write("<img src='img/Foto0.png' id='img01'>");
        i = 1;
        mostrar = []; //DEFINIR DE NUEVO LA VARIABLE
        getRandom();
        comitasBajas();

    }
}

// FUNCION QUE RECARGA LA PAGINA PARA EMPEZAR LA PARTIDA DE NUEVO A PARTIR DE UN INTERVALO DE 5 SEGUNDOS
var i = 1;
function cambiarFoto() {
    let contador = 6;
    if (!texto.includes(compara)) {
        //for(let i=1; i<= contador ;i++){
         console.log(i)
         
        primero.document.getElementById("img01").src = 'img/Foto' + i + '.png';
        i++;
        //;break
    }
    // HACER IF QUE LA FOTO SE PONGA A 0
}
function abandonar_partida() {
    primero.close();
    segundo.close();
    tercero.close();
    if (window.location.pathname == "/index.html") {
        window.location.reload(true);
    }
}

// LLAMAMOS A LA FUNCION DE ABANDONAR PARTIDA AQUI Y LE APLICAMOS UN SETTIMEOUT DE 5 SEGUNDOS
function timeout_abandonar() {
    setTimeout('abandonar_partida()', 1000);
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
comitasBajas();
estadisticas();