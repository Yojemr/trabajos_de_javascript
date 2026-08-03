// Definir la fecha del día
const fechaActual = new Date();
document.write(`Fecha: ${fechaActual.toLocaleDateString()}<br>`);

// Solicitar las variables de entrada
let vendedor = prompt("Ingrese el nombre del vendedor:");
let venta1 = parseFloat(prompt("Ingrese el monto de la primera venta:"));
let venta2 = parseFloat(prompt("Ingrese el monto de la segunda venta:"));
let venta3 = parseFloat(prompt("Ingrese el monto de la tercera venta:"));
let iva = 0.19;

// Calcular el total de ventas
let mayorVenta = Math.max(venta1, venta2, venta3);
let menorVenta = Math.min(venta1, venta2, venta3);
let totalVentas = venta1 + venta2 + venta3;
let promedioVentas = totalVentas / 3;
let ivaPesos = totalVentas * iva;

// Mostrar los resultados
document.write(
  `El total de ventas del vendedor ${vendedor} es: $${totalVentas}`,
);
document.write(`<br>El promedio de ventas es: $${promedioVentas}`);
document.write(`<br>La mayor venta es: $${mayorVenta}`);
document.write(`<br>La menor venta es: $${menorVenta}`);
document.write(`<br>El IVA es de: $${ivaPesos}`);