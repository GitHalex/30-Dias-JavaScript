// NIVEL 1
let desafio = "30 Dias de JavaScript retomando";

let a = 2;
let b = 3;
console.log(`${a} es mayor que ${b}: ${a > b ? "a Es mayor" : "b es Mayor"}`);

console.log(desafio);
console.log(desafio.length);
console.log(desafio.toUpperCase());
console.log(desafio.toLowerCase());
console.log(desafio.substring(0));
console.log(desafio.substring(3));
console.log(desafio.includes("Script"));
console.log(desafio.split());
console.log(desafio.split(" "));

let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let matriz_company = company.split(",");

console.log(matriz_company);
console.log(desafio.replace("JavaScript", "Python"));
console.log(desafio.charAt(15));
console.log(desafio.charCodeAt("J"));
console.log(desafio.indexOf("a"));
console.log(desafio.lastIndexOf("a"));

let oracion =
  "No puedes terminar una oracion con porque porque es una conjuncion";
console.log(oracion.indexOf("porque"));
console.log(oracion.lastIndexOf("porque"));
console.log(oracion.search("porque"));

console.log(desafio.trim());
console.log(desafio.startsWith("3"));
console.log(desafio.endsWith("t"));
let patternA = /a/gi;
console.log(desafio.match("a"));
console.log(desafio.match(patternA));
let dias = "30 dias de ";
let lenguaje = "JavaScript";
console.log(dias.concat(lenguaje));
console.log(desafio.repeat(2));
