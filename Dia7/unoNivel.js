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
/* function densitySustance(mass, volume) {
  let density = mass / volume;
  return density;
}
console.log(densitySustance(2, 3)); */
/* const densitySustance = (mass, volume) => mass / volume;
console.log(densitySustance(2, 3)); */

//10.-La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un objeto en movimiento, speed.
/* function velocity(distance, time) {
  return distance / time + " m/s";
}
console.log(`La velocidad es: ${velocity(10, 5)}`); */
/* const velocity = (distance, time) => distance / time + " m/s";
console.log(`La velocidad es: ${velocity(10, 5)}`); */

//11.-El peso de una sustancia se calcula de la siguiente manera: weight = mass x gravity. Escribe una función weight que calcule el peso de una sustancia.
/* function weight(mass, gravity = 9.81) {
  let peso = mass * gravity;
  return peso;
}
console.log(weight(2)); */
/* const weight = (mass, gravity = 9.81) => mass * gravity;
console.log(weight(2)); */

//12.-La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) + 32. Escribe una función convertCelsiusToFahrenheit que convierta °C a °F.
/* function convertCelsiusToFahrenheit(celcius) {
  return celcius * (9 / 5) + 32 + "°F";
}
console.log(convertCelsiusToFahrenheit(30)); */

/* const convertCelsiusToFahrenheit = (celcius) => {
  return celcius * (9 / 5) + 32 + "°F";
};
console.log(convertCelsiusToFahrenheit(30)); */

//13.-El índice de masa corporal (IMC) se calcula de la siguiente manera: imc = peso en Kg / (altura x altura) en m2. Escribe una función que calcule imc. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la información que se proporciona a continuación.
/* Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
Peso bajo: IMC inferior a 18,5
Peso normal: IMC de 18,5 a 24,9
Sobrepeso: IMC de 25 a 29,9
Obeso: IMC es 30 o más */

/* function calculateIMC(peso, altura) {
  let imc = peso / altura ** 2;
  let resultado = "";
  if (imc < 18.5) {
    resultado = "Peso bajo";
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado = "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    resultado = "Sobrepeso";
  } else {
    resultado = "Obeso";
  }
  return `IMC: ${Math.floor(imc)} estas ${resultado}`;
}
console.log(calculateIMC(94, 1.65)); */

//14.-Escribe una función llamada checkSeason, toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano.
/* const checkSeason = (mes = "febrero") => {
  let estacion = "";
  if (mes == "enero" || mes == "febrero" || mes == "marzo") {
    estacion = "OTOÑO";
  } else if (mes == "abirl" || mes == "mayo" || mes == "junio") {
    estacion = "INVIERNO";
  } else if (mes == "julio" || mes == "agosto" || mes == "septiembre") {
    estacion = "PRIMAVERA";
  } else if (mes == "octubre" || mes == "noviembre" || mes == "diciembre") {
    estacion = "VERANO";
  }
  return estacion;
};

console.log(checkSeason("enero"));
console.log(checkSeason("febrero"));
console.log(checkSeason()); */
//15.-Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.
/* const findMax = (num1, num2, num3) => {
  let candidato = num1;
  if (candidato < num2) {
    candidato = num2;
  } else if (candidato < num3) {
    candidato = num3;
  }
  return candidato;
};
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));
 */

/* const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
person.nationality = "Ethiopian";
person.country = "Finland";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("SasS");
person.isMarried = true; */

/* person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};
console.log(person);
console.log(person.getPersonInfo()); */

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];
const langSet = new Set(languages);
for (const l of langSet) {
  const filteradlang = languages.filter((lng) => lng == l);
  console.log(filteradlang);
}
