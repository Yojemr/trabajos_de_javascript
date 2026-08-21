// Datos generales que se conservan mientras la aplicación está abierta.
let plan = "";
let precio = 0;
let clientes = [];
let acudiente = "No aplica";
let detalleRestricciones = "Ninguna";

function saludar() {
  const fecha = new Date();
  document.getElementById("mensaje").innerHTML =
    "Bienvenido al Gimnasio, la fecha hoy es " + fecha.toLocaleDateString();
  document.getElementById("menu").innerHTML =
    "Menú<br/>" +
    "1. Elegir plan<br/>" +
    "2. Registrar un cliente<br/>" +
    "3. Métodos de pago<br/>" +
    "4. Generar informe<br/>" +
    "5. Rutina de ejercicios<br/>" +
    "6. Salir de la aplicación";
}

saludar();

function elegirPlan() {
  document.getElementById("resultado_plan").innerHTML = "";
  document.getElementById("resultado_cliente").innerHTML = "";
  document.getElementById("resultado_cliente_final").innerHTML = "";
  document.getElementById("opcionPago").innerHTML = "";
  document.getElementById("volver").innerHTML = "";
  document.getElementById("resultado_seleccion").innerHTML =
    "Has elegido el plan de entrenamiento. Los planes disponibles son: Gold $100.000, Smart $80.000 y Libre $70.000.<br/><input type='text' id='planInput' placeholder='Ingrese el nombre del plan (Gold, Smart, Libre)'/> <button onclick='seleccionarPlan()'>Seleccionar Plan</button>";
}

function seleccionarPlan() {
  let planIngresado = document.getElementById("planInput").value;
  if (planIngresado.trim() === "") {
    document.getElementById("resultado_plan").innerHTML =
      "No has ingresado un plan. Por favor, ingrese un plan válido.";
    return;
  }
  let nombrePlan = planIngresado.trim().toLowerCase();
  if (nombrePlan === "gold") {
    plan = "Gold";
    precio = 100000;
  } else if (nombrePlan === "smart") {
    plan = "Smart";
    precio = 80000;
  } else if (nombrePlan === "libre") {
    plan = "Libre";
    precio = 70000;
  } else {
    plan = "";
    precio = 0;
    document.getElementById("resultado_plan").innerHTML =
      "Plan inválido. Debe elegir Gold, Smart o Libre.";
    return;
  }
  document.getElementById("resultado_plan").innerHTML =
    "Has elegido el plan " + plan + ", el cual tiene un costo de: $" + precio;
}

function registrarCliente_input() {
  if (plan === "") {
    document.getElementById("resultado_seleccion").innerHTML =
      "Debe seleccionar un plan antes de registrar un cliente.";
    return;
  }
  document.getElementById("resultado_seleccion").innerHTML =
    "Has elegido registrar un cliente con el plan: " + plan;
  document.getElementById("opcionPago").innerHTML = "";
  document.getElementById("volver").innerHTML = "";
  acudiente = "No aplica";
  detalleRestricciones = "Ninguna";
  document.getElementById("resultado_cliente_final").innerHTML = "";
  document.getElementById("resultado_cliente").innerHTML =
    "Ingrese los datos del cliente:<br/>" +
    "<input type='text' id='nombreInput' placeholder='Nombre'/>" +
    "<input type='text' id='documentoInput' placeholder='Documento'/>" +
    "<input type='text' id='profesionInput' placeholder='Profesión'/>" +
    "<input type='number' id='edadInput' placeholder='Edad'/>" +
    "<input type='number' id='pesoInput' placeholder='Peso (kg)'/>" +
    "<input type='number' id='estaturaInput' placeholder='Estatura (m)'/>" +
    "<input type='text' id='epsInput' placeholder='EPS'/>" +
    "<input type='text' id='direccionInput' placeholder='Dirección'/>" +
    "<input type='text' id='telefonoInput' placeholder='Teléfono'/>" +
    "<select id='estadoCivilInput'>" +
    "<option value='Soltero'>Soltero</option>" +
    "<option value='Casado'>Casado</option>" +
    "</select>" +
    "<button onclick='registrarCliente()'>Registrar Cliente</button>";
}

