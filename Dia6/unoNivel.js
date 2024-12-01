/* const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
  console.log(i);
}
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
let num = 0;
do {
  console.log(num);
  num++;
} while (num <= 10); */

/* const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tam = numbers.length;
console.log(tam); */

/* for (let index = tam; index > -1; index--) {
  console.log(numbers[index]);
} */

/* let i = tam;
do {
  console.log(numbers[i]);
  i--;
} while (i > -1); */

/* let n = parseInt(prompt("Ingrese un numero: "));
for (let index = 0; index <= n; index++) {
  console.log(index);
} */

/* let char = "#";
let numero = 7;

for (let index = 0; index <= numero; index++) {
  console.log(char);
  char += "#";
} */

/* for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
} */
/* for (let i = 0; i <= 10; i++) {
  console.log(`${i}\t${i ** 2}\t${i ** 3}`);
} */

/* for (let index = 0; index <= 100; index++) {
  index % 2 == 0 ? console.log(index) : console.log();
} */
/* for (let index = 0; index <= 100; index++) {
  index % 2 != 0 ? console.log(index) : console.log();
} */

/* let sumPar = 0;
let sumImpar = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumPar += i;
  } else {
    sumImpar += i;
  }
}
console.log(
  `La suma de todos los pares de 0 a 100 es: ${sumPar}. Y la suma de todo los impares de 0 a 100 es ${sumImpar}`
); */

/* let arr = [sumPar, sumImpar];
console.log(arr);
 */

/* let al = [];
for (let num = 0; num < 5; num++) {
  al.push(Math.floor(Math.random() * 100));
}
console.log(al); */

let ale = [];
for (let num = 0; num < 5; num++) {
  let elemento = Math.floor(Math.random() * 10);
  console.log(elemento);
  if (ale.indexOf(elemento) === -1) {
    ale.push(elemento);
  }
}
console.log(ale);

const character =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz123456789";
let id = "";
let i = 0;
while (i <= 5) {
  let numeros = Math.floor(Math.random() * character.length);
  console.log(numeros);
  id += character[numeros];
  i += 1;
}
console.log(id);
