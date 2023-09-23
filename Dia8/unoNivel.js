const dog = {};
console.log(dog);
console.log(typeof dog);

dog.name = "Marrano";
dog.legs = 4;
dog.age = 4;
dog.color = "Gold";
dog.bark = function () {
  return "Woof woof";
};
console.log(dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

dog.breed = "Golden Retriver";
dog.getDogInfo = function () {
  return `my dogs' name is ${this.name} its a ${dog.breed} is very friendly`;
};

console.log(dog);
console.log(dog.breed);
console.log(dog.getDogInfo());
