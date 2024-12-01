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

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

/* let vacio = [];
console.log(vacio);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers.length);

console.log(
  `el primer elemento ${numbers[0]} - el elemento del medio ${numbers[3]} - el ultimo elemento ${numbers[4]}`
); */

/* const mixedDataTypesPrimitivos = [
  "string",
  "number",
  "boolean",
  "null",
  "undefined",
  "NaN",
];

console.log(`longitud del array es ${mixedDataTypesPrimitivos.length}`); */

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// console.log(itCompanies);

// console.log(`Numero de empresas ${itCompanies.length}`);

/* console.log(
  `primer empresa ${itCompanies[0]} ----- empresa intermedia ${itCompanies[3]} ----------- ultima empresa ${itCompanies[6]}`
); */
/* 
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
} */

for (let i = 0; i < itCompanies.length; i++) {
  let nuevoIt = itCompanies[i];
  console.log(nuevoIt.toUpperCase());
}

// console.log(`${itCompanies.join(", ")} son grandes empresas de TI`);

/* let empresa = prompt("Ingrese una empresa: ");
let existe = itCompanies.includes(empresa);

existe
  ? console.log(`${empresaAma} existe hola`)
  : console.log(`La empresa no existe`);
 */

/* for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
  if (itCompanies[i].includes("o")) {
    console.log("si");
  } else {
    console.log("no");
  }
} */

/* console.log(itCompanies);
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(4));
console.log(itCompanies.slice(3, 4));
console.log(itCompanies.splice(0, 1));
console.log(itCompanies);
console.log(itCompanies.splice(2, 3, 3));
console.log(itCompanies.pop());
console.log(itCompanies.splice()); */
