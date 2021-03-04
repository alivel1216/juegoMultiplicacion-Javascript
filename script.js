window.onload = cantidadPreguntas;
var tiempoTotal;
var tiempoJuego;
var tiempoSancion;
var list = document.querySelector(".showPre")
var respuestaCorrecta;
var respuestaIncorrecta;
let preguntas = [];
let respuestas = [];
let resCorrect = [];
let posRespuestas = [];
let allTiemposJuego = [];
var c = 0;
var d = -1;
var numPreg;
var inicio = 3;

var juego1 = false;
var juego2 = false;
var juego3 = false;
var juego4 = false;

function cantidadPreguntas() {
    document.getElementById("opcion").addEventListener("click", j10P);
    document.getElementById("opcion2").addEventListener("click", j25P);
    document.getElementById("opcion3").addEventListener("click", j50P);
    document.getElementById("opcion4").addEventListener("click", j99P);

    function j10P() {
        document.getElementById("opcion").style.backgroundColor = "rgb(108, 211, 177)";
        document.getElementById("opcion").style.color = "white";
        juego1 = true;
        juego2 = false;
        juego3 = false;
        juego4 = false;
        numPreg = 10;
        document.getElementById("opcion2").style.backgroundColor = "";
        document.getElementById("opcion3").style.backgroundColor = "";
        document.getElementById("opcion4").style.backgroundColor = "";

    }
    function j25P() {
        document.getElementById("opcion2").style.backgroundColor = "rgb(108, 211, 177)";
        document.getElementById("opcion2").style.color = "white";
        juego1 = false;
        juego2 = true;
        juego3 = false;
        juego4 = false;
        numPreg = 25;
        document.getElementById("opcion").style.backgroundColor = "";
        document.getElementById("opcion3").style.backgroundColor = "";
        document.getElementById("opcion4").style.backgroundColor = "";

    }
    function j50P() {
        document.getElementById("opcion3").style.backgroundColor = "rgb(108, 211, 177)";
        document.getElementById("opcion3").style.color = "white";
        juego1 = false;
        juego2 = false;
        juego3 = true;
        juego4 = false;
        numPreg = 50;
        document.getElementById("opcion").style.backgroundColor = "";
        document.getElementById("opcion2").style.backgroundColor = "";
        document.getElementById("opcion4").style.backgroundColor = "";

    }
    function j99P() {
        document.getElementById("opcion4").style.backgroundColor = "rgb(108, 211, 177)";
        document.getElementById("opcion4").style.color = "white";
        juego1 = false;
        juego2 = false;
        juego3 = false;
        juego4 = true;
        numPreg = 99;
        document.getElementById("opcion").style.backgroundColor = "";
        document.getElementById("opcion2").style.backgroundColor = "";
        document.getElementById("opcion3").style.backgroundColor = "";

    }
    document.getElementById("comenzarJuego").addEventListener("click", empezar);
}
function mostrar(id) {
    document.getElementById(id).style.display = "block";
}
function ocultar(id) {
    document.getElementById(id).style.display = "none";
}
function ocultarF() {
    document.getElementById("opPre").style.display = "none";
    document.getElementById("comenzarJuego").style.display = "none";
}


function empezar() {
    ocultar("opPre");
    ocultar("finJuego");
    ocultar("ask");
    ocultar("opRes");
    ocultar("reiniciarJuego");
    ocultar("comenzarJuego");
    mostrar("conteoJuego");
    conteo();
    inicio = 3;
}


function conteo() {

    //jugando();
    //id = setInterval(jugando, 1000);

    id = setInterval(function () {
        //inicio = 3
        inicio -= 1;
        document.getElementById("contador").innerHTML = inicio;
        if (inicio === 0) {
            detenerConteo();
            //inicio=0;
            ocultar("opPre");
            ocultar("finJuego");
            ocultar("comenzarJuego");
            ocultar("conteoJuego");
            ocultar("reiniciarJuego");
            if (juego1 === true) {
                jugando = true;
                tiempoTotal = 0;
                tiempoJuego = 0;
                tiempoSancion = 0;
                mostrar("ask");
                mostrar("opRes");
                ocultar("reiniciarJuego");
                numPos(numPreg);
                iniciarCuenta();
                detenerConteo();
            }
            else if (juego2 === true) {
                jugando = true;
                tiempoTotal = 0;
                tiempoJuego = 0;
                tiempoSancion = 0;
                ocultarF();
                mostrar("ask");
                mostrar("opRes");
                numPos(numPreg);

            }
            else if (juego3 === true) {
                jugando = true;
                tiempoTotal = 0;
                tiempoJuego = 0;
                tiempoSancion = 0;
                ocultarF();
                mostrar("ask");
                mostrar("opRes");
                numPos(numPreg);

            } else if (juego4 === true) {
                jugando = true;
                tiempoTotal = 0;
                tiempoJuego = 0;
                tiempoSancion = 0;
                ocultarF();
                mostrar("ask");
                mostrar("opRes");
                numPos(numPreg);

            }
        }

    }, 1000)
}


