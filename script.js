const usuario = document.getElementById("usuario");
const tag = document.getElementById("tag");
const nivel = document.getElementById("nivel");
const copas = document.getElementById("copas");
const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const linea = document.getElementById("linea");
const desconectado = document.getElementById("desconectado");
const estado = document.getElementById("estado");

let copasActual = 0;

tag.addEventListener("input", function() {
   let nombre = tag.value;
   usuario.textContent = nombre || "Jugador 1"
});

sumar.addEventListener("click", function() {
    copasActual = Math.min(20, copasActual + 2)

    if (copasActual >= 16) {
        copas.textContent = copasActual;
        nivel.textContent = " Dios "
    } else if (copasActual >= 12 ){
        copas.textContent = copasActual;
        nivel.textContent = " Legendario "
    } else if (copasActual >= 8) {
        copas.textContent = copasActual;
        nivel.textContent = " Maestro "
    } else if (copasActual >= 4){
        copas.textContent = copasActual;
        nivel.textContent = " Plata "
    } else {
        copas.textContent = copasActual;
        nivel.textContent = " Principiante "
    }
});

restar.addEventListener("click", function() {
    copasActual = Math.max(0, copasActual - 2)

    if (copasActual >= 16) {
        copas.textContent = copasActual;
        nivel.textContent = " Dios "
    } else if (copasActual >= 12 ){
        copas.textContent = copasActual;
        nivel.textContent = " Legendario "
    } else if (copasActual >= 8) {
        copas.textContent = copasActual;
        nivel.textContent = " Maestro "
    } else if (copasActual >= 4){
        copas.textContent = copasActual;
        nivel.textContent = " Plata "
    } else {
       copas.textContent = copasActual;
       nivel.textContent = " Principiante "
    }
});

linea.addEventListener("click", function() {
    estado.style.color = "green"
    estado.textContent = "Linea"
});

desconectado.addEventListener("click", function() {
    estado.style.color = "red"
    estado.textContent = " Desconectado "
});