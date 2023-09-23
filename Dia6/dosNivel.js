/* let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz123456789";
console.log(caracteres);
let numerosAleatorios = Math.floor(Math.random() * 100);
console.log(numerosAleatorios);
console.log(typeof numerosAleatorios);
let id = "";
for (let index = 0; index < numerosAleatorios; index++) {
  let numeros = Math.floor(Math.random() * caracteres.length);
  id += caracteres[numeros];
}
console.log(id); */

/* let caracteres = "ABCDEFabcdef0123456789";
#2
let id = "#";
for (let index = 0; index < 5; index++) {
  let numeros = Math.floor(Math.random() * caracteres.length);
  id += caracteres[numeros];
}
console.log(id); */

// Generar un número aleatorio entre 0 y 255 para cada componente de color
/* let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
// Construir la cadena de texto que representa el color en formato RGB
let color = "rgb(" + red + ", " + green + ", " + blue + ")";
console.log(color);

// Utilizar el color generado para pintar algún elemento en el documento
document.body.style.backgroundColor = color; */

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

/* let arreglo = [];
let country = "";
let mitad = "";
let tam = 0;
let arrayAux = [];
for (let index = 0; index < countries.length; index++) {
  for (let j = 0; j < countries.length; j++) {
    country = countries[j];
    arrayAux.push(country);
    mitad = country.substring(2);
    arrayAux.push(mitad);
    tam = country.length;
    arrayAux.push(tam);
  }
  arreglo.push(arrayAux);
}
console.log(arreglo); */

/* let element = "";
let arreglo = [];
for (let index = 0; index < countries.length; index++) {
  element = countries[index];
  console.log(element);
  if (element.includes("land")) {
    arreglo.push(element);
  }
}
console.log(arreglo); */

/* let element = "";
let arrIA = [];
let arreAxu = [];
for (let index = 0; index < countries.length; index++) {
  element = countries[index];
  console.log(element);
  if (element.includes("ia")) {
    arrIA.push(element);
  } else {
    arreAxu.push(element);
  }
}
console.log(`paises con ia ${arrIA}`);
console.log(`paises sin ia ${arreAxu}`); */

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
]; */

/* let element = 0;
let mayor = "";
for (let index = 0; index < countries.length; index++) {
  if (element < countries[index].length) {
    element = countries[index].length;
    mayor = countries[index];
  }
}
console.log(mayor); */

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

//Este ejercicio no puedo hacer el resultado es un arreglo de arreglos [["HTML",4],["CSS",3]]
/* let arr = [];
let aux = [];
let tam = 0;
for (let i = 0; i < webTechs.length; i++) {
  aux[i].push(arr.push(webTechs[i], webTechs[i].length));
}
console.log(aux); */

/* const mernStack = ["MongoDB", "Express", "React", "Node"];
let acronimo = "";
for (let i = 0; i < mernStack.length; i++) {
  const element = mernStack[i];
  acronimo += element[0];
}
console.log(acronimo); */

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

/* const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
let elemento = "";
console.log(fullStack.length);
for (let i = 0; i < fullStack.length; i++) {
  for (const stack of fullStack[i]) {
    console.log(stack);
  }
} */
