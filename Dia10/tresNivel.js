const countries_data = require("../countries_data.js");
const countries = require("../countries_data.js");
console.log(countries);
const uniqueLanguages = new Set();

countries_data.forEach((country) => {
  country.languages.forEach((language) => {
    uniqueLanguages.add(language);
  });
});

const numberOfLanguages = uniqueLanguages.size;
console.log(
  `El numneroi de idiomas en el archivo de paises es ${numberOfLanguages}`
);

/* const languageCounts = {};
countries_data.forEach((country) => {
  country.languages.forEach((language) => {
    if (languageCounts[language]) {
      languageCounts[language] += country.population;
    } else {
      languageCounts[language] = country.population;
    }
  });
});

const languageCountsArray = Object.entries(languageCounts);
console.log(languageCountsArray);

// Tomar los primeros 10 elementos del array (las 10 lenguas más habladas)
const top10Languages = languageCountsArray.slice(0, 10);

console.log("Las 10 lenguas más habladas son:");
top10Languages.forEach(([language, count], index) => {
  console.log(`${index + 1}. ${language}: ${count} hablantes`);
}); */

/* const mostSpokenLanguages = (countries, n) => {
  const languageCounts = {};

  countries.forEach((country) => {
    country.languages.forEach((language) => {
      languageCounts[language] = (languageCounts[language] || 0) + 1;
    });
  });

  const sortedLanguages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([language, count]) => ({ [language]: count }));

  return sortedLanguages;
};

console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));
 */
