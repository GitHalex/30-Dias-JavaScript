async function recuperarRubros() {
  const datos = await fetch(
    "https://www.scratchya.com.ar/apifetch/recuperarrubros.php"
  );
  const rubrosobj = await datos.json();
  console.log(typeof rubrosobj);
  console.log(rubrosobj);
}

recuperarRubros();

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle|start/gi; // Cambia esta línea
let result = twinkleStar.match(starRegex); // Cambia esta línea
console.log(result);

const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`;
console.log(typeof usersText);

const usersObj = JSON.parse(usersText, undefined, 4);
console.log(usersObj);
