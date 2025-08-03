let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz123456789";
console.log(caracteres.length);
let numerosAleatorios = Math.floor(Math.random() * 100);
console.log(numerosAleatorios);
console.log(typeof numerosAleatorios);
let id = "";
for (let index = 0; index < numerosAleatorios; index++) {
  let numeros = Math.floor(Math.random() * caracteres.length);
  id += caracteres[numeros];
}
console.log(id);

let character = "ABCDEFabcdef0123456789";

let char = "#";
for (let index = 0; index < 6; index++) {
  let numeros = Math.floor(Math.random() * caracteres.length);
  char += caracteres[numeros];
}
console.log(char);

// Generar un número aleatorio entre 0 y 255 para cada componente de color
/* let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
// Construir la cadena de texto que representa el color en formato RGB
let color = "rgb(" + red + ", " + green + ", " + blue + ")";
console.log(color);

// Utilizar el color generado para pintar algún elemento en el documento
document.body.style.backgroundColor = color; */

/* const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
  "Iceland",
]; */

/* let mayusculas = [];
for (let index = 0; index < countries.length; index++) {
  const element = countries[index];
  mayusculas.push(element.toLocaleUpperCase());
}
console.log(mayusculas); */

/* let tam = [];
for (let index = 0; index < countries.length; index++) {
  const element = countries[index];
  tam.push(element.length);
}
console.log(tam); */

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const resultArray = [];
for (const country of countries) {
  const countryCode = country.slice(0, 3).toLocaleUpperCase();
  //   console.log(countryCode);
  const countryLength = country.length;
  //   console.log(countryLength);
  resultArray.push([country, countryCode, countryLength]);
}
console.log(resultArray);

let elementos = "";
let arreglo = [];
for (let index = 0; index < countries.length; index++) {
  elementos = countries[index];
  console.log(elementos);
  if (elementos.includes("land")) {
    arreglo.push(elementos);
  }
}
console.log(arreglo);

const arrayIa = [];
const arrayNoIa = [];
for (const country of countries) {
  country.includes("ia") ? arrayIa.push(country) : arrayNoIa.push(country);
}
console.log(typeof arrayIa);
console.log(typeof arrayNoIa);
console.log(arrayIa);
console.log(arrayNoIa);

let element = 0;
let mayor = "";
for (let index = 0; index < countries.length; index++) {
  if (element < countries[index].length) {
    element = countries[index].length;
    mayor = countries[index];
  }
}
// console.log(mayor);

/* let elemento = 0;
let mayorPais = "";
for (const country of countries) {
  if (elemento < country.length) {
    elemento = country.length;
    mayorPais = country;
  }
}
console.log(mayorPais); */

/* let aux = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    aux.push(countries[i]);
  }
}
console.log(aux); */

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

/* let aux = 0;
let mayorCadena;
for (let i = 0; i < webTechs.length; i++) {
  if (aux < webTechs[i].length) {
    aux = webTechs[i].length;
    mayorCadena = webTechs[i];
  }
}
console.log(mayorCadena); */

//Este ejercicio si puedo hacer el resultado es un arreglo de arreglos [["HTML",4],["CSS",3]]
const arrayTech = [];
for (const tech of webTechs) {
  const techLegth = tech.length;
  arrayTech.push([tech, techLegth]);
}
console.log(arrayTech);

const mernStack = ["MongoDB", "Express", "React", "Node"];
let acronimo = "";
for (let i = 0; i < mernStack.length; i++) {
  const element = mernStack[i];
  acronimo += element[0];
}
console.log(acronimo);

/* const technologies = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];
for (const tech of technologies) {
  console.log(tech);
} */

/* const fruits = ["banana", "orange", "mango", "lemon"];
let size = fruits.length;
const frutas = "";
console.log(size);
for (let index = size; index > -1; index--) {
  frutas = fruits[index];
  console.log(frutas);
} */

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
let elemento = "";
console.log(fullStack.length);
for (let i = 0; i < fullStack.length; i++) {
  for (const stack of fullStack[i]) {
    console.log(stack);
  }
}
