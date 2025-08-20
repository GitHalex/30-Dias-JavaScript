// #1 Calcula los ingresos anuales totales de la persona a partir del siguiente texto. 'Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes'
let texto =
  "Gana 4000 euros de sueldo al mes, 10000 euros de bonificacion anual, 5500 euros de cursos online al mes";

const patron = /\d+/g;

const matches = texto.match(patron);
let [mensual, bonificacion, online] = matches;
let total =
  parseInt(mensual) * 12 + parseInt(bonificacion) + parseInt(online) * 12;
console.log(`El ingreso total del trabajador es ${total}`);

// #2 La posición de algunas partículas en el eje horizontal x -12, -4, -3 y -1 en la dirección negativa, 0 en el origen, 4 y 8 en la dirección positiva. Extrae estos números y encuentra la distancia entre las dos partes más lejanas.

const points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
const sortedPoints = [-4, -3, -1, -1, 0, 2, 4, 8];

const numberMap = points.map(Number).sort((a, b) => a - b);
console.log(numberMap);

const distance = sortedPoints[numberMap.length - 1] - sortedPoints[0];
console.log(distance);

let palabras_reservadas =
  "abstract,boolean,break,byte,case,catch,char,class,const,continue,debugger,default,delete,do,double,else,enum,export,extends,false,final,finally,float,for,function,goto,if,implements,import,in,instanceof,int,interface,let,long,native,new,null,package,private,protected,public,return,short,static,super,switch,synchronized,this,throw,throws,transient,true,try,typeof,var,volatile,void,while,with";

const palabrasReservadas = new Set(palabras_reservadas.split(","));
console.log(palabrasReservadas);

const is_valid_variable = (cadena) => {
  const patron = /^[a-zA-Z$_][a-zA-Z0-9$_]*$/;
  return !palabrasReservadas.has(cadena) && patron.test(cadena);
};

console.log(is_valid_variable("first_name")); // false
console.log(is_valid_variable("#")); // false
console.log(is_valid_variable("1first_name")); // false
console.log(is_valid_variable("firstname")); // true
console.log(is_valid_variable("first-name")); // false
console.log(is_valid_variable("return")); // false
