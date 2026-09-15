const responsable = document.getElementById("ingresar-responsable");
const input = document.getElementById("ingresar-tarea");
let listaDeTareas = document.getElementById("lista-de-tareas");

let contador = 0;

function agregarTarea() {

  const nombreResponsable = responsable.value.trim();
  const textoTarea = input.value.trim();

  if (nombreResponsable === "" || textoTarea === "") {
    alert("Por favor ingresa el responsable y la tarea.");
    return;
  }
  
  // ID único para esta tarea
  const id = Date.now();
  
  // Contenedor principal
  const tareaNueva = document.createElement("div");
  tareaNueva.id = "tarea-" + id;
  tareaNueva.className = "tarea";

  // Aumentar contador de tareas
  contador++;

  // Número de tarea
  const numeroTarea = document.createElement("p");
  numeroTarea.id = "contador-" + id;
  numeroTarea.innerText = "Tarea #" + contador;

  // Responsable
  const responsableContenedor = document.createElement("div");
  responsableContenedor.id = "responsable-" + id;

  const textoResponsable = document.createElement("h3");
  textoResponsable.innerText = "Responsable de la tarea: " + nombreResponsable;
  // Porcentaje
  const porcentaje = document.createElement("p");
  porcentaje.id = "porcentaje-" + id;
  porcentaje.innerText = "0%";

  // Barra de progreso
  const progreso = document.createElement("input");
  progreso.className = "barra-contenedor";
  progreso.id = "progreso-" + id;
  progreso.type = "range";
  progreso.min = "0";
  progreso.max = "100";
  progreso.value = "0";

  progreso.oninput = function () {
    porcentaje.innerText = progreso.value + "%";
  };

  responsableContenedor.append(
    textoResponsable,
    porcentaje,
    progreso
  );

  // Texto de la tarea
  const texto = document.createElement("p");
  texto.id = "texto-" + id;
  texto.innerText = textoTarea;

  // Iconos
  const iconos = document.createElement("div");
  iconos.id = "iconos-" + id;

  // Fecha
  const fecha_temporal = document.createElement("p");
  fecha_temporal.id = "fecha-" + id;

  const fechaCreacion = new Date();

  fecha_temporal.innerText =
    "Fecha de creación: " + fechaCreacion.toLocaleString();

  // Completar
  const completar = document.createElement("i");
  completar.id = "completar-" + id;
  completar.className =
    "bi bi-check-circle-fill icono-completar";
  completar.title = "Completar tarea";
  completar.onclick = completarTarea;

  // Eliminar
  const eliminar = document.createElement("i");
  eliminar.id = "eliminar-" + id;
  eliminar.className =
    "bi bi-trash3-fill icono-eliminar";
  eliminar.title = "Eliminar tarea";

  eliminar.onclick = function (evento) {
    eliminarTarea(evento);
  };

  iconos.append(completar, eliminar);

  tareaNueva.append(
    numeroTarea,
    responsableContenedor,
    texto,
    fecha_temporal,
    iconos
  );

  listaDeTareas.appendChild(tareaNueva);

  responsable.value = "";
  input.value = "";

  responsable.focus();
}


// Cuenta regresiva hacia una fecha específica
const fechaObjetivo = new Date("2026-0930T23:59:59");

function actualizarCuentaRegresiva() {
  const ahora = new Date();
  const diferencia = fechaObjetivo - ahora;

  const fecha_visible = document.getElementById("fecha-visible");

  if (diferencia <= 0) {
    fecha_visible.innerText = "¡El tiempo se ha terminado!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencia / (1000 * 60 * 60)) % 24
  );
  const minutos = Math.floor(
    (diferencia / (1000 * 60)) % 60
  );
  const segundos = Math.floor(
    (diferencia / 1000) % 60
  );

  fecha_visible.innerText =
    `Faltan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos para el pago de Sofka`
}

setInterval(actualizarCuentaRegresiva, 1000);
actualizarCuentaRegresiva();

// Completar tarea
function completarTarea(evento) {

  const id = evento.target.id.replace("completar-", "");

  const progreso = document.getElementById("progreso-" + id);
  const porcentaje = document.getElementById("porcentaje-" + id);
  const tarea = document.getElementById("tarea-" + id);

  if (progreso.value == 100) {
    progreso.value = 0;
    porcentaje.innerText = "0%";
    tarea.style.textDecoration = "none";

  } else {
    progreso.value = 100;
    porcentaje.innerText = "100%";
    tarea.style.textDecoration = "line-through";
  }
}


// Eliminar tarea
function eliminarTarea(evento) {

  const id = evento.target.id.replace("eliminar-", "");
  const tarea = document.getElementById("tarea-" + id);

  tarea.remove();
}
