// Selección de los elementos principales del HTML
const input = document.getElementById("ingresar-tarea");
const boton = document.getElementById("boton-crear");
const listaDeTareas = document.getElementById("lista-de-tareas");
const resultadoAccion = document.getElementById("resultadoAccion");

// Muestra en el menú la explicación y el resultado de una opción
function mostrarResultado(titulo, explicacion, resultado) {
  resultadoAccion.innerText = titulo + "\n\nQué hace: " + explicacion + "\n\nResultado: " + resultado;
}

// Crea una tarea con el texto escrito por el usuario
function agregarTarea() {
  if (input.value) {
    // Crear el contenedor de la tarea
    let tareaNueva = document.createElement("div");
    tareaNueva.classList.add("tarea");

    // Agregar el texto ingresado
    let texto = document.createElement("p");
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);

    // Crear el contenedor de los iconos
    let iconos = document.createElement("div");
    iconos.classList.add("iconos");
    tareaNueva.appendChild(iconos);

    // Crear el icono para completar la tarea
    let completar = document.createElement("i");
    completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
    completar.title = "Completar tarea";
    completar.onclick = completarTarea;

    // Crear el icono para eliminar la tarea
    let eliminar = document.createElement("i");
    eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
    eliminar.title = "Eliminar tarea";
    eliminar.onclick = eliminarTarea;

    iconos.append(completar, eliminar);

    // Agregar la tarea terminada a la lista
    listaDeTareas.appendChild(tareaNueva);
  } else {
    alert("Por favor ingresa una tarea.");
  }
}

// Marca o desmarca una tarea como completada
function completarTarea(evento) {
  let tarea = evento.target.parentNode.parentNode;
  tarea.classList.toggle("completada");
}

// Elimina del DOM solamente la tarea seleccionada
function eliminarTarea(evento) {
  let tarea = evento.target.parentNode.parentNode;
  tarea.remove();
}

// Permite crear una tarea con el botón o con la tecla Enter
boton.onclick = agregarTarea;

input.onkeydown = function (evento) {
  if (evento.key === "Enter") {
    agregarTarea();
  }
};

// Opciones que explican las primeras secciones del taller
document.getElementById("opcionEstructura").onclick = function () {
  mostrarResultado(
    "Puntos 1 al 9: estructura HTML",
    "Organizan index.html, styles.css, app.js y la carpeta imagenes; también enlazan el favicon, los estilos y el script.",
    "La página tiene un título, un campo, un botón y un contenedor vacío donde aparecerán las tareas."
  );
};

document.getElementById("opcionEstilos").onclick = function () {
  mostrarResultado(
    "Puntos 10 al 12: estilos CSS",
    "Aplican el fondo, centran el contenedor y definen la apariencia del título, el campo, el botón, las tareas y sus estados.",
    "La lista queda dentro de una tarjeta blanca y cada tarea nueva aparece en azul."
  );
};

document.getElementById("opcionBootstrap").onclick = function () {
  mostrarResultado(
    "Punto 13: Bootstrap",
    "Enlaza Bootstrap y Bootstrap Icons mediante CDN, sin instalar paquetes en el equipo.",
    "Los iconos de completar y eliminar se muestran dentro de cada tarea."
  );
};

document.getElementById("opcionElementos").onclick = function () {
  console.log("Campo de texto:", input);
  console.log("Botón:", boton);
  console.log("Lista de tareas:", listaDeTareas);

  mostrarResultado(
    "Punto 14: seleccionar el DOM",
    "getElementById guarda en variables el campo, el botón y la lista para poder modificarlos desde JavaScript.",
    "Se encontraron correctamente los tres elementos y también se imprimieron en la consola."
  );
};

// Opciones prácticas para comprobar las funciones principales
document.getElementById("opcionCrear").onclick = function () {
  input.value = "Estudiar JavaScript";
  agregarTarea();

  mostrarResultado(
    "Prueba: crear con clic",
    "Escribe una tarea y ejecuta la misma función asignada al botón Crear Tarea.",
    "Se agregó la tarea Estudiar JavaScript."
  );
};

document.getElementById("opcionEnter").onclick = function () {
  input.value = "Practicar eventos";
  agregarTarea();

  mostrarResultado(
    "Prueba: crear con Enter",
    "El evento keydown revisa si la tecla presionada es Enter y, cuando lo es, llama a agregarTarea.",
    "Se agregó la tarea Practicar eventos, igual que al presionar Enter en el campo."
  );
};

document.getElementById("opcionCompletar").onclick = function () {
  let primeraTarea = document.querySelector(".tarea");

  if (primeraTarea) {
    primeraTarea.classList.toggle("completada");
    mostrarResultado(
      "Prueba: completar tarea",
      "classList.toggle agrega o quita la clase completada de la primera tarea.",
      "La primera tarea cambió entre pendiente y completada."
    );
  } else {
    mostrarResultado(
      "Prueba: completar tarea",
      "Busca la primera tarea para cambiar su clase.",
      "No hay tareas. Primero crea una."
    );
  }
};

document.getElementById("opcionEliminar").onclick = function () {
  let tareas = document.querySelectorAll(".tarea");

  if (tareas.length > 0) {
    tareas[tareas.length - 1].remove();
    mostrarResultado(
      "Prueba: eliminar tarea",
      "remove quita del DOM la última tarea que aparece en la lista.",
      "La última tarea fue eliminada."
    );
  } else {
    mostrarResultado(
      "Prueba: eliminar tarea",
      "Busca la última tarea para retirarla.",
      "No hay tareas para eliminar."
    );
  }
};

document.getElementById("opcionRestablecer").onclick = function () {
  listaDeTareas.innerHTML = "";
  input.value = "";

  mostrarResultado(
    "Lista restablecida",
    "Vacía el contenedor de tareas y limpia el campo de texto.",
    "La página volvió a su estado inicial."
  );
};

// Mensaje inicial del menú
mostrarResultado(
  "Proyecto de tareas pendientes",
  "Manipula el DOM para crear, completar y eliminar tareas.",
  "La aplicación está lista para recibir una tarea."
);
