let frase =
  "El amor es lo mejor que hay en este mundo, Algunos encontraron su amor en algunos todavía están buscando su amor";
let pattern = /amor/gi;
console.log(frase.search(pattern));

let cadena =
  "No puedes terminar una oración con porque porque porque es una conjunción";
let patron = /porque/gi;
let listaCadenas = cadena.match(patron);
console.log(listaCadenas.length);

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

let correcto = sentence.match(/[a-zA-Z]/gi);
