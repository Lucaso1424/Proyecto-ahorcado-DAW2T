// CREAMOS UN BOTON, COMO REFERENCIA DEL BOTON DE HTML
var palabrasUsuario = [];
var mostrar = [];
var convertido = [];
var convertido_final = [];
var texto;
var random;
var intentos = 6;

var ganadas = 0;
var perdidas = 0;
var abandonadas = 0;

// COMPROBAMOS LAS COOKIES DE LOS ID
checkCookie("abandonadas");
checkCookie("perdidas");
checkCookie("gano");

var abandona = document.getElementById("cerrar");
document.getElementById("cerrar").addEventListener("click", timeout_abandonar);

var compara = document.getElementById("botonLetra");
document.getElementById("botonLetra").addEventListener("click", compararLetra);

// CREAMOS UNA FUNCIÓN PARA INTRODUCIR LOS PARÁMETROS DE LAS PALABRAS E INICIAR EL JUEGO DIRECTAMENTE 
function iniciar_juego() {
    palabrasUsuario = prompt("Introduce 5 palabras para adivinar en el juego del ahorcado o pulsa aceptar para jugar con las predefinidas:");
    if (palabrasUsuario !== null) {
        palabrasUsuario = palabrasUsuario.split(",");
    } else {
        iniciar_juego();
    }
}


// ABRIR VENTANAS EMERGENTES DE DIFERENTES ARCHIVOS DE PÁGINA, DONDE CREAMOS ESO EN UNA FUNCION 
function abrirVentanas() {
    // SE HACE CON LA ETIQUETA WINDOW.OPEN
    primero = window.open("../ventanas/primera_ventana.html", "primero", "top=0, left=960, width=500, height=460");
    segundo = window.open("../ventanas/segunda_ventana.html", "segundo", "top=520, left=960, width=350, height=30");
    segundo.document.write("<h2 id='letra'>" + convertido_final + "</h2>"); //EDIT
    tercero = window.open("../ventanas/tercera_ventana.html", "tercero", "top=700, left=960, width=400, height=200");
    primero.document.write("<img src='img/Foto0.png' id='img01'>");
}

