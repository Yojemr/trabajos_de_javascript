// Crea una explicación visible dentro del menú plegable
function mostrarRespuesta(numero, accion, resultado) {
    const respuestas = document.getElementById("respuestas");
    const bloque = document.createElement("div");
    const tituloRespuesta = document.createElement("strong");
    const explicacion = document.createElement("p");
    const respuestaFinal = document.createElement("span");

    bloque.className = "respuesta";
    tituloRespuesta.innerText = "Punto " + numero;
    explicacion.innerText = "Qué hace: " + accion;
    respuestaFinal.innerText = "Respuesta: " + resultado;

    bloque.append(tituloRespuesta, explicacion, respuestaFinal);
    respuestas.append(bloque);
}

// Ejercicios 15 al 18: acceder al contenedor y a su contenido
const contenedor = document.getElementById("contenedor");

console.log("15. Elemento contenedor:", contenedor);
console.log("16. El navegador devuelve el div completo:", contenedor);
console.log("17. Contenido interno del contenedor:", contenedor.innerHTML);
console.log("18. Tipo de dato de innerHTML:", typeof contenedor.innerHTML);

mostrarRespuesta(15, "Busca el contenedor mediante su id.", "Devuelve el elemento div con id contenedor.");
mostrarRespuesta(16, "Muestra en la consola el elemento encontrado.", "Se observa el div completo con todo su contenido.");
mostrarRespuesta(17, "Consulta la propiedad innerHTML del contenedor.", "Devuelve las etiquetas y el contenido HTML que están dentro del div.");
mostrarRespuesta(18, "Consulta el tipo de dato de innerHTML.", "Devuelve string porque el contenido HTML se representa como texto.");

// Ejercicios 19 al 21: acceder al título y a sus propiedades
const titulo = document.getElementById("titulo");

console.log("19. Elemento título:", titulo);
console.log("19. Tipo de dato del elemento:", typeof titulo);
console.log("20. Texto del título:", titulo.innerText);
console.log("20. Tipo de dato de innerText:", typeof titulo.innerText);
console.log("21. Nombre de la etiqueta:", titulo.tagName);
console.log("21. Tipo de dato de tagName:", typeof titulo.tagName);

mostrarRespuesta(19, "Busca el título mediante su id.", "Devuelve el elemento h1; typeof indica object.");
mostrarRespuesta(20, "Consulta el texto visible con innerText.", "Devuelve '🍸 Licores de Marca' y su tipo es string.");
mostrarRespuesta(21, "Consulta el nombre de la etiqueta con tagName.", "Devuelve H1 y su tipo es string.");

// Ejercicio 22: buscar un identificador que no existe
const tituloInexistente = document.getElementById("titulow");

console.log("22. Resultado cuando el id no existe:", tituloInexistente);
mostrarRespuesta(22, "Busca un id que no está escrito en el HTML.", "getElementById devuelve null.");
