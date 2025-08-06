const imprimirPlease = (printArray) => {
  for (const num of printArray) {
    console.log(num);
  }
};
const printArray = [1, 2, 3, 4, 5, 5];
console.log(imprimirPlease(printArray));

function showDateTime() {
  let now = new Date();
  let formatoDia = "";
  let formatoMes = "";

  let dia = now.getDate();
  dia <= 9
    ? (formatoDia = "0" + dia.toString())
    : (formatoDia = dia.toString());

  let mes = now.getMonth() + 1;
  mes <= 9
    ? (formatoMes = "0" + mes.toString())
    : (formatoMes = mes.toString());

  let year = now.getFullYear();
  let hora = now.getHours();
  let segundos = now.getSeconds();
  return `${formatoDia}/${formatoMes}/${year}  ${hora}:${segundos}`;
}

console.log(showDateTime());

const swapValues = (x, y) => {
  let aux = y;
  y = x;
  x = aux;
  console.log(`x=${x}  y=${y}`);
};
swapValues(4, 3);
swapValues(4, 5);

const reverseArrays = (arreglo) => {
  let tam = arreglo.length;
  const reverseArreglo = [];
  for (let i = tam - 1; i >= 0; i--) {
    reverseArreglo.push(arreglo[i]);
  }
  return reverseArreglo;
};

console.log(reverseArrays([1, 2, 3, 4, 5]));
console.log(reverseArrays(["A", "B", "C"]));

// #7Declare una función llamada capitalizeArray. Toma un array como parámetro y retorna el array - capitalizedarray.

const names = ["Alex", "Cristiano", "Messi"];
const capitalizeArray = (names) => {
  const namesCapitalize = [];
  for (const name of names) {
    namesCapitalize.push(name.toUpperCase());
  }
  return namesCapitalize;
};
console.log(capitalizeArray(names));

// #8Declare una función llamada addItem. Toma un elemento de paŕametro y retorna un array después de agregar el un elemento.

const addItem = (param) => {
  const arrayAux = [];
  arrayAux.push(param);
  return arrayAux;
};
console.log(addItem("alex"));
console.log(addItem("Saul"));

// #9Declare una función llamada removeItem. Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const removeItem = (index) => {
  const numRemove = [];
  for (const numero of numeros) {
    if (index !== numero) {
      numRemove.push(numero);
    }
  }
  return numRemove;
};
console.log(removeItem(3));

// #10Declare una función llamada sumOfNumbers. Toma un número como parámetro y suma todos los números en ese rango.
const sumOfNumbers = (numero) => {
  let suma = 0;
  for (let index = 0; index <= numero; index++) {
    suma += index;
  }
  return suma;
};
console.log(sumOfNumbers(3));
console.log(sumOfNumbers(4));
console.log(sumOfNumbers(5));

// #11Declare una función llamada sumOfOdds. Toma un parámetro numérico y suma todos los números impares en ese rango.
const sumOfOdds = (numero) => {
  let sumOdds = 0;
  for (let i = 1; i <= numero; i++) {
    if (i % 2 != 0) {
      sumOdds += i;
    }
  }
  return sumOdds;
};
console.log(sumOfOdds(6));
console.log(sumOfOdds(8));

// #12Declare una función llamada sumOfEven. Toma un parámetro numérico y suma todos los números pares en ese rango.
const sumOfEven = (numero) => {
  let sumOdds = 0;
  for (let i = 1; i <= numero; i++) {
    if (i % 2 == 0) {
      sumOdds += i;
    }
  }
  return sumOdds;
};
console.log(sumOfEven(6));

// #13 Declare una función llamada evensAndOdds . Toma un entero positivo como parámetro y cuenta el número de pares e impares.
const evensAndOdds = (numero) => {
  let pares = 0;
  let impares = 0;
  for (let i = 1; i <= numero; i++) {
    i % 2 == 0 ? (pares += 1) : (impares += 1);
  }
  return `pares: ${pares} - impares ${impares}`;
};
console.log(evensAndOdds(5));
console.log(evensAndOdds(10));

// #14 Escriba una funión que tome cualquier número de argumentos y retorne la suma de los argumentos
const numArgumentos = (...args) => {
  let sumaNum = 0;
  for (const numero of args) {
    sumaNum += numero;
  }
  return sumaNum;
};
console.log(numArgumentos(1, 2, 3, 4));
console.log(numArgumentos(1, 2, 3, 4, 5));

// #15 Escriba una función randomUserIp que genere una ip de usuario aleatoria.
function randomUserIp() {
  let pri = Math.floor(Math.random() * 198);
  let seg = Math.floor(Math.random() * 255);
  let ter = Math.floor(Math.random() * 255);
  let cuar = Math.floor(Math.random() * 255);
  return `IP: ${pri}.${seg}.${ter}.${cuar}`;
}
console.log(randomUserIp());

// #16 Escriba una función randomMacAddress que genere una dirección mac aleatoria.

function randomMacAddress() {
  let caracteres = "ABCDEF0123456789";
  let macAdres = "";
  for (let i = 0; i < 6; i++) {
    for (let inicio = 0; inicio < 2; inicio++) {
      let numero = Math.floor(Math.random() * caracteres.length);
      macAdres += caracteres[numero];
    }
    macAdres += ":";
  }
  console.log(typeof macAdres);
  macAdres = macAdres.slice(0, -1);
  return macAdres;
}
console.log(randomMacAddress());

// #17 Declare una función llamada randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. La función retorna el número hexadecimal.
let caracteresH = "abdef0123456789";
const randomHexaNumberGenerator = () => {
  let hexadecimal = "#";
  for (let index = 0; index < 6; index++) {
    let caracter = Math.floor(Math.random() * caracteresH.length);
    hexadecimal += caracteresH[caracter];
  }
  return hexadecimal;
};
console.log(randomHexaNumberGenerator());

// #18 Declare una función llamada userIdGenerator. Cuando se llama a esta función, genera un id de siete caracteres. La función devuelve el id.
const userIdGenerator = () => {
  let caracteres =
    "ABCDEFGHIJKLMNOPQRSTUWXYZabdefghijklmnopqrstuwxyz0123456789";
  let id = "";
  for (let index = 0; index < 7; index++) {
    let caracter = Math.floor(Math.random() * caracteres.length);
    id += caracteres[caracter];
  }
  return id;
};
console.log(userIdGenerator());
