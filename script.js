var estado = 1;
var tiempoTotal;
var tiempoJuego;
var tiempoSancion;
var list = document.querySelector(".showPre")
var respuestaCorrecta;
var respuestaIncorrecta;
let preguntas = new Array(10);
let resCorrect = new Array(10);
let resIncorrect = new Array(10);
var c = -1;
var d=-2;
var numPreg;

var juego1 = false;
var juego2 = false;
var juego3 = false;
var juego4 = false;

document.getElementById("opcion").addEventListener("click", myf1);
document.getElementById("opcion2").addEventListener("click", myf2);
document.getElementById("opcion3").addEventListener("click", myf3);
document.getElementById("opcion4").addEventListener("click", myf4);

function myf1() {
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
function myf2() {
    document.getElementById("opcion2").style.backgroundColor = "red";
    juego1 = false;
    juego2 = true;
    juego3 = false;
    juego4 = false;
    numPreg = 25;
    document.getElementById("opcion").style.backgroundColor = "";
    document.getElementById("opcion3").style.backgroundColor = "";
    document.getElementById("opcion4").style.backgroundColor = "";

}
function myf3() {
    document.getElementById("opcion3").style.backgroundColor = "rgb(108, 211, 177)";
    juego1 = false;
    juego2 = false;
    juego3 = true;
    juego4 = false;
    numPreg = 50;
    document.getElementById("opcion").style.backgroundColor = "";
    document.getElementById("opcion2").style.backgroundColor = "";
    document.getElementById("opcion4").style.backgroundColor = "";

}
function myf4() {
    document.getElementById("opcion4").style.backgroundColor = "rgb(108, 211, 177)";
    juego1 = false;
    juego2 = false;
    juego3 = false;
    juego4 = true;
    numPreg = 99;
    document.getElementById("opcion").style.backgroundColor = "";
    document.getElementById("opcion2").style.backgroundColor = "";
    document.getElementById("opcion3").style.backgroundColor = "";

}

document.getElementById("comenzarJuego").onclick = function () {
    if (estado === 0) {
        location.reload();
        ocultar("ask");
        ocultar("opRes");
        mostrar("comenzarJuego");
        estado = 1;
    } else if (estado === 1 && juego1 === true) {
        
        estado = 0;
        jugando = true;
        tiempoTotal = 0;
        tiempoJuego = 0;
        tiempoSancion = 0;
        ocultarF();
        mostrar("ask");
        mostrar("opRes");
        generarPregResp(numPreg);
        console.log("estado" + estado);
    }
    else if (estado === 1 && juego2 === true) {
        estado = 0;
        jugando = true;
        tiempoTotal = 0;
        tiempoJuego = 0;
        tiempoSancion = 0;
        ocultarF();
        mostrar("ask");
        mostrar("opRes");
        generarPregResp(numPreg);
        console.log("estado" + estado);
    }
    else if (estado === 1 && juego3 === true) {
        estado = 0;
        jugando = true;
        tiempoTotal = 0;
        tiempoJuego = 0;
        tiempoSancion = 0;
        ocultarF();
        mostrar("ask");
        mostrar("opRes");
        generarPregResp(numPreg);
        console.log("estado" + estado);
    } else if (estado === 1 && juego4 === true) {
        estado = 0;
        jugando = true;
        tiempoTotal = 0;
        tiempoJuego = 0;
        tiempoSancion = 0;
        ocultarF();
        mostrar("ask");
        mostrar("opRes");
        generarPregResp(numPreg);
        console.log("estado" + estado);
    }else if(estado==3){

        ocultar("opPres");
        ocultar("ask");
        ocultar("opRes");
        mostrar("finJuego");
        mostrar("comenzarJuego");
    }
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

function iniciarCuenta() {
    accion = setInterval(function () {
        tiempoJuego += 1;
        if (tiemporestante == 0) {
            detenerCuenta();
            mostrar("gameover");
            document.getElementById("gameover").innerHTML = "<p>Juego Finalizado!!</p> <p>Su puntaje es:" + puntaje + ".</p>";
            ocultar("tiemporestante");
            ocultar("correcto");
            ocultar("error");
            jugando = false;
            document.getElementById("inicioreset").innerHTML = "Iniciar juego";


        }

    }, 1000)

}

function detenerCuenta() {
    clearInterval(accion);
}
function generarPregResp(num) {

    for (let i = 0; i < num; i++) {
        var x = 1 + Math.round(9 * Math.random());
        var y = 1 + Math.round(9 * Math.random());
        respuestaIncorrecta = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random()));
        respuestaCorrecta = x * y;
        resCorrect[i] = respuestaCorrecta;
        resIncorrect[i] = respuestaIncorrecta;
        preguntas[i] = x + "*" + y + "=" + respuestaIncorrecta;

        var fila = document.createElement("tr");
        var listPreguntas = document.createElement("th");
        listPreguntas.textContent = preguntas[i];
        fila.appendChild(listPreguntas);
        list.appendChild(fila);
    }
    console.log(resIncorrect);
    console.log(resCorrect);

}
/*for (let i = 0; i < 10; i++) {
       
        if (resIncorrect[i] != resCorrect[i]) {
            tiempoSancion += 0.5;
        }
        //}
        console.log(tiempoSancion)
    }
}*/

var blocks = document.getElementsByTagName('th');

function pintarQuestion(){
    c++;
    if(c>=preguntas.length){
        estado=3;
        
    }else{

        blocks[c].style.backgroundColor = "rgb(151, 224, 200)";
    }
}

function despintarQuestion(){
    d++;
    if(d>=preguntas.length){
        estado=3;
    }else{

        blocks[d].style.backgroundColor = "";
    }

}

document.getElementById("incorrecto").addEventListener("click", function(e){
    //c++;
    pintarQuestion();
    despintarQuestion();
    console.log("Estado: "+estado);
    
});
document.getElementById("correcto").addEventListener("click", function(e){
    //c++;
    pintarQuestion();
    despintarQuestion();
});
/*document.getElementById("correcto").onclick = function () {
    var blocks = document.getElementsByTagName('th');
    blocks[c].style.backgroundColor = "rgb(151, 224, 200)";
    console.log(preguntas[c]);
    c++;
    for (let i = 0; i < 10; i++) {

        if (resIncorrect[i] != resCorrect[i]) {
            tiempoSancion += 0.5;
        }
    }
    if (blocks[blocks.length - 1]) {
        estado = 2;
        console.log("estado: " + estado)
    }
    console.log(tiempoSancion)
}*/

