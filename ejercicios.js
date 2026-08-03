//Datos de entrada
alert(`Hola, usuario!`);
let base = parseFloat(prompt("Ingrese la base del rectángulo o numero 1:"));
let altura = parseFloat(prompt("Ingrese la altura del rectángulo o numero 2:"));

//Calculos
let area = (base * altura);
let perimetro = 2 * (base + altura);

//Imprimir resultados
if (isNaN(base) || isNaN(altura)) {
  alert("Por favor, ingrese valores numéricos válidos.");
}
else {
document.write(`El area del rectángulo es: ${area}<br>`);
document.write(`El perimetro del rectángulo es: ${perimetro}<br>`);
document.write(`La suma de los dos numeros es: ${base + altura}<br>`);
document.write(`La resta de los dos numeros es: ${base - altura}<br>`);
document.write(`La multiplicacion de los dos numeros es: ${base * altura}<br>`);
document.write(`La division de los dos numeros es: ${base / altura}<br>`);
}