function detenerConteo() {
    clearInterval(id);
    //inicio=3;
}
function numPos(num) {
    //Lleno un array con numeros de 0 a n
    for (var p = 0; p < num; p++) {
        posRespuestas[p] = p;
    }
    var i, j, k;//variables auxiliares
    //Bucle para desordenar los elementos del array
    for (i = posRespuestas.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = posRespuestas[i - 1];
        posRespuestas[i - 1] = posRespuestas[j];
        posRespuestas[j] = k;
    }
    //Bucle para crear las preguntas
    for (i = 0; i < num; i++) {
        var x = 1 + Math.round(9 * Math.random());
        var y = 1 + Math.round(9 * Math.random());
        respuestaIncorrecta = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
        respuestaCorrecta = x * y;
        //resCorrect[i]=respuestaCorrecta;
        //Si la posicion del array desordenado es par almaceno las respuestas correctas y si es impar las incorrectas
        if (posRespuestas[i] % 2 == 0) {
            respuestas[i] = respuestaCorrecta;
        } else {
            respuestas[i] = respuestaIncorrecta;
        }

        preguntas[i] = x + "*" + y + "=" + respuestas[i];//En cada pregunta guarda la respuestavaria entre para e impar

        //Mostrar las preguntas en una tabla
        var fila = document.createElement("tr");
        var listPreguntas = document.createElement("th");
        listPreguntas.textContent = preguntas[i];
        fila.appendChild(listPreguntas);
        list.appendChild(fila);
    }
}

var blocks = document.getElementsByTagName('th');//Obtenemos las filas de la tabla
//Funcion para pintar cada pregunta
function pintarQuestion() {
    c++;
    if (c >= preguntas.length) {
        finalJuego();
        document.getElementById("reiniciarJuego").addEventListener("click", function () {
            mostrar("opPre");
            mostrar("comenzarJuego");
            ocultar("finJuego");
            ocultar("opRes");
            ocultar("reiniciarJuego");
            c = 0;
            d = -1;
            location.reload();
            let nuevoTiempo = allTiemposJuego.push(tiempoTotal);
            allTiemposJuego.sort((a, b) => a - b);
            document.getElementById("10p").innerHTML = allTiemposJuego[0];

        });
    } else {

        blocks[c].style.backgroundColor = "rgb(151, 224, 200)";
    }
}

function removerElements() {

}
//Funcion para despintar Pregunta 
function despintarQuestion() {
    d++;
    if (d >= preguntas.length) {
    } else {

        blocks[d].style.backgroundColor = "";
    }
}
var countRes = 0;//Contador que rrecorre cada pregunta
var numError = 0;//contador que indica cuantos errores cometio
//Evento al presionar boton Incorrecto
document.getElementById("incorrecto").addEventListener("click", function (e) {

    pintarQuestion();
    despintarQuestion();
    var recPos = posRespuestas[countRes];
    if (recPos % 2 == 0) {
        numError++;
    } else {
    }
    countRes++;
    console.log(numError);
});
document.getElementById("correcto").addEventListener("click", function (e) {

    pintarQuestion();
    despintarQuestion();
    var recoPos = posRespuestas[countRes];
    if (recoPos % 2 == 0) {

    } else {
        numError++;
    }
    countRes++;
});

function finalJuego() {
    mostrar("finJuego");
    mostrar("reiniciarJuego");
    ocultar("ask");
    ocultar("opRes");
    tiempoSancion = 0.5 * numError;
    tiempoTotal = tiempoJuego + tiempoSancion;
    document.getElementById("tTotal").innerHTML = tiempoTotal + "s";
    document.getElementById("tBase").innerHTML = tiempoJuego + "s";
    document.getElementById("tPenalizacion").innerHTML = "+" + tiempoSancion + "s";

    detenerCuenta();
}

function iniciarCuenta() {
    accion = setInterval(function () {
        tiempoJuego++;

    }, 1000)

}
function detenerCuenta() {
    clearInterval(accion);
}



