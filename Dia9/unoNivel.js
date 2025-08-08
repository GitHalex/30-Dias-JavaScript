const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const callback = (n) => {
  return n ** 2;
};
function cubo(callback, n) {
  return callback(n) + 3;
}
console.log(cubo(callback, 4));

/* countries.forEach((pais) => console.log(pais));
names.forEach((name) => console.log(name));
numbers.forEach((number) => console.log(number)); */

/* const mayusculasCountry = countries.map((countri) =>
  countri.toLocaleUpperCase()
);
console.log(mayusculasCountry); */

/* const arrayTam = countries.map((countri) => countri.length);
console.log(arrayTam); */

/* const numCuadrados = numbers.map((number) => number ** 2);
console.log(numCuadrados); */

/* const asignat = products.map(
  (product) => `${product.product} su precio es = ${product.price}`
);
console.log(asignat); */

/* const paisesLand = countries.filter((countri) => countri.includes("land"));
console.log(paisesLand); */

/* const paisesTam6 = countries.filter((countri) => countri.length === 6);
console.log(paisesTam6); */

/* const paisesTam6 = countries.filter((countri) => countri.length >= 6);
console.log(paisesTam6); */

/* console.log(countries);
const countriE = countries.filter((countri) => countri.includes("E"));
console.log(countriE); */

const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

/* const priceOnly = products.filter((product) => product.price > 0);
console.log(priceOnly); */

/* console.log(numbers);
const sumaNumbers = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sumaNumbers); */

console.log(countries);

/* const stringsCountries = countries.reduce((acc, cur) => acc + ", " + cur);
console.log(`${stringsCountries} Son los paises del norte de Europa`);
 */

/* const lengthName = names.some((name) => name.length > 7);
console.log(lengthName); */

/* const lengthName = names.every((name) => name.length > 7);
console.log(lengthName); */

/* const landCountry = countries.every((countri) => countri.includes("land"));
console.log(landCountry);
 */

/* const findCountry = countries.find((countri) => countri.length === 6);
const possCountry = countries.findIndex((countri) => countri.length === 6);
console.log(findCountry);
console.log(possCountry); */

/* console.log(countries);
const possNorwey = countries.findIndex((poss) => poss === "Norway");
console.log(possNorwey); */
