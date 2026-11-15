//alert("Calculadora iniciada")


function escribir (valor) {
    let panalla = document.getElementById("pantalla");

    if (panalla.value == "0") {
        panalla.value = valor;
    }

    else {
        panalla.value += valor;
    }


}

function borrar() {
    let panalla = document.getElementById("pantalla");
    panalla.value = "0";
    
}

function calcular() {
    // Nota: en tu código original llamaste a la variable "panalla", aquí usamos "pantalla"
    let pantalla = document.getElementById("pantalla"); 
    
    try {
        // eval() toma el texto (ej. "5+5") y ejecuta la operación matemática
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        // Si el usuario escribe algo inválido (ej. "5++"), muestra un error
        pantalla.value = "Error";
    }
}



//escribir solo un digito
function escribir(valor) {
    let pantalla = document.getElementById("pantalla");
    let textoActual = pantalla.value;
    let ultimoCaracter = textoActual.slice(-1);
    let operadores = ['+', '-', '*', '/', '.'];

    // Bloquea la entrada si el nuevo valor y el último escrito son operadores
    if (operadores.includes(valor) && operadores.includes(ultimoCaracter)) {
        return; 
    }

    // Reemplaza el 0 inicial por el número, pero permite empezar por "0." o "0+"
    if (textoActual === "0" && !operadores.includes(valor)) {
        pantalla.value = valor;
    } else {
        pantalla.value += valor;
    }
}
