// #1 Crea una clase de Animal. La clase tendrá propiedades de nombre, edad, color, piernas y creará diferentes métodos.

class Animal {
  constructor(nombre, edad, color, piernas) {
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;
    this.piernas = piernas;
  }
  fullName() {
    return `mi nombre es ${this.nombre} tengo ${this.edad} años soy de color ${this.color} tengo ${this.piernas} patas`;
  }
}

// #2 Cree una clase hijo de Perro y Gato a partir de la Clase Animal.

class Perro extends Animal {
  constructor(nombre, edad, color, piernas, raza) {
    super(nombre, edad, color, piernas);
    this.raza = raza;
  }
  getRaza() {
    return raza;
  }
  setRaza(raza) {
    if (raza === "Golden") {
      return `Este perro es mio`;
    }
  }
}

const perro1 = new Perro("Marrano", 4, "amarillo", 4, "Golden");
console.log(perro1.fullName());
console.log(perro1.setRaza("Golden"));
console.log(perro1);

/* const stringPaises = `[
{
  nombre: 'Agentina',
  poblacion: 44
},
{
  nombre: 'Brasil',
  poblacion: 212
}]`;

const paises = JSON.parse(stringPaises); */
