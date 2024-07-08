// Selecciona un número al azar entre 1 y 100 (incluyendo el 100)
let numeroAzar = Math.floor(Math.random() * 100) + 1;

//Le agregare un contador de intentos
let cont = 0

// Entrada
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intentos = document.getElementById('intentos'); //obtenemos el valor

// Ejecutamos al usar el botón chequear
function chequearResultado() {
    let numeroIngresado = parseInt(numeroEntrada.value);
    
    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Por favor ingresa un número entre 1 y 100';
        return; // En JS si tenemos un return es lo último que se va a ejecutar en la función
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = '¡Felicidades, ganaste el juego!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true; // Desactiva el número de entrada
    } else
        cont++;
        intentos.textContent = `Intentos fallidos: ${cont}` //modificamos el texto con el valor del contador
            if (numeroIngresado < numeroAzar) 
            {
            mensaje.textContent = 'Un poco más alto';
            mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'Un poco más bajo, el número es menor';
        mensaje.style.color = 'red';
    }
}
