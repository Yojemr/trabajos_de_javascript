// Muestra dentro del menú la explicación de la opción seleccionada
function mostrarResultado(titulo, texto) {
    const resultadoAccion = document.getElementById("resultadoAccion");

    resultadoAccion.innerText = titulo + "\n" + texto;
}

// Devuelve la licorera a su contenido original
function restablecerPagina() {
    const contenedor = document.getElementById("contenedor");

    contenedor.innerHTML = `
        <h1 id="titulo">🍸<br>Licores de Marca</h1>
        <ul id="listaLicores">
            <li class="lista fondo-marron" id="oldpar">OldParr</li>
            <li class="lista fondo-naranja">Ginebra</li>
            <li class="lista fondo-marron" id="Buchanans">Buchanans</li>
            <li class="lista fondo-naranja">Chivas</li>
        </ul>
        <a id="enlaceTienda" href="https://www.microsoft.com/es-co/">Ir a Microsoft</a>
    `;

    mostrarResultado("Página restablecida", "La lista vuelve a tener sus cuatro licores y el enlace vuelve a Microsoft.");
}

// Ejercicios 0 al 4: búsquedas por clase y por nombre de etiqueta
function consultarElementos() {
    const lista = document.getElementsByClassName("lista");
    const elementosLi = document.getElementsByTagName("li");
    const fondoMarron = document.getElementsByClassName("fondo-marron");

    console.log("0. Colección de elementos con la clase lista:", lista);
    console.log("0. Cantidad de elementos:", lista.length);
    console.log("1. Primer elemento:", lista[0]);
    console.log("2. Id del tercer elemento:", lista[2].id);
    console.log("3. Elementos con etiqueta li:", elementosLi);
    console.log("4. Elementos de la clase fondo-marron:", fondoMarron);

    // Ejercicios 5 al 10: búsquedas mediante selectores CSS
    const oldParr = document.querySelector("#oldpar");
    const primerElemento = document.querySelector(".lista");
    const primerNaranja = document.querySelector(".lista.fondo-naranja");
    const naranjaDentroDeUl = document.querySelector("ul li.fondo-naranja");
    const primerNoMarron = document.querySelector("ul li:not(.fondo-marron)");
    const licoresNaranja = document.querySelectorAll(".lista.fondo-naranja");

    console.log("5. Elemento con id oldpar:", oldParr);
    console.log("6. Primer elemento de la clase lista:", primerElemento);
    console.log("7. Primer elemento lista y fondo-naranja:", primerNaranja);
    console.log("8. Primer fondo-naranja dentro del ul:", naranjaDentroDeUl);
    console.log("9. Primer li que no es marrón:", primerNoMarron);
    console.log("10. Todos los licores naranja:", licoresNaranja);

    mostrarResultado(
        "Puntos 0 al 10: consultas",
        "Se encuentran 4 elementos con la clase lista, el primer elemento es OldParr, el tercer elemento tiene el id Buchanans, existen 2 fondos marrones y 2 fondos naranja. querySelector devuelve la primera coincidencia y querySelectorAll devuelve un NodeList con las 2 coincidencias naranja."
    );
}

// Ejercicios 11 al 13: asignar estilos con JavaScript
function aplicarEstilos() {
    restablecerPagina();

    const primerLicor = document.querySelector(".lista");

    console.log("11. Propiedad style:", primerLicor.style);
    primerLicor.style.backgroundColor = "blue";
    primerLicor.style.color = "red";
    primerLicor.style.textTransform = "capitalize";
    primerLicor.style.border = "1px solid black";
    primerLicor.style.cursor = "pointer";
    primerLicor.style.width = "100%";
    primerLicor.style.height = "120px";
    primerLicor.style.visibility = "hidden";

    console.log("12 y 13. Estilos asignados:", primerLicor.style);
    mostrarResultado(
        "Puntos 11 al 13: estilos",
        "Se accede al estilo del primer licor y se cambian el fondo, el color del texto, el borde, el cursor, el ancho y el alto. visibility: hidden oculta a OldParr."
    );
}

// Ejercicios 14 al 18: acceder al texto y modificar el título
function trabajarTextos() {
    restablecerPagina();

    const listaLicores = document.getElementById("listaLicores");
    const titulo = document.getElementById("titulo");

    console.log("14. Lista completa:", listaLicores);
    console.log("15. Nombres con innerText:", listaLicores.innerText);
    console.log("16. Contenido con textContent:", listaLicores.textContent);
    console.log("17. Contenido con innerHTML:", listaLicores.innerHTML);

    titulo.innerText = "Marcas de Wisky";
    console.log("18. Título modificado:", titulo.innerText);

    mostrarResultado(
        "Puntos 14 al 18: texto",
        "innerText devuelve solamente los nombres visibles. textContent también conserva los espacios del HTML. innerHTML devuelve las etiquetas li. Finalmente, el título cambia a Marcas de Wisky."
    );
}

