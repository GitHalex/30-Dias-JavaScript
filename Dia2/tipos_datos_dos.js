// NIVEL 2
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up. ' by John teaches us to help one another."
);
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

let numero = "10";
console.log(typeof numero);
console.log(numero === 10);
let numeroEntero = +numero;
console.log(numeroEntero === 10);
let numeroFloat = "9.8";
console.log(Math.ceil(numeroFloat) == parseInt(numero));
let cadena = "Python";
let palabra = "jerga";
console.log(cadena.includes("on"));
console.log(palabra.includes("on"));
let oracion = "Espero que este curso no esté lleno de jerga";
console.log(oracion.includes("jargon"));

let numeroRandom = Math.random();
let numero_a_cien = Math.floor(numeroRandom * 101);
console.log(numero_a_cien);
if (numero_a_cien >= 50) {
  console.log(numero_a_cien);
}

let numero_a_docientos = Math.floor(numeroRandom * 256);
console.log(numero_a_docientos);

let cadenaJavaScript = "JavaScript";
let tam = cadenaJavaScript.length;
console.log(tam);
let valor = parseInt(Math.random() * tam);
console.log(valor);
let caracter = cadenaJavaScript[valor];
console.log(caracter);

console.log(`1\t1\t1\t1\t1\nnuevo`);
console.log(`2\t1\t2\t4\t8`);
console.log(`3\t1\t3\t9\t27`);
console.log(`4\t1\t4\t16\t64`);
console.log(`5\t1\t5\t25\t125`);

let frase =
  "No puedes terminar una oracion con porque porque porque es una conjuncion";
console.log(frase.substring(35, 56));
