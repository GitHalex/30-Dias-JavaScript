let frase =
  "El amor es lo mejor que hay en este mundo, Algunos encontraron su amor en algunos todavía están buscando su amor Amor";
let pattern = /amor/gi;
let count_love = frase.match(pattern);
console.log(count_love.length);

let cadena =
  "No puedes terminar una oración con porque porque porque es una conjunción";
let patron = /porque/gi;
let listaCadenas = cadena.match(patron);
console.log(listaCadenas.length);

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let correcto = sentence.match(/[a-zA-Z]/gi);
console.log(correcto.join(" "));

let texto =
  "Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.";
let salario_mes = texto.substring(8, 12);
let salario = parseInt(salario_mes);
console.log(typeof salario_mes);
console.log(typeof salario);
let bono_anual = texto.indexOf("10000");
console.log(bono_anual);
let bono = parseInt(texto.substring(53, 58));
console.log(typeof bono);
let euros_mes = texto.indexOf("15000");
let euros = parseInt(texto.substring(85, 90));
console.log(typeof euros);
let total = salario * 12 + bono + euros * 12;
console.log(`El ingreso total es ${total}`);

let nota1 = 10;
let nota2 = 8;
let nota3 = 9;
let promedio = (nota1 + nota2 + nota3) / 3;
console.log(promedio);
