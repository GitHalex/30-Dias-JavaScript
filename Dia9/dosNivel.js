// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const countries = require("../countries.js");
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

console.log(typeof products);

/* const totalPrecio = products.map((product) => product.price);
console.log(totalPrecio);  //[3,6, ' ',8, 10,, ' ' ] */
/* const totalPrecio = products
  .map((producto) => producto.price)
  .filter((precio) => typeof precio === "number" && !isNaN(precio));
console.log(totalPrecio); //[3,6,8,10,] */

/* const totalPrecio = products
  .map((producto) => producto.price)
  .filter((precio) => typeof precio === "number" && !isNaN(precio))
  .reduce((accumulador, valor_actual) => accumulador + valor_actual);
console.log(totalPrecio); //[3,6,8,10,]
console.log("Precio total de los productos es: ", totalPrecio); //27 */

// #2 Encuentre la suma del precio de los productos usando sólo reduce(callback)).
/* const validPrices = products.filter(
  (producto) => typeof producto.price === "number" && !isNaN(producto.price)
);
console.log(validPrices);

const totalSuma = validPrices.reduce(
  (accumulator, producto) => accumulator + producto.price,
  0
);
console.log(totalSuma); */

// #3 Declara una función llamada categorizeCountries que retorna un array de países que tienen algún patrón común (encuentras el array de países en este repositorio como countries.js(ej 'land', 'ia', 'island','stan')).
/* const categorizeCountries = (patron) => {
  const categorizedCountries = countries.filter((pais) =>
    pais.toLowerCase().includes(patron.toLowerCase())
  );
  return categorizedCountries;
};

const countriesWithLand = categorizeCountries("land");
console.log(countriesWithLand);

const countriesWithIs = categorizeCountries("en");
console.log(countriesWithIs); */

// #4 Cree una función que retorne un array de objetos, que es la letra y el número de veces que la letra usa para empezar el nombre de un país.
// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

/* const countStartingLetters = (countries) => {
  const startingLettersCount = {};

  for (const country of countries) {
    const firstLetter = country[0].toUpperCase();

    // Verifica si la letra ya está en el objeto startingLettersCount
    if (startingLettersCount[firstLetter]) {
      startingLettersCount[firstLetter]++;
    } else {
      startingLettersCount[firstLetter] = 1;
    }
  }

  // Convierte el objeto en un array de objetos
  const result = Object.entries(startingLettersCount).map(
    ([letter, count]) => ({
      letter,
      count,
    })
  );

  return result;
};

// Ejemplo de uso
const startingLetters = countStartingLetters(countries);
console.log(startingLetters); */

// #5 Declara una función getFirstTenCountries y retorna un array de diez países. Utiliza diferente programación funcional para trabajar en el array countries.js.

const getFirstTenCountries = () => {
  return countries.slice(0, 10);
};
const first = getFirstTenCountries();
console.log(first);

// #6 Declara una función getLastTenCountries que devuelve los últimos diez países del array de países.
const getLastTenCountries = () => {
  let reverse = countries.reverse();
  const revertido = reverse.slice(0, 10);
  console.log(revertido);
};
getLastTenCountries();

// #7 Encuentre qué letra se utiliza muchas veces como inicial de un nombre de país del array de países (ej. Finland, Fiji, France etc)
