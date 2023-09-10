// 1.- Declare una función fullName e imprima su nombre completo.

/* function fullName() {
  let name = "Alex Hanyinson";
  let apellido = "Calcina Bernal";
  console.log(`${name} ${apellido}`);
}
console.log(fullName()); */

/* const nombre = () => {
  let name = "Alex";
  let apellido = "Calcina";
  let fullName = `Mi nombre es: ${name} y mi apellido es: ${apellido}`;
  return fullName;
};
console.log(nombre()); */

// 2.-Declare una función fullName y ahora toma firstName, lastName como parámetro y retorna su nombre completo.
/* const fullName = function (nombre, apellido) {
  return `Mi nombre es: ${nombre} y mi apellido es: ${apellido}`;
};
console.log(fullName("Alex", "Calcina")); */

/* const fullName = (nombre, apellido) => {
  return `Mi nombre es: ${nombre} y mi apellido es: ${apellido}`;
};
console.log(fullName("Alex", "Calcina")); */

// 3.-Declare una función addNumbers que toma dos parámetros y retorna la suma de ambos.

/* function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(2, 3)); */

/* const addNumbers = (num1, num2) => num1 + num2;
console.log(`La suma de dos numeros es: ${addNumbers(2, 3)}`); */

//4.-El área de un rectángulo se calcula de la siguiente manera: area = length x width. Escribe una función areaOfRectangle que calcule el área de un rectángulo.
/* function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
console.log(areaOfRectangle(2, 2)); */

/* const areaOfRectangle = (length, width) => length * width;
console.log(areaOfRectangle(3, 4)); */

//5.-El perímetro de un rectángulo se calcula de la siguiente manera: perimeter= 2x(length + width). Escribe una función perimeterOfRectangle que calcule el perímetro de un rectángulo.
/* function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  return `El perimetro de un rectangulo es: ${perimeter}`;
}
console.log(perimeterOfRectangle(3, 3)); */

/* const perimeterOfRectangle = (length, width) => {
  let perimeter = 2 * (length + width);
  return `El perimetro de un rectangulo es: ${perimeter}`;
};
console.log(perimeterOfRectangle(3, 3)); */

//6.-El volumen de un prisma rectangular se calcula de la siguiente manera: volume = length x width x height. Escribe una función volumeOfRectPrism que calcule el volumen de un prisma.
/* function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height + " cm^3";
  return volume;
}
console.log(volumeOfRectPrism(3, 2, 4)); */
/* const volumeOfRectPrism = (length, width, height) =>
  `Volumen es: ${length * width * height}`;
console.log(volumeOfRectPrism(3, 2, 4)); */

//7.-El área de un círculo se calcula de la siguiente manera: area = π x r x r. Escribe una función areaOfCircle que calcule el área de un círculo.
/* function areaOfCircle(radio) {
  return Math.PI * radio ** 2;
}
console.log(areaOfCircle(3)); */
/* const areaOfCircle = (radio) => Math.PI * radio ** 2;
console.log(areaOfCircle(3)); */

//8.-La circunferencia de un círculo se calcula de la siguiente manera: circumference = 2πr. Escribe una función circumOfCircle que calcule la circunferencia de un círculo.
/* function circumOfCircle(radio) {
  return 2 * Math.PI * radio;
}
console.log(circumOfCircle(3)); */
/* const circumOfCircle = (radio) => 2 * Math.PI * radio;
console.log(circumOfCircle(3)); */

//9.-La densidad de una sustancia se calcula de la siguiente manera:density= mass/volume. Escribe una función density que calcule la densidad de una sustancia.

//10.-La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un objeto en movimiento, speed.
//11.-El peso de una sustancia se calcula de la siguiente manera: weight = mass x gravity. Escribe una función weight que calcule el peso de una sustancia.
//12.-La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) + 32. Escribe una función convertCelsiusToFahrenheit que convierta °C a °F.
//13.-El índice de masa corporal (IMC) se calcula de la siguiente manera: imc = peso en Kg / (altura x altura) en m2. Escribe una función que calcule imc. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la información que se proporciona a continuación.
/* Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
Peso bajo: IMC inferior a 18,5
Peso normal: IMC de 18,5 a 24,9
Sobrepeso: IMC de 25 a 29,9
Obeso: IMC es 30 o más */

//14.-Escribe una función llamada checkSeason, toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano.
//15.-Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.
/* console.log(findMax(0, 10, 5));
10;
console.log(findMax(0, -10, -2));
0; */
