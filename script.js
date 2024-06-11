// Variables y objetos necesarios para el simulador
let historialOperaciones = [];

// Función principal que inicia el simulador
function iniciarSimulador(esPrompt) {
    let operacion, numero1, numero2;

    if (!esPrompt) {
        // Captura de entradas desde el formulario HTML
        operacion = document.getElementById("operacion").value;
        numero1 = parseFloat(document.getElementById("numero1").value);
        numero2 = parseFloat(document.getElementById("numero2").value);
    } else {
        // Captura de entradas mediante prompt()
        operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division, porcentaje, concatenacion):").toLowerCase();
        numero1 = parseFloat(prompt("Ingrese el primer número:"));
        numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    }

    let resultado;

    // Procesar entradas según el tipo de operación
    switch (operacion) {
        case 'suma':
            resultado = sumar(numero1, numero2);
            break;
        case 'resta':
            resultado = restar(numero1, numero2);
            break;
        case 'multiplicacion':
            resultado = multiplicar(numero1, numero2);
            break;
        case 'division':
            resultado = dividir(numero1, numero2);
            break;
        case 'porcentaje':
            resultado = porcentaje(numero1, numero2);
            break;
        case 'concatenacion':
            resultado = concatenar(numero1, numero2);
            break;
        default:
            resultado = "Operación no válida";
    }

    // Guardar operación en historial
    historialOperaciones.push({ operacion, numero1, numero2, resultado });

    // Mostrar el resultado
    if (esPrompt) {
        alert(`El resultado de la ${operacion} es: ${resultado}`);
    } else {
        document.getElementById("resultado").innerText = `El resultado de la ${operacion} es: ${resultado}`;
    }

    // Mostrar historial en consola
    console.log(`Historial de operaciones:`, historialOperaciones);
}

// Funciones para las operaciones matemáticas y concatenación
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        alert("No se puede dividir por cero");
        return "Error";
    }
    return a / b;
}

function porcentaje(a, b) {
    return (a * b) / 100;
}

function concatenar(a, b) {
    return a.toString() + b.toString();
}

// Método de búsqueda y filtrado sobre el array de historial
function buscarOperacion(tipo) {
    return historialOperaciones.filter(op => op.operacion === tipo);
}

// Iniciar el simulador en modo prompt solo si no está en un navegador
if (typeof document === 'undefined' || !document.getElementById("operacion")) {
    iniciarSimulador(true);
}
