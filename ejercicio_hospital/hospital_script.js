// Definir el régimen del paciente
let esSubsidiado = confirm(
  "¿El paciente pertenece al régimen subsidiado? (Aceptar = Sí, Cancelar = No)",
);

// Calcular los gastos
function calcularGastos() {
  const fechaActual = new Date();
  let documentoPaciente = document.getElementById("documentoPaciente").value;
  let nombrePaciente = document.getElementById("nombrePaciente").value;
  let medicamentos = document.getElementById("medicamentos").value * 1;
  let hospitalizacion = document.getElementById("hospitalizacion").value * 1;
  let cirugia = document.getElementById("cirugia").value * 1;
  let examenes = document.getElementById("examenes").value * 1;
  let totalGastos = medicamentos + hospitalizacion + cirugia + examenes;

  // Calcular el valor a pagar según el régimen
  let valorPagar;
  if (esSubsidiado) {
    valorPagar = totalGastos * 0.2;
  } else {
    valorPagar = totalGastos;
  }

  let promedioGastos = totalGastos / 4;
  let mayorGasto = Math.max(
    medicamentos,
    hospitalizacion,
    cirugia,
    examenes,
  );
  let menorGasto = Math.min(
    medicamentos,
    hospitalizacion,
    cirugia,
    examenes,
  );

  document.getElementById("Resultados").innerHTML = `
    <p>Fecha de atención: ${fechaActual.toLocaleDateString()}</p>
    <p>Documento del paciente: ${documentoPaciente}</p>
    <p>Nombre del paciente: ${nombrePaciente}</p>
    <p>Total de gastos: ${totalGastos}</p>
    <p>Promedio de gastos: ${promedioGastos}</p>
    <p>Mayor gasto: ${mayorGasto}</p>
    <p>Menor gasto: ${menorGasto}</p>
    <p>Valor a pagar: ${valorPagar}</p>
  `;
}