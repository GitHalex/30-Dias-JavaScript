const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

/* const encontrarPersonaConMasHabilidades = (users) => {
  let maxSkills = 0;
  let personaConMasHabilidades = null;
  for (const [nombre, usuario] of Object.entries(users)) {
    if (usuario.skills.length > maxSkills) {
      maxSkills = usuario.skills.length;
      personaConMasHabilidades = nombre;
    }
  }

  return personaConMasHabilidades;
};

let nombreMoreSkills = encontrarPersonaConMasHabilidades(users);
console.log(`La persona que tiene mas skills es ${nombreMoreSkills}`); */

/* const usuariosConectados = (users) => {
  let conectados = [];
  let maspuntos = [];
  let cantidadConectados = 0;
  let puntos = 0;
  for (const [nombre, usuario] of Object.entries(users)) {
    if (usuario.isLoggedIn) {
      conectados.push(nombre);
      cantidadConectados++;
    }
    if (usuario.points >= 50) {
      maspuntos.push(nombre);
      puntos++;
    }
  }
  return `usuarios conectados ${conectados.join(
    ", "
  )} : en total son :${cantidadConectados}\n usuarios que tienen mas de 50 puntos ${maspuntos.join(
    ", "
  )} cantidad ${puntos}`;
};

console.log(usuariosConectados(users)); */

//Esta mierda no funciona
/* const findDevMERN = (users) => {
  let personasMern = [];
  for (const [nombre, usuario] of Object.entries(users)) {
    let habilidades = usuario.skills;
    const letras = ["M", "E", "R", "N"];
    if (letras.every((letra) => habilidades.includes(letra))) {
      personasMern.push(nombre);
    }
  }
  return personasMern;
};

console.log(findDevMERN(users)); */
