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

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName() {
    return `${this.firstName} ${this.lastName} funcion`;
  },
};
person.nationality = "Ethiopian";
person.country = "Finland";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("SasS");
person.isMarried = true;
console.log(person);
console.log(person.getFullName());

person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};
console.log(person);
console.log(person.getPersonInfo());
