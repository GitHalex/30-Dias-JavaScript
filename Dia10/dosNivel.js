const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];
let unionArray = [...a, ...b];
let c = new Set(unionArray);
console.log(c);

let A = new Set(a);
let B = new Set(b);
let intersection = a.filter((num) => B.has(num));
let inter = new Set(intersection);
console.log(inter);

let diferencia = a.filter((numero) => !B.has(numero));
let DIF = new Set(diferencia);
console.log(DIF);
