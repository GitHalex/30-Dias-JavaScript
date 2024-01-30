// #1 Modifique la función userIdGenerator. Declare una función de nombre userIdGeneratedByUser. No toma ningún parámetro pero toma dos entradas usando prompt(). Una de las entradas es la cantidad de caracteres y la segunda entrada es la cantidad de ID que se supone que se generarán.

/* const userIdGeneratorByUser = () => {
  const cantidad = parseInt(prompt("Ingrese la cantidad de caracteres por ID"));
  const idCantidad = parseInt(prompt("Ingrese la cantidad de IDs a generar: "));
  let caracteres =
    "ABCDEFGHIJKLMNOPQRSTUWXYZabdefghijklmnopqrstuwxyz0123456789";
  let ids = "";
  for (let index = 0; index < idCantidad; index++) {
    let id = "";
    for (let i = 0; i < cantidad; i++) {
      let caracter = Math.floor(Math.random() * caracteres.length);
      id += caracteres[caracter];
    }
    ids += id + "\n"
  }
  return ids;
};
console.log(userIdGeneratorByUser()); */

// #2 Escriba una función llamada rgbColorGenerator que genera colores rgb
/* const rgbColorGenerator = () => {
  let primero = Math.floor(Math.random() * 255);
  let segundo = Math.floor(Math.random() * 255);
  let tercero = Math.floor(Math.random() * 255);
  // return `rgb(${primero},${segundo},${tercero})`;
  return `rgb(${primero}, ${segundo}, ${tercero})`;
};
console.log(rgbColorGenerator()); */

// #3 Escriba una función arrayOfHexaColors que retorna cualquier cantidad de colores hexadecimales en un array.
/* const arrayOfHexaColors = () => {
  const arrayHex = [];
  const caracteres = "abcdef0123456789";
  const cantidad = Math.floor(Math.random() * 10) + 1;
  for (let i = 0; i < cantidad; i++) {
    let hexadecimal = "#";
    for (let index = 0; index < 6; index++) {
      let caracter = Math.floor(Math.random() * caracteres.length);
      hexadecimal += caracteres[caracter];
    }
    arrayHex.push(hexadecimal);
  }
  return arrayHex;
};
console.log(arrayOfHexaColors()); */

// #4 Escriba una función arrayOfRgbColors que retorna cualquier cantidad de colores RGB en un array.
/* const arrayOfRgbColors = () => {
  const arrayColors = [];

  let cantidadDeRgb = Math.floor(Math.random() * 10) + 1;
  for (let i = 0; i < cantidadDeRgb; i++) {
    let primero = Math.floor(Math.random() * 255);
    let segundo = Math.floor(Math.random() * 255);
    let tercero = Math.floor(Math.random() * 255);
    let rgb = `rgb(${primero}, ${segundo}, ${tercero})`;
    arrayColors.push(rgb);
  }
  return arrayColors;
};
console.log(arrayOfRgbColors()); */

// #5 Escriba una función convertHexaToRgb que convierta el color hexa a rgb y retorna un color rgb.
/* const convertHexaToRgb = (hexColor) => {
  // Elimina el "#" si está presente
  hexColor = hexColor.replace(/^#/, "");
  // Convierte el color hexadecimal a valores RGB
  let r = parseInt(hexColor.substring(0, 2), 16);
  let g = parseInt(hexColor.substring(2, 4), 16);
  let b = parseInt(hexColor.substring(4, 6), 16);
  return `rgb(${r}, ${g}, ${b})`;
};
const hexColor = "#1a2b4f";
console.log(convertHexaToRgb(hexColor)); */

// #6 Escriba una función convertRgbToHexa que convierta rgb a color hexa y retorna un color hexa.
/* const convertRgbToHexa = (rgbColor) => {
  // Extrae los valores R, G y B del formato RGB
  const match = rgbColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  if (!match) {
    return null;
  }
  // Convierte los valores R, G y B a hexadecimal y concatena
  const hexColor = match
    .slice(1)
    .map((value) => {
      const hex = parseInt(value).toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");

  // Agrega el "#" al inicio del color hexadecimal
  return "#" + hexColor;
};
const rgbColor = "rgb(26, 43, 60)";
console.log(convertRgbToHexa(rgbColor)); */

// #7 Escriba una función generateColors que pueda generar cualquier número de colores hexa o rgb.

// #8 Llame a su función shuffleArray, toma un array como parámetro y devuelve un array mezclada
/* const shuffleArray = (array) => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

// Ejemplo de uso
const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(originalArray);
console.log(shuffledArray); */

// #9 Llame a su función factorial, toma un número entero como parámetro y devuelve un factorial del número.

/* function facto(numero) {
  let num = 1;
  for (let i = 1; i <= numero; i++) {
    num *= i;
  }
  return num;
}
console.log(facto(3)); */

// #10 Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no.

/* function isEmpty(parametro) {
  if (parametro === undefined || parametro === null || parametro === "") {
    return "Vacio";
  } else {
    return parametro;
  }
}
console.log(isEmpty());
console.log(isEmpty(5)); */

