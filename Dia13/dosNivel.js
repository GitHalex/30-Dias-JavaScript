console.assert(10 > 2 * 10, "10 is not greater than 20"); // no hay resultado
console.assert(3 > 4, "3 is not greater than 4"); // Aserción fallida: 3 no es mayor que 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`;
  console.log("the # is " + i);
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
}
console.warn("Este es una advertencia");
console.error("Este es una error");
