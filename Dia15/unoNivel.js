// #1 Crea una clase de Animal. La clase tendrá propiedades de nombre, edad, color, piernas y creará diferentes métodos.

class Animal {
  constructor(nombre, edad, color, piernas) {
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;
    this.piernas = piernas;
  }
  fullName() {
    return `mi nombre es ${this.nombre} tengo ${this.edad} de color ${this.color} tengo ${this.piernas} patas`;
  }
}

const animal1 = new Animal("Marrano", 4, "amarillo", 4);
console.log(animal1);
console.log(animal1.fullName());

// #2 Cree una clase hijo de Perro y Gato a partir de la Clase Animal.

class Perro extends Animal {
  super(nombre, edad, color, piernas) {}
}
