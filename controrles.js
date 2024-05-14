
var cartas = ['./img/facebook.svg', "./img/facebook.svg", "./img/firefox.svg", "./img/firefox.svg", "./img/google-icon.svg", "./img/google-icon.svg", "./img/html-5.svg", "./img/html-5.svg", "./img/instagram-icon.svg", "./img/instagram-icon.svg", "./img/internetexplorer.svg", "./img/internetexplorer.svg", "./img/chrome.svg", "./img/chrome.svg", "./img/opera.svg", "./img/opera.svg"];
const Maxintentos = 5;
const MaxAciertos = cartas.length;
var aciertos = 0;
var intentos = 0;
var MIntentos = 0;
var tarjetaDestapada = 0;
let carta1 = null;
let carta2 = null;
let PrimerResultado = null;
let SegundoResultado = null;
cartas.sort(() => Math.random() - 0.5)
let mostrarAciertos = document.getElementById('aciertos');
const ocultar = document.getElementById('ocultar');
ocultar.style.display = "none";
let maxIntentos = document.getElementById('max');
const agregar = document.getElementById('agregar');
let mostrarIntentos = document.getElementById('intentos');
const bloquarBoton = document.getElementById('girarTodas');
let girarT = null;
let bloquear = null;
maxIntentos.innerHTML += Maxintentos;
for (let i = 0; i < cartas.length; i++) {
    bloquear = document.getElementById(i);
    bloquear.disabled = true;
}

function todas() {


    for (let i = 0; i < cartas.length; i++) {
        girarT = document.getElementById(i);
        girarT.disabled = false;
        girarT.innerHTML = `<img src= "${cartas[i]}" alt="">`;

    }
    setTimeout(() => {

        for (let i = 0; i < cartas.length; i++) {
            girarT = document.getElementById(i);
            girarT.innerHTML = `<img src= "./img/javascript.svg" alt="">`;
        }
    }, 2000);
    bloquarBoton.disabled = true;
}

function dar_vuelta(id) {
 
    tarjetaDestapada++;
    var carta = document.getElementById(id);
    carta.classList.add('girando');
    setTimeout(function() {
        carta.classList.remove('girando');
    }, 500);
    if (tarjetaDestapada == 1) {
        carta1 = document.getElementById(id);
        PrimerResultado = cartas[id];
        carta1.innerHTML = `<img src= "${PrimerResultado}" alt="">`;
        carta1.disabled = true;
    }
    else if (tarjetaDestapada == 2) {
        carta2 = document.getElementById(id);
        SegundoResultado = cartas[id];
        carta2.innerHTML = `<img src= "${SegundoResultado}" alt="">`;
        carta2.disabled = true;
        if (PrimerResultado == SegundoResultado) {
            tarjetaDestapada = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `${aciertos}`;
            if (aciertos == MaxAciertos / 2) {
                ocultar.style.display = "block";
                agregar.innerHTML = '¡Ganaste! ';
                setTimeout(() => {
                    location.reload();
                }, 3000);
            }
        }
        else if (PrimerResultado != SegundoResultado) {

            setTimeout(() => {

                carta1.disabled = false;
                carta2.disabled = false;
                tarjetaDestapada = 0;
                carta1.innerHTML = `<img src= "./img/javascript.svg" alt="">`;
                carta2.innerHTML = `<img src= "./img/javascript.svg" alt="">`;
            }, 800);
            intentos++;
            mostrarIntentos.innerHTML = `${intentos}`;
            if (intentos == Maxintentos) {
                ocultar.style.display = "block";
                agregar.innerHTML = 'Perdiste el juego :( ';
                setTimeout(() => {
                    location.reload();
                }, 3000);

            }
        }
       


    }
}



