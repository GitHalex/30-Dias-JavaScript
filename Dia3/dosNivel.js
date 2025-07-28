let base = parseInt(prompt("Ingrese base: "));
let altura = parseInt(prompt("Ingrese altura: "));
console.log(`El area del triangulo es: ${(base * altura) / 2}`);

let a = parseInt(prompt("Ingrese lado a: "));
let b = parseInt(prompt("Ingrese lado b: "));
let c = parseInt(prompt("Ingrese lado c: "));
let perimetro = a + b + c;
console.log(`el perimetro del triangulo es: ${perimetro}`);

/* const PI = 3.14;
let radio = parseInt(prompt("Radio: "));
let area = PI * radio ** 2;
console.log(`area: ${area}`);
console.log(`circunferencia: ${PI * 2 * radio}`); */

/* let y2 = 2;
let y1 = 2;
let x2 = 6;
let x1 = 10;
console.log(`La pendiente es m: ${y2 - y1 / x2 - x1}`); */

/* let x = -3;
console.log(`Valor de y: ${x ** 2 + 6 * x + 9}`);
 */

/* let horas = parseInt(prompt("Ingrese horas: "));
let tarifa = parseInt(prompt("Introduce la tarifa por hora: "));
console.log(`Su ganancia semanal es ${horas * tarifa}`);
 */

let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
nombre.length > apellido.length
  ? console.log(
      `Tu primer nombre, ${nombre}, es mas largo que tu apellido, ${apellido}`
    )
  : console.log(
      `Tu apellido ${apellido}, es mas largo que tu nombre ${nombre}`
    );

/* let myAge = 250;
let yourAge = 25;
console.log(`Soy ${myAge - yourAge} mayor que tú`);
 */

let year = parseInt(prompt("Introduzca el año de nacimiento: "));
let now = new Date();
let yearAhora = now.getFullYear() - year;
yearAhora >= 18
  ? console.log(
      `Tienes ${yearAhora} años. Tienes la edad suficiente para conducir. `
    )
  : console.log(
      `Tienes ${yearAhora} años. Podras conducir despues de ${
        18 - yearAhora
      } años`
    );

/* let numYear = parseInt(prompt("Ingrese el numero de años: "));
console.log(`Viviste ${numYear * 365 * 24 * 60 * 60} segundos`); */

/* let now = new Date();
console.log(
  `${now.getFullYear()}-${now.getMonth()}-${now.getDay()} ${now.getHours()}:${now.getMinutes()}`
);
console.log(
  `${now.getDay()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()} `
);
console.log(
  `${now.getDay()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
); */
