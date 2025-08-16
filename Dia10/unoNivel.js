const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

//  #1 crear un set vacío
const vacio = new Set();
console.log(vacio);

// # 2 Crear un set que contenga de 0 a 10 utilizando el bucle
const num10 = new Set();
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of numeros) {
  num10.add(num);
}
console.log(num10);

// # 3 Eliminar un elemento de set
console.log(num10.delete(10));
console.log(num10);

// #4 Limpia set
num10.clear();
console.log(num10);

// #5 Crear un set de 5 elementos string a partir de un array

const arrayStrings = ["Hola", "Como", "Estas", "Bien", "Mal"];
const strings = new Set();
for (const stringa of arrayStrings) {
  strings.add(stringa);
}
console.log(strings);

// #6 Crear un map de países y el número de caracteres de un país
const mapCountries = new Map();

countriesPais = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const map = new Map(countriesPais);
console.log(map);
console.log(map.size);