function registrarCliente() {
  document.getElementById("resultado_seleccion").innerHTML =
    "Usted ha elegido registrar un cliente con el plan: " + plan;
  let nombre = document.getElementById("nombreInput").value;
  let documento = document.getElementById("documentoInput").value;
  let profesion = document.getElementById("profesionInput").value;
  let edad = Number(document.getElementById("edadInput").value);
  let peso = Number(document.getElementById("pesoInput").value);
  let estatura = Number(document.getElementById("estaturaInput").value);
  let estadoCivil = document.getElementById("estadoCivilInput").value;
  let eps = document.getElementById("epsInput").value;
  let direccion = document.getElementById("direccionInput").value;
  let telefono = document.getElementById("telefonoInput").value;

  // No permite continuar si falta un dato obligatorio o un número es inválido.
  if (
    nombre.trim() === "" ||
    documento.trim() === "" ||
    profesion.trim() === "" ||
    edad <= 0 ||
    peso <= 0 ||
    peso >= 500 ||
    estatura <= 0 ||
    estadoCivil.trim() === "" ||
    eps.trim() === "" ||
    direccion.trim() === "" ||
    telefono.trim() === ""
  ) {
    document.getElementById("resultado_cliente_final").innerHTML =
      "No se registró el cliente porque faltaron datos obligatorios. Por favor, complete todos los campos.";
    return;
  }

  if (edad < 13) {
    document.getElementById("resultado_cliente_final").innerHTML =
      "El cliente es menor de 13 años, no puede registrarse.";
    return;
  } else if (edad < 18) {
    document.getElementById("resultado_cliente_final").innerHTML =
      "¿El cliente tiene acudiente?<br/>" +
      "<input type='text' id='tieneAcudienteInput' placeholder='Si o No'/>" +
      "<button onclick='revisarAcudiente()'>Continuar</button>" +
      "<br/><span id='mensajeAcudiente'></span>";
  } else {
    mostrarRestricciones();
  }
}

function revisarAcudiente() {
  let respuestaAcudiente = document
    .getElementById("tieneAcudienteInput")
    .value.trim()
    .toLowerCase();
  let edad = Number(document.getElementById("edadInput").value);

  if (respuestaAcudiente === "") {
    document.getElementById("mensajeAcudiente").innerHTML =
      "Debe responder Si o No.";
    return;
  }

  if (respuestaAcudiente === "si") {
    document.getElementById("resultado_cliente_final").innerHTML =
      "Ingrese el nombre del acudiente:<br/>" +
      "<input type='text' id='acudienteInput' placeholder='Nombre del acudiente'/>" +
      "<button onclick='guardarAcudiente()'>Continuar</button>" +
      "<br/><span id='mensajeAcudiente'></span>";
  } else if (respuestaAcudiente === "no") {
    if (edad < 18) {
      document.getElementById("mensajeAcudiente").innerHTML =
        "Un menor de edad debe tener acudiente.";
      return;
    }

    acudiente = "No aplica";
    mostrarRestricciones();
  } else {
    document.getElementById("mensajeAcudiente").innerHTML =
      "Respuesta inválida. Escriba Si o No.";
  }
}

function guardarAcudiente() {
  let nombreAcudiente = document.getElementById("acudienteInput").value.trim();

  if (nombreAcudiente === "") {
    document.getElementById("mensajeAcudiente").innerHTML =
      "Debe ingresar el nombre del acudiente.";
    return;
  }

  acudiente = nombreAcudiente;
  mostrarRestricciones();
}

function mostrarRestricciones() {
  document.getElementById("resultado_cliente_final").innerHTML =
    "¿El cliente tiene restricciones médicas?<br/>" +
    "<input type='text' id='restriccionesInput' placeholder='Si o No'/>" +
    "<button onclick='revisarRestricciones()'>Continuar</button>" +
    "<br/><span id='mensajeRestricciones'></span>";
}

function revisarRestricciones() {
  let restricciones = document
    .getElementById("restriccionesInput")
    .value.trim()
    .toLowerCase();

  if (restricciones === "si") {
    document.getElementById("resultado_cliente_final").innerHTML =
      "Describa la restricción médica:<br/>" +
      "<input type='text' id='detalleRestriccionesInput' placeholder='Detalle de la restricción'/>" +
      "<button onclick='guardarRestricciones()'>Registrar Cliente</button>" +
      "<br/><span id='mensajeRestricciones'></span>";
  } else if (restricciones === "no") {
    detalleRestricciones = "Ninguna";
    guardarClienteFinal();
  } else {
    document.getElementById("mensajeRestricciones").innerHTML =
      "Respuesta inválida. Escriba Si o No.";
  }
}

