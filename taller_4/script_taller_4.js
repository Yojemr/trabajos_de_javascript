// Punto 1

function verificarAcceso() {
  let edad = document.getElementById("edad").value;
  let inscrito = document.getElementById("inscrito").checked;
  if (edad >= 18 && edad <= 25 && inscrito) {
    document.getElementById("resultado").innerHTML =
      `Acceso permitido y tienes ${edad} años`;
  } else {
    document.getElementById("resultado").innerHTML =
      `Acceso denegado. Solo tienes ${edad} años`;
  }
}

// Punto 2

function verificarBeca() {
  let distancia = document.getElementById("distancia").value;
  let ingresos = document.getElementById("ingresos").value;
  let estrato = document.getElementById("estrato").value;

  if (distancia > 5 && ingresos < 600000 && (estrato == 1 || estrato == 2)) {
    document.getElementById("resultadoBeca").innerHTML =
      "¡Felicidades! Tienes derecho a recibir la beca.";
  } else {
    document.getElementById("resultadoBeca").innerHTML =
      "Lo siento, no cumples con los requisitos para recibir la beca.";
  }
}

// Punto 3

function calcularNomina() {
  let horasExtras = parseFloat(document.getElementById("horasExtras").value);
  let aporteVoluntario = parseFloat(
    document.getElementById("aporteVoluntario").value,
  );
  let demandaAlimentos = document.getElementById("demandaAlimentos").checked;
  let auxilioTransporte = parseFloat(
    document.getElementById("auxilioTransporte").value,
  );
  let salarioHora = 6471;
  let salarioBaseSemanal = 48 * salarioHora;
  let salarioBaseMensual = salarioBaseSemanal * 4;
  let salarioBruto =
    salarioBaseMensual + horasExtras * salarioHora - aporteVoluntario;
  let funeraria = salarioBruto * 0.02;
  let emi = salarioBruto * 0.03;

  salarioBruto -= funeraria + emi;

  if (salarioBruto < 2 * salarioBaseMensual) {
    salarioBruto += auxilioTransporte;
  } else {
  }

  if (salarioBruto > 3740000 && demandaAlimentos) {
    salarioBruto -= salarioBruto * 0.3;
  } else {
  }

  document.getElementById("resultadoNomina").innerHTML =
    `El salario neto es: ${salarioBruto.toFixed(2)}`;
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
    document.getElementById("resultadoVelocidad").innerHTML =
      `¡Alerta! Has excedido el límite de velocidad para la zona ${zona}.`;
  } else {
    document.getElementById("resultadoVelocidad").innerHTML =
      `Estás dentro del límite de velocidad para la zona ${zona}.`;
  }
  document.getElementById("resultadoVelocidad").innerHTML +=
    `<br>Velocidad captada: ${velocidad} KM/H.<br>Límite máximo: ${velocidadMaxima} KM/H.<br>Fecha y hora: ${fechaHora}`;
}

// Punto 5

function determinarCategoriaEdad() {
  let edad = parseInt(document.getElementById("edadCategoria").value);
  let categoria;

  if (isNaN(edad) || edad < 0) {
    document.getElementById("resultadoCategoriaEdad").innerHTML =
      "Ingrese una edad válida.";
    return;
  }

  if (edad <= 5) {
    categoria = "Infante";
  } else if (edad <= 10) {
    categoria = "Niño";
  } else if (edad <= 15) {
    categoria = "Pre adolescente";
  } else if (edad <= 18) {
    categoria = "Adolescente";
  } else if (edad <= 25) {
    categoria = "Pre adulto";
  } else if (edad <= 40) {
    categoria = "Adulto";
  } else if (edad <= 55) {
    categoria = "Pre anciano";
  } else {
    categoria = "Anciano";
  }

  document.getElementById("resultadoCategoriaEdad").innerHTML =
    `La persona pertenece a la categoría: ${categoria}.`;
}

// Punto 6

let numeroTicket = 1;

function generarTicket() {
  let opcion = document.getElementById("opcion").value;
  let fechaHora = new Date().toLocaleString();
  let sucursal = Math.floor(Math.random() * 100) + 1;
  let servicio;

  if (opcion === "1") {
    servicio = "Caja";
  } else if (opcion === "2") {
    servicio = "Servicio al Cliente";
  } else if (opcion === "3") {
    servicio = "Pago de Impuestos";
  } else if (opcion === "4") {
    servicio = "Crédito Hipotecario";
  } else if (opcion === "5") {
    servicio = "Operaciones con Tarjeta de Crédito";
  } else {
    document.getElementById("resultadoTicket").innerHTML = "Opción no válida";
    return;
  }

  document.getElementById("resultadoTicket").innerHTML =
    `Número del ticket: ${numeroTicket}<br>` +
    `Id de la sucursal: ${sucursal}<br>` +
    `Servicio: ${servicio}<br>` +
    `Fecha y hora: ${fechaHora}`;

  numeroTicket++;
}

// Punto 7

function calcularCompraLicor() {
  let opcion = Number(document.getElementById("opcionLicor").value);
  let unidades = Number(document.getElementById("unidadesLicor").value);
  let licor;
  let precio;

  if (opcion === 1) {
    licor = "Ron";
    precio = 10;
  } else if (opcion === 2) {
    licor = "Vodka";
    precio = 12;
  } else if (opcion === 3) {
    licor = "Whisky";
    precio = 15;
  } else if (opcion === 4) {
    licor = "Tequila";
    precio = 18;
  } else if (opcion === 5) {
    licor = "Ginebra";
    precio = 20;
  } else {
    document.getElementById("resultadoLicor").innerHTML = "Opción no válida";
    return;
  }

  if (isNaN(unidades) || unidades <= 0 || unidades % 1 !== 0) {
    document.getElementById("resultadoLicor").innerHTML =
      "Cantidad de unidades no válida";
    return;
  }

  let total = precio * unidades;

  document.getElementById("resultadoLicor").innerHTML =
    `Licor seleccionado: ${licor}<br>` +
    `Precio por unidad: $${precio}<br>` +
    `Total a pagar: $${total}<br>` +
    "¡Gracias por su visita!";
}
