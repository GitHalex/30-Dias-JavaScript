// #1 Utiliza la información de los países, en la carpeta de datos. Ordena los países por nombre, por capital, por población

const countries = require("../countries.js");

/*   {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 40218234,
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
    region: "Asia",
    area: 652230,
  }, */

/* const countries = require("../countries_data.js");
const ordPais = countries.sort((a, b) => {
  if (a.name < b.name) return 1;
  if (a.name > b.name) return -1;
  return 0;
});

console.log(ordPais); */

/* const countries = require("../countries");

const ordPaisPorCapital = countries.sort((a, b) => {
  if (a.capital < b.capital) return 1;
  if (a.capital > b.capital) return -1;
  return 0;
});
console.log(ordPaisPorCapital); */
/* 
const ordPaisPorPoblacion = countries.sort(
  (a, b) => a.population - b.population
);
console.log(ordPaisPorPoblacion); */