// Ejercicios 19 al 22: consultar y modificar el enlace
function trabajarEnlace() {
    restablecerPagina();

    const enlace = document.getElementById("enlaceTienda");

    console.log("19 y 20. Dirección inicial:", enlace.getAttribute("href"));
    enlace.removeAttribute("href");
    console.log("21. Dirección eliminada:", enlace.getAttribute("href"));
    enlace.setAttribute("href", "https://www.amazon.com/");
    console.log("22. Dirección actualizada:", enlace.getAttribute("href"));

    mostrarResultado(
        "Puntos 19 al 22: enlace",
        "getAttribute obtiene la dirección de Microsoft, removeAttribute elimina el href y setAttribute crea nuevamente el atributo con la dirección de Amazon."
    );
}

// Ejercicios 23 al 27: consultar, agregar y eliminar clases
function trabajarClases() {
    restablecerPagina();

    const primerLicor = document.querySelector(".lista");

    console.log("23. Clases iniciales:", primerLicor.classList);
    primerLicor.classList.add("importados-verdes");
    console.log("24 y 25. Clase agregada:", primerLicor.classList);
    console.log("26. ¿Tiene fondo-marron?", primerLicor.classList.contains("fondo-marron"));
    console.log("26. ¿Tiene fondo-azul?", primerLicor.classList.contains("fondo-azul"));
    primerLicor.classList.remove("lista");
    console.log("27. Clases finales:", primerLicor.classList);

    mostrarResultado(
        "Puntos 23 al 27: clases",
        "classList encuentra 2 clases iniciales. Se agrega importados-verdes. contains devuelve true para fondo-marron y false para fondo-azul. Después se elimina la clase lista de OldParr."
    );
}

// Ejercicios 28 y 29: crear un nuevo elemento li
function crearImportados() {
    restablecerPagina();

    const listaLicores = document.getElementById("listaLicores");
    const nuevoElemento = document.createElement("li");

    nuevoElemento.id = "importados";
    nuevoElemento.classList.add("lista", "fondo-marron");
    nuevoElemento.innerText = "Importados";
    listaLicores.append(nuevoElemento);

    console.log("28 y 29. Elemento creado:", nuevoElemento);
    mostrarResultado(
        "Puntos 28 y 29: crear elemento",
        "createElement crea un li vacío. Luego se agregan las clases lista y fondo-marron, se escribe Importados y append lo coloca al final de la lista."
    );
}

// Ejercicio 30: eliminar solamente el elemento Importados
function eliminarImportados() {
    const nuevoElemento = document.getElementById("importados");

    if (nuevoElemento) {
        nuevoElemento.remove();
        console.log("30. El elemento Importados fue eliminado.");
        mostrarResultado("Punto 30: eliminar elemento", "remove elimina del DOM el elemento Importados creado anteriormente.");
    } else {
        mostrarResultado("Punto 30: eliminar elemento", "Primero debes usar la opción Crear Importados para que exista el elemento.");
    }
}

// Ejercicio 31: eliminar todos los licores
function eliminarLista() {
    const listaLicores = document.getElementById("listaLicores");

    while (listaLicores.firstElementChild) {
        listaLicores.firstElementChild.remove();
    }

    console.log("31. La lista de licores quedó vacía.");
    mostrarResultado("Punto 31: eliminar la lista", "Se eliminan uno por uno todos los elementos li. El ul permanece en el HTML, pero queda vacío.");
}

// Asigna cada opción del menú a su ejercicio correspondiente
document.getElementById("botonConsultas").onclick = consultarElementos;
document.getElementById("botonEstilos").onclick = aplicarEstilos;
document.getElementById("botonTextos").onclick = trabajarTextos;
document.getElementById("botonEnlace").onclick = trabajarEnlace;
document.getElementById("botonClases").onclick = trabajarClases;
document.getElementById("botonCrear").onclick = crearImportados;
document.getElementById("botonImportados").onclick = eliminarImportados;
document.getElementById("botonLista").onclick = eliminarLista;
document.getElementById("botonRestablecer").onclick = restablecerPagina;

// Muestra en consola y en el menú el primer grupo al cargar la página
consultarElementos();