function guardarRestricciones() {
  let detalle = document
    .getElementById("detalleRestriccionesInput")
    .value.trim();

  if (detalle === "") {
    document.getElementById("mensajeRestricciones").innerHTML =
      "Debe describir la restricción médica.";
    return;
  }

  detalleRestricciones = detalle;
  guardarClienteFinal();
}

function guardarClienteFinal() {
  let nombre = document.getElementById("nombreInput").value;
  let documento = document.getElementById("documentoInput").value;
  let profesion = document.getElementById("profesionInput").value;
  let edad = Number(document.getElementById("edadInput").value);
  let peso = Number(document.getElementById("pesoInput").value);
  let estatura = Number(document.getElementById("estaturaInput").value);
  let estadoCivil = document.getElementById("estadoCivilInput").value;
  let eps = document.getElementById("epsInput").value;
  let direccion = document.getElementById("direccionInput").value;
  let telefono = document.getElementById("telefonoInput").value;

  // Cada cliente guarda su propio plan y sus propios datos de pago.
  let cliente = {
    nombre: nombre,
    documento: documento,
    profesion: profesion,
    edad: edad,
    peso: peso,
    estatura: estatura,
    estadoCivil: estadoCivil,
    eps: eps,
    direccion: direccion,
    telefono: telefono,
    acudiente: acudiente,
    restriccionesMedicas: detalleRestricciones,
    plan: plan,
    precioPlan: precio,
    precioFinal: precio,
    metodoPago: "No especificado",
    fechaPago: "No registrada",
  };

  clientes.push(cliente);

  document.getElementById("resultado_cliente").innerHTML = "";
  document.getElementById("resultado_cliente_final").innerHTML =
    "Cliente registrado: " +
    nombre +
    ", Documento: " +
    documento +
    ", Edad: " +
    edad +
    ", Plan: " +
    plan;
}

function mostrarMetodoPago() {
  document.getElementById("resultado_seleccion").innerHTML = "";
  document.getElementById("resultado_plan").innerHTML = "";
  document.getElementById("resultado_cliente").innerHTML = "";
  document.getElementById("resultado_cliente_final").innerHTML = "";
  document.getElementById("volver").innerHTML = "";
  document.getElementById("opcionPago").innerHTML =
    "¿Cómo desea pagar?<br />1. Efectivo<br />2. Tarjeta de crédito<br />3. Transferencia<br />4. Débito de nómina" +
    "<br /><input type='number' id='opcionPagoInput' placeholder='Ingrese el número de la opción'/> <button onclick='procesarPago()'>Procesar Pago</button>";
}

function procesarPago() {
  if (plan === "") {
    document.getElementById("resultado_seleccion").innerHTML =
      "Debe seleccionar un plan antes de elegir un método de pago.";
    return;
  }
  if (clientes.length === 0) {
    document.getElementById("resultado_seleccion").innerHTML =
      "Debe registrar al menos un cliente antes de elegir un método de pago.";
    return;
  }

  let opcionPago = Number(
    document.getElementById("opcionPagoInput").value.trim(),
  );

  // El pago se asigna al último cliente que fue registrado.
  let clienteActual = clientes[clientes.length - 1];
  let precioFinal = clienteActual.precioPlan;
  let metodoPago = "";

  if (opcionPago === 1) {
    precioFinal = clienteActual.precioPlan * 0.96;
    metodoPago = "Efectivo con descuento del 4%";
  } else if (opcionPago === 2) {
    precioFinal = clienteActual.precioPlan * 1.05;
    metodoPago = "Tarjeta de crédito con recargo del 5%";
  } else if (opcionPago === 3) {
    metodoPago = "Transferencia";
  } else if (opcionPago === 4) {
    metodoPago = "Débito de nómina";
  } else {
    document.getElementById("resultado_seleccion").innerHTML =
      "Opción de pago no válida.";
    return;
  }

  clienteActual.precioFinal = precioFinal;
  clienteActual.metodoPago = metodoPago;
  clienteActual.fechaPago = new Date();

  document.getElementById("resultado_seleccion").innerHTML =
    "Método de pago: " +
    metodoPago +
    ". Valor final del plan: $" +
    precioFinal.toFixed(2);
  document.getElementById("opcionPago").innerHTML = "";
}

