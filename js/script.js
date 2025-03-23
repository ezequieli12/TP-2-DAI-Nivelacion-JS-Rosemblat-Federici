let numRandom = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function ChequearRespuesta() {
    const input = document.getElementById("respuestaUsuario");
    const mensaje = document.getElementById("mensaje");
    const mostrarIntentos = document.getElementById("intentos");
    let intentoUsuario = parseInt(input.value);

    if (isNaN(intentoUsuario) || intentoUsuario < 1 || intentoUsuario > 100) {
        mensaje.textContent = "Ingresá un número válido entre 1 y 100";
        return;
    }

    intentos++;
    mostrarIntentos.textContent = intentos;

    if (intentoUsuario < numRandom) {
        mensaje.textContent = "Demasiado bajo";
    } else if (intentoUsuario > numRandom) {
        mensaje.textContent = "Demasiado alto";
    } else {
        mensaje.textContent = `Adivinaste el número en ${intentos} intentos`;
    }
}

function RepetirJuego() {
    numRandom = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    document.getElementById("intentos").textContent = intentos;
    document.getElementById("mensaje").textContent = "";
    document.getElementById("respuestaUsuario").value = "";
}

document.getElementById("respuestaUsuario").addEventListener("keypress", function(event) {
    if (event.key === "Enter") 
    {
        ChequearRespuesta();
    }
});