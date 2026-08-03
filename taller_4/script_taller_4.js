// Punto 1

function verificarAcceso() {
    let edad = document.getElementById("edad").value;
    let inscrito = document.getElementById("inscrito").checked;
    if ((edad >= 18 && edad <= 25) && inscrito) {
        document.getElementById("resultado").innerHTML = `Acceso permitido y tienes ${edad} años`;
    } else {
        document.getElementById("resultado").innerHTML = `Acceso denegado. Solo tienes ${edad} años`;
    }}

// Punto 2

function verificarBeca() {
    let distancia = document.getElementById("distancia").value;
    let ingresos = document.getElementById("ingresos").value;
    let estrato = document.getElementById("estrato").value;

    if (distancia > 5 && ingresos < 600000 && (estrato == 1 || estrato == 2)) {
        document.getElementById("resultadoBeca").innerHTML = "¡Felicidades! Tienes derecho a recibir la beca.";
    } else {
        document.getElementById("resultadoBeca").innerHTML = "Lo siento, no cumples con los requisitos para recibir la beca.";
    }
}

// Punto 3

function calcularNomina() {
    let horasExtras = parseFloat(document.getElementById("horasExtras").value);
    let aporteVoluntario = parseFloat(document.getElementById("aporteVoluntario").value);
    let demandaAlimentos = document.getElementById("demandaAlimentos").checked;
    let auxilioTransporte = parseFloat(document.getElementById("auxilioTransporte").value);
    let salarioHora = 6471;
    let salarioBaseSemanal = 48 * salarioHora;
    let salarioBaseMensual = salarioBaseSemanal * 4;
    let salarioBruto = salarioBaseMensual + (horasExtras * salarioHora) - aporteVoluntario;
    let funeraria = salarioBruto * 0.02;
    let emi = salarioBruto * 0.03;

    salarioBruto -= (funeraria + emi);

    if (salarioBruto < 2 * salarioBaseMensual) {
        salarioBruto += auxilioTransporte;
    }
    else {}

    if (salarioBruto > 3740000 && demandaAlimentos) {
        salarioBruto -= salarioBruto * 0.3;
    }
    else {}

    document.getElementById("resultadoNomina").innerHTML = `El salario neto es: ${salarioBruto.toFixed(2)}`;
}

// Punto 4
function verificarVelocidad() {
    let velocidad = parseFloat(document.getElementById("velocidad").value);
    let zona = document.getElementById("zona").value;
    let fechaHora = new Date().toLocaleString();
    let velocidadMaxima;

    switch (zona) {
        case "escolar":
            velocidadMaxima = 30;
            break;
        case "urbana":
            velocidadMaxima = 60;
            break;
        case "rural":
            velocidadMaxima = 80;
            break;
        case "nacional":
            velocidadMaxima = 100;
            break;
        default:
            velocidadMaxima = 0;
    }
    
    if (velocidad > velocidadMaxima) {
        document.getElementById("resultadoVelocidad").innerHTML = `¡Alerta! Has excedido el límite de velocidad para la zona ${zona}.`;
    } else {
        document.getElementById("resultadoVelocidad").innerHTML = `Estás dentro del límite de velocidad para la zona ${zona}.`;
    }
    document.getElementById("resultadoVelocidad").innerHTML += `<br>Velocidad captada: ${velocidad} KM/H.<br>Límite máximo: ${velocidadMaxima} KM/H.<br>Fecha y hora: ${fechaHora}`;
}
