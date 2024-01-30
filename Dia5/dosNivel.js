/* let text =
  "I love teaching and empowering people I teach HTML CSS JS React, Python";
let arreglo = text.split(" ");
console.log(arreglo);
let tamarreglo = arreglo.length;
console.log(tamarreglo); */

/* const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);
if (shoppingCart.includes("Honey")) {
  console.log("eres alergico a la miel por lo que se quitara la Miel");
  let pocision = shoppingCart.indexOf("Honey");
  shoppingCart.splice(pocision, 1);
}
console.log(shoppingCart);
shoppingCart[3] = "Green Tea";
console.log(shoppingCart); */

/* const countries = [
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
console.log(countries);
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
} */

/* const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

if (webTechs.includes("Sass")) {
  console.log("Sass en un preprocesador de CSS");
} else {
  webTechs.push("Sass");
}
console.log(webTechs); */

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
const fullStack2 = [...frontEnd, ...backEnd];
console.log(fullStack2);
