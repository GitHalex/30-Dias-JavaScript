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
