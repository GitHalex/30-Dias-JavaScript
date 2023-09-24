const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

/* const vacio = new Set();
console.log(vacio); */

const num10 = new Set();
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of numeros) {
  num10.add(num);
}
console.log(num10);

console.log(num10.delete(10));
console.log(num10);

num10.clear();
console.log(num10);

const arrayStrings = ["Hola", "Como", "Estas", "Bien", "Mal"];
const strings = new Set();
for (const stringa of arrayStrings) {
  strings.add(stringa);
}
console.log(strings);

const mapCountries = new Map();

countriesPais = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const map = new Map(countriesPais);
console.log(map);
console.log(map.size);
