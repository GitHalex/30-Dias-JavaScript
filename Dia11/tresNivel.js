const countries_data = require("../countries_data.js");
// console.log(countries_data);
for (const { name, capital, population, languages } of countries_data) {
  console.log(name, capital, population, languages);
}
