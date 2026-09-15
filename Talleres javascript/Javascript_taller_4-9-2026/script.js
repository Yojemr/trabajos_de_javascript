// Constante para tasa de impuestos IVA (19% expresados en formato decimal)

const PORCENTAJE_IVA = 0.19;

//1. SELECCIÓN DE ELEMENTOS DEL DOM

const inputProducto = document.getElementById('inputProducto');
const inputCantidad = document.getElementById('inputCantidad');
const inputPrecio = document.getElementById('inputPrecio');

// Referencia al botón principal de la acción

const btnAgregar = document.getElementById('btnAgregar');

// Referencia a elementos contenedores de la tabla y estados vacíos
// Contenedor tbody donde se insertarán las filas tr
// Mensaje que informa cuando la tabla no contiene productos

const cuerpoTabla = document.getElementById('cuerpoTabla');
const mensajeVacio = document.getElementById('mensajeVacio');

// Referencia etiquetas span donde se renderizarán los montos calculados
const montoSubtotal = document.getElementById('montoSubtotal');
const montoIva = document.getElementById('montoIva');
const montoTotal = document.getElementById('montoTotal');


let subtotalAcumulado = 0;

// Funciones auxiliares de vistas
/**
 * @param {number} Valor
 * @return {string}
 */

function formatearMoneda(Valor) {
    return '$' + Valor.toFixed(2);
}

function actualizarVista() {
    // Alterna la visibilidad del aviso de tabla vacía
    // según si existen filas (hijos) en tbody
    if (cuerpoTabla.children.length == 0) {
        mensajeVacio.style.display = 'block'; // Muestra el mensaje cuando no hay items
    } else {
        mensajeVacio.style.display = 'none'; // Oculta el mensaje si hay al menos un producto
    }

    // operaciones de matemáticas para derivar el IVA y total

    const iva = subtotalAcumulado * PORCENTAJE_IVA; // Calcula el 19% del subtotal
    const total = subtotalAcumulado + iva;

    // Renderiza los valores formateados dentro de las etiquetas correspondientes
    montoSubtotal.textContent = formatearMoneda(subtotalAcumulado);
    montoIva.textContent = formatearMoneda(iva);
    montoTotal.textContent = formatearMoneda(total);
}

// Registrar el evento 'click' sobre el botón de agregar producto

btnAgregar.addEventListener('click', () => {
    // Captura y saneamiento de los datos ingresados en los campos de entrada

    const nombreProducto = inputProducto.value.trim();
    const cantidad = parseInt(inputCantidad.value);
    const precio = parseFloat(inputPrecio.value);

    // Validaciones de entrada
    if (!nombreProducto) {
        alert('por favor ingresa la descripción del producto');
        inputProducto.focus(); // Devuelve el foco al campo de texto
        return;
    }

    if (isNaN(cantidad) || cantidad <= 0) {
        alert('por favor, ingrese una cantidad válida mayor a 0');
        inputCantidad.focus();
        return;
    }

    if (isNaN(precio) || precio <= 0) {
        alert('por favor, ingrese un precio unitario válido mayor a 0');
        inputPrecio.focus();
        return;
    }

    // CALCULO INDIVIDUAL Y ESTADO
    const subtotalItem = cantidad * precio;
    subtotalAcumulado += subtotalItem;

    // CREACIÓN DINÁMICA DE ELEMENTOS DEL DOM

    const fila = document.createElement('tr');

    // Define las celdas y contenido dinamico usando cadenas de plantilla (template literals)
    fila.innerHTML = `
    <td>${nombreProducto}</td>
    <td class="text-center">${cantidad}</td>
    <td class="text-right">${formatearMoneda(precio)}</td>
    <td class="text-right">${formatearMoneda(subtotalItem)}</td>
    <td class="text-center"><button class="btn btn-delete">Eliminar</button></td>`;

    //inserta la fila construida al final del contenedor tbody
    cuerpoTabla.appendChild(fila);

    //EVENTO PARA ELIMINAR

    //Busca el boton eliminar recien creado dentro del ambito de esta fila especifica

    const btnEliminar = fila.querySelector('.btn-delete');

    //Asigna el evento de elimanacion dedicado unicamnente a la fila actual

    btnEliminar.addEventListener('click', () => {
        fila.remove(); //Quita el elemento tr de la interfaz
        subtotalAcumulado -= subtotalItem;

        if (subtotalAcumulado < 0) subtotalAcumulado = 0; // Evita valores negativos

        actualizarVista(); // Actualiza la visibilidad del mensaje de tabla vacía
    });

    //limpieza de los campos de entrada en el formulario
    inputProducto.value = '';
    inputCantidad.value = '';
    inputPrecio.value = '';

    // Posiciona el cursor de nuevo en el primer campo para facilitar la escritura continua
    inputProducto.focus();

    //Actualiza los totales en pantalla tras la adicion del nuevo elemento
    actualizarVista();
});

//INICIALIZACION

//Llama a la funcion al cargar el script para preparar la interfaz en su estado inicial
actualizarVista();