function generarInforme() {
  document.getElementById("resultado_plan").innerHTML = "";
  document.getElementById("resultado_cliente").innerHTML = "";
  document.getElementById("resultado_cliente_final").innerHTML = "";
  document.getElementById("opcionPago").innerHTML = "";
  document.getElementById("volver").innerHTML = "";
  if (clientes.length === 0) {
    document.getElementById("resultado_seleccion").innerHTML =
      "No hay clientes registrados.";
    return;
  }

  let informe = "";

  // El for recorre todos los clientes guardados en el arreglo.
  for (let i = 0; i < clientes.length; i++) {
    let cliente = clientes[i];
    let imc = cliente.peso / (cliente.estatura * cliente.estatura);
    let clasificacionImc = "";
    let fechaPago = cliente.fechaPago;

    if (imc < 16) {
      clasificacionImc = "Delgadez severa";
    } else if (imc < 17) {
      clasificacionImc = "Delgadez moderada";
    } else if (imc < 18.5) {
      clasificacionImc = "Delgadez leve";
    } else if (imc < 25) {
      clasificacionImc = "Normal";
    } else if (imc < 30) {
      clasificacionImc = "Preobesidad";
    } else if (imc < 35) {
      clasificacionImc = "Obesidad leve";
    } else if (imc < 40) {
      clasificacionImc = "Obesidad media";
    } else {
      clasificacionImc = "Obesidad mórbida";
    }

    if (cliente.fechaPago !== "No registrada") {
      fechaPago = cliente.fechaPago.toLocaleDateString();
    }

    informe +=
      "<strong>Reporte del cliente " +
      (i + 1) +
      "</strong>" +
      "<br/>Nombre: " +
      cliente.nombre +
      "<br/>Documento: " +
      cliente.documento +
      "<br/>Edad: " +
      cliente.edad +
      "<br/>Peso: " +
      cliente.peso +
      " kg" +
      "<br/>Estatura: " +
      cliente.estatura +
      " m" +
      "<br/>IMC: " +
      imc.toFixed(2) +
      " - " +
      clasificacionImc +
      "<br/>Acudiente: " +
      cliente.acudiente +
      "<br/>Restricciones médicas: " +
      cliente.restriccionesMedicas +
      "<br/>Plan: " +
      cliente.plan +
      "<br/>Valor inicial del plan: $" +
      cliente.precioPlan.toFixed(2) +
      "<br/>Método de pago: " +
      cliente.metodoPago +
      "<br/>Valor final: $" +
      cliente.precioFinal.toFixed(2) +
      "<br/>Fecha de pago: " +
      fechaPago +
      "<br/><br/>";
  }

  document.getElementById("resultado_seleccion").innerHTML = informe;
  document.getElementById("volver").innerHTML =
    "La cantidad de clientes registrados es de: " +
    clientes.length +
    "<br/>Indique otra opción en el menú si desea continuar registrando otro cliente.";
}

function menu() {
  const seleccion_menu = Number(document.getElementById("opcion").value);
  switch (seleccion_menu) {
    case 1:
      elegirPlan();
      break;
    case 2:
      registrarCliente_input();
      break;
    case 3:
      mostrarMetodoPago();
      break;
    case 4:
      generarInforme();
      break;
    case 5:
      break;
    case 6:
      document.getElementById("resultado_seleccion").innerHTML =
        "Ha salido de la aplicación.";
      document.getElementById("resultado_plan").innerHTML = "";
      document.getElementById("resultado_cliente").innerHTML = "";
      document.getElementById("resultado_cliente_final").innerHTML = "";
      document.getElementById("opcionPago").innerHTML = "";
      document.getElementById("volver").innerHTML = "";
      plan = "";
      precio = 0;
      clientes = [];
      break;
    default:
      document.getElementById("resultado_seleccion").innerHTML =
        "Opción no válida. Por favor, seleccione una opción del menú.";
  }
}
