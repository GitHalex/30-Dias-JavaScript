let now = new Date();
console.log(now.getMonth());
let mes = now.getMonth();
let dia = now.getDay();
let hora = now.getHours();
let minutos = now.getMinutes();
if (mes < 10) {
  if (dia < 10) {
    if (hora < 10) {
      if (minutos < 10) {
        console.log(
          `${now.getFullYear()}-0${now.getMonth()}-0${now.getDay()}  0${now.getHours()}:0${now.getMinutes()}`
        );
      } else {
        console.log(
          `${now.getFullYear()}-0${now.getMonth()}-0${now.getDay()}  0${now.getHours()}:${now.getMinutes()}`
        );
      }
    } else {
      if (minutos < 10) {
        console.log(
          `${now.getFullYear()}-0${now.getMonth()}-0${now.getDay()}  ${now.getHours()}:0${now.getMinutes()}`
        );
      } else {
        console.log(
          `${now.getFullYear()}-0${now.getMonth()}-0${now.getDay()}  ${now.getHours()}:${now.getMinutes()}`
        );
      }
    }
  } else {
    if (hora < 10) {
      if (minutos < 10) {
        console.log(
          `${now.getFullYear()}-0${now.getMonth()}-0${now.getDay()}  0${now.getHours()}:0${now.getMinutes()}`
        );
      } else {
        console.log(
          `${now.getFullYear()}-0${now.getMonth()}-0${now.getDay()}  0${now.getHours()}:${now.getMinutes()}`
        );
      }
    } else {
      if (minutos < 10) {
        console.log(
          `${now.getFullYear()}-0${now.getMonth()}-0${now.getDay()}  ${now.getHours()}:0${now.getMinutes()}`
        );
      } else {
        console.log(
          `${now.getFullYear()}-0${now.getMonth()}-0${now.getDay()}  ${now.getHours()}:${now.getMinutes()}`
        );
      }
    }
  }
} else {
  if (dia < 10) {
    if (hora < 10) {
      if (minutos < 10) {
        console.log(
          `${now.getFullYear()}-0${now.getMonth()}-0${now.getDay()}  0${now.getHours()}:0${now.getMinutes()}`
        );
      } else {
        console.log(
          `${now.getFullYear()}-0${now.getMonth()}-0${now.getDay()}  0${now.getHours()}:${now.getMinutes()}`
        );
      }
    } else {
      if (minutos < 10) {
        console.log(
          `${now.getFullYear()}-0${now.getMonth()}-0${now.getDay()}  ${now.getHours()}:0${now.getMinutes()}`
        );
      } else {
        console.log(
          `${now.getFullYear()}-0${now.getMonth()}-0${now.getDay()}  ${now.getHours()}:${now.getMinutes()}`
        );
      }
    }
  } else {
    if (hora < 10) {
      if (minutos < 10) {
        console.log(
          `${now.getFullYear()}-0${now.getMonth()}-0${now.getDay()}  0${now.getHours()}:0${now.getMinutes()}`
        );
      } else {
        console.log(
          `${now.getFullYear()}-0${now.getMonth()}-0${now.getDay()}  0${now.getHours()}:${now.getMinutes()}`
        );
      }
    } else {
      if (minutos < 10) {
        console.log(
          `${now.getFullYear()}-0${now.getMonth()}-0${now.getDay()}  ${now.getHours()}:0${now.getMinutes()}`
        );
      } else {
        console.log(
          `${now.getFullYear()}-0${now.getMonth()}-0${now.getDay()}  ${now.getHours()}:${now.getMinutes()}`
        );
      }
    }
  }
}