function Array() {
    if (palabrasUsuario == "" || palabrasUsuario == null) {
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
    convertido_final = convertido.replace(/[,]/gi, " ");
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


    //                                          TE CUELGAN

    function falloAhorcado() {
        alert("Has perdido el juego, la palabra era: " + texto + ".");
        perdidas++;
        // ENVIAMOS CON UN innerHTML A LA TERCERA VENTANA LAS PARTIDAS PERDIDAS
        tercero.document.getElementById("perdidas").innerHTML = "Partidas perdidas: " + perdidas;
        // CREAMOS LA COOKIE CONCATENANDO EL ID Y LA VARIABLE PERDIDAS, CON LOS DIAS INCLUIDOS DEL EXDAYS
        setCookie("pierdo", perdidas, 30);
        // VOLVEMOS A PONER LOS INTENTOS A 6
        intentos = 6;
        i = 1;
        mostrar = []; //DEFINIR DE NUEVO LA VARIABLE
        // LLAMAMOS A LA FUNCIÓN RANDOM PARA QUE COJA OTRA PALABRA DE NUEVO
        getRandom();
        // PONEMOS EL ARRAY DE MOSTRAR [] A 0 PARA QUE SE VUELVA A EJECUTAR LA FUNCION comitasBajas() 
        // Y VUELVA CONVERTIR EL ARRAY A _
        comitasBajas();
    }

    //                                          TIMEOUT

    if (intentos <= 0) {
        // CAMBIAR EL TIME OUT A 10000 MILISEGUNDOS
        function timeout_colgado() {
            var sec = 10;
            var intervalo = setInterval(function () {
                var a = new Date();
                document.getElementById("temporizador").innerHTML = sec;
                sec--;
                if (sec == -1) {
                    document.getElementById("temporizador").innerHTML = "";
                    clearInterval(intervalo);
                    primero.document.getElementById("img01").src = 'img/Foto0.png';
                }
            }, 1000);
            setTimeout(falloAhorcado, 12000);
        }
        timeout_colgado();
    }

    //                                       GANAR PARTIDA

    // COMPROBAMOS CON UN IF SI LA PALABRA ES EL TEXTO CON UN .toString Y UN REPLACE DE LAS , POR ESPACIOS PARA COMPROBAR EL IF
    if (convertido_final == texto.toString().replace(/[,]/gi, " ")) {
        alert("¡Enhorabuena, has ganado la partida, la palabra era " + convertido_final + ".!");
        // HACEMOS UN ++ DEL CONTADOR DE GANADAS
        ganadas++;
        // ENVIAMOS CON UN innerHTML A LA TERCERA VENTANA LAS PARTIDAS GANADAS
        tercero.document.getElementById("ganadas").innerHTML = "Partidas ganadas: " + ganadas;
        // CREAMOS LA COOKIE CONCATENANDO EL ID Y LA VARIABLE GANADAS, CON LOS DIAS INCLUIDOS DEL EXDAYS
        setCookie("gano", ganadas, 30);
        // PONEMOS LOS INTENTOS A 6
        intentos = 6;
        i = 1;
        mostrar = []; //DEFINIR DE NUEVO LA VARIABLE
        getRandom();
        // PONEMOS EL ARRAY DE MOSTRAR [] A 0 PARA QUE SE VUELVA A EJECUTAR LA FUNCION comitasBajas() 
        // Y VUELVA CONVERTIR EL ARRAY A _
        comitasBajas();
    }
} //FIN compararLetra



// FUNCION QUE RECARGA LA PAGINA PARA EMPEZAR LA PARTIDA DE NUEVO A PARTIR DE UN INTERVALO DE 5 SEGUNDOS
var i = 1;

function cambiarFoto() {
    if (!texto.includes(compara)) {
        primero.document.getElementById("img01").src = 'img/Foto' + i + '.png';
        i++;
    }
}

function abandonar_partida() {
    // HACEMOS UN ++ DEL CONTADOR DE ABANDONADAS
    abandonadas++;
    // ENVIAMOS CON UN innerHTML A LA TERCERA VENTANA LAS PARTIDAS ABANDONADAS
    tercero.document.getElementById("abandono").innerHTML = "Partidas abandonadas: " + abandonadas;

    // CREAMOS LA COOKIE CONCATENANDO EL ID Y LA VARIABLE ABANDONADAS, CON LOS DIAS INCLUIDOS DEL EXDAYS
    setCookie("abandonadas", abandonadas, 30);


    // VOLVEMOS A PONER LAS VARIABLES A 0
    intentos = 6;
    i = 1;
    mostrar = [];
    primero.document.getElementById("img01").src = 'img/Foto0.png';
    getRandom();
    comitasBajas();
}

// LLAMAMOS A LA FUNCION DE ABANDONAR PARTIDA AQUI Y LE APLICAMOS UN SETTIMEOUT DE 5 SECS
function timeout_abandonar() {
    var sec = 5;
    var intervalo = setInterval(function () {
        var a = new Date();
        document.getElementById("temporizador").innerHTML = sec;
        sec--;
        if (sec == -1) {
            document.getElementById("temporizador").innerHTML = "";
            clearInterval(intervalo);
        }
    }, 1000);
    setTimeout('abandonar_partida()', 5000);
}






//                          COOKIES

function setCookie(cname, value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + value + ";" + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    var cname = getCookie(cname);
    if (cname != "") {
        // SI EL CNAME ES != DE VACIO ENTONCES BUSCA LAS COOKIES CON EL PARSEINT
        perdidas = parseInt(getCookie("pierdo"));
        abandonadas = parseInt(getCookie("abandonadas"));
        ganadas = parseInt(getCookie("gano"));
    } else {
        // SINO DEFINIMOS LAS COOKIES A 0 CREADONLAS CON EL DOCUMENT.COOKIE Y LO PASAMOS A PARSEINT
        setCookie("pierdo", perdidas, 30);
        perdidas = parseInt(getCookie("pierdo"));
        setCookie("abandonadas", abandonadas, 30);
        abandonadas = parseInt(getCookie("abandonadas"));
        setCookie("gano", ganadas, 30);
        ganadas = parseInt(getCookie("gano"));
    }
}

function estadisticas() {
    tercero.document.write("<h2>Estadísticas globales</h2>");

    tercero.document.write("<p id='abandono'>Partidas abandonadas:</p>");
    tercero.document.getElementById("abandono").innerHTML = "Partidas abandonadas: " + abandonadas;

    tercero.document.write("<p id='ganadas'>Partidas ganadas:</p>");
    tercero.document.getElementById("ganadas").innerHTML = "Partidas ganadas: " + ganadas;

    tercero.document.write("<p id='perdidas'>Partidas perdidas:</p>");
    tercero.document.getElementById("perdidas").innerHTML = "Partidas perdidas: " + perdidas;
}

function css_ventanas() {
    primero.document.write("<link rel='stylesheet' type='text/css' href='css/index.css'>");
    segundo.document.write("<link rel='stylesheet' type='text/css' href='css/index.css'>");
    tercero.document.write("<link rel='stylesheet' type='text/css' href='css/index.css'>");
}



iniciar_juego();
abrirVentanas();
Array();
getRandom();
comitasBajas();
estadisticas();
css_ventanas();