// #11 Llame a su función sum, toma cualquier cantidad de argumentos y devuelve la suma.
/* const sum = (...args) => {
  let suma = 0;
  for (const num of args) {
    suma += num;
  }
  return suma;
};
console.log(sum(1, 2, 3, 4)); */

// #12 Escriba una función llamada sumOfArrayItems, toma un array como parámetro y retorna la suma de todos los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta razonable.
/* const sumaOfArrayItems = (arreglo) => {
  let sumaElementos = 0;
  for (const numero of arreglo) {
    sumaElementos += numero;
  }
  return sumaElementos;
};
const valores = [1, 2, 3, 4];
console.log(sumaOfArrayItems(valores)); */

// #13 Escribe una función llamada average, toma un array como parámetro y retorna el promedio de los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta adecuada.
/* const average = (arreglo) => {
  let promedio = 0;
  let suma = 0;
  let tamanio = 0;
  for (const numero of arreglo) {
    if (typeof numero !== "number") {
      return "El arreglo tiene un elemento que no es numero!!!!!";
    } else {
      suma += numero;
      tamanio += 1;
    }
  }
  promedio = suma / tamanio;
  return promedio;
};

const arreglo = [10, 10, 9, 10, 0];
console.log(average(arreglo)); */

// #14 Escriba una función llamada modifyArray que tome un array como parámetro y modifique el quinto elemento del array y retorna el array. Si la longitud del array es inferior a cinco, retorna 'elemento no encontrado'.
/* const modifyArray = (arreglo) => {
  let tamanio = arreglo.length;
  if (tamanio < 5) {
    return "Not Found";
  } else {
    for (let i = 0; i < tamanio; i++) {
      if (i == 4) {
        arreglo[i] = arreglo[i].toUpperCase();
      }
    }
  }
  return arreglo;
};
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);
console.log(
  modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft", "IBM"])
);
console.log(modifyArray(["Google", "Facebook", "Apple", "Amazon"])); */

// #15 Escribe una función llamada isPrime, que verifica si un número es un número primo.
/* const isPrime = (numero) => {
  if (numero < 2) {
    return `El numero ${numero} no es primo`;
  }
  for (let index = 2; index <= Math.sqrt(numero); index++) {
    if (numero % index === 0) {
      return `el numero ${numero} no es primo`;
    }
  }
  return `EL NUMERO: ${numero} ES PRIMO`;
};
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(4)); */

// #16 Escriba una función que verifique si todos los elementos son únicos en un array.
/* const sonUnicos = (arreglo) => {
  for (let i = 0; i < arreglo.length; i++) {
    for (let j = i + 1; j < arreglo.length; j++) {
      if (arreglo[i] === arreglo[j]) {
        return false;
      }
    }
  }
  return true;
};
console.log(sonUnicos([1, 2, 3, 4, 5])); 
console.log(sonUnicos([1, 2, 3, 4, 1]));  */

// #17 Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos.
/* const tiposIguales = (arreglo) => {
  if (arreglo.length === 0) {
    return "El arreglo esta vacio";
  }
  const arregloAux = [];
  const TipoBase = typeof arreglo[0];
  for (const elemento of arreglo) {
    if (typeof elemento !== TipoBase) {
      return "Los elementos no tienen el mismo tipo";
    }
    arregloAux.push(typeof elemento);
  }
  return arregloAux;
  return "Todos los elementod son del mismo tipo"
};
console.log(tiposIguales(["hola"]));
console.log(tiposIguales([1, 2, 3])); */

// #18 El nombre de las variables de JavaScript no admite caracteres o símbolos especiales, excepto $ o _. Escriba una función isValidVariable que verifique si una variable es válida o inválida.
/* const isValidVariable = (variable) => {
  const caracteresPermitidos = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  if (!variable.match(caracteresPermitidos)) {
    return "La variable contiene caracteres no permitidos.";
  }

  return "La variable es válida.";
};
console.log(isValidVariable("2ale"));
console.log(isValidVariable("$variable1")); 
console.log(isValidVariable("variable@2")); */

// #19 Escriba una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos.
/* const arrayUnicos = () => {
  const arreglo = [];
  for (let index = 0; index < 7; index++) {
    arreglo.push(Math.floor(Math.random() * 11));
  }
  for (let i = 0; i < arreglo.length; i++) {
    for (let j = i + 1; j < arreglo.length; j++) {
      if (arreglo[i] === arreglo[j]) {
        r;
      }
    }
    return arreglo;
  }
};
console.log(arrayUnicos()); */
const arrayUnicos = () => {
  const arreglo = [];

  // Genera un array con siete números aleatorios únicos en el rango de 0-9
  while (arreglo.length < 7) {
    const numeroAleatorio = Math.floor(Math.random() * 10);
    if (!arreglo.includes(numeroAleatorio)) {
      arreglo.push(numeroAleatorio);
    }
  }

  return arreglo;
};

console.log(arrayUnicos());

// #20 Escriba una función llamada reverseCountries, toma el array de países y primero copia el array y retorna el array original invertido
