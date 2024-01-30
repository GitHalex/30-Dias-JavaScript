/* function obtenerDiasEnMes(mes) {
  const mesesCon31Dias = [
    "enero",
    "marzo",
    "mayo",
    "julio",
    "agosto",
    "octubre",
    "diciembre",
  ];
  const mesesCon30Dias = ["abril", "junio", "septiembre", "noviembre"];

  mes = mes.toLowerCase();

  if (mesesCon31Dias.includes(mes)) {
    return 31;
  } else if (mesesCon30Dias.includes(mes)) {
    return 30;
  } else if (mes === "febrero") {
    return 28; // Supondremos 28 días para febrero (sin tener en cuenta años bisiestos)
  } else {
    return -1; // Valor de retorno para indicar un mes no válido
  }
}

// Solicitar al usuario un mes
const mesUsuario = prompt("Introduce un mes:");

// Obtener la cantidad de días en el mes ingresado por el usuario
const diasEnMes = obtenerDiasEnMes(mesUsuario);

// Mostrar el resultado
if (diasEnMes === -1) {
  console.log("Mes no válido. Por favor, introduce un mes válido.");
} else {
  console.log(`${mesUsuario} tiene ${diasEnMes} días.`);
} */

function tabla5() {
  const tabla = [];
  for (let i = 1; i <= 10; i++) {
    tabla.push(5 * i);
  }
  console.log(tabla);
}

tabla5();
