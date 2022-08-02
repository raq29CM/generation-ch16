'use strict';

//conversión de tipos de datos
// casteo parseo
// casting parsing

let num = "5";
let num2 = "10";

//concatenación
//resultado de unir dos cadenas de texto
//unimos un numero con una cadena de texto
console.log(num + num2);
//coersión de tipo de dato
//conversión automática de datos
console.log(num - num2);

/* Number() */
//convierte cadenas o booleanos a números
let num3 = "4.02";
console.log(Number(num3));
console.log(num3);

/* String() */
//convierte números o booleanos a cadenas
let num4 = String(0);
console.log(num4);
console.log(typeof (num4));

/* Boolean() */
// convierte números y cadenas a booleanos
//0, "", null, undefined, NaN los convierte a false
//faulsy values - valores que tienden a falso
//todos los demas números los convierte a true
let num5 = Boolean(NaN);
console.log(num5);
console.log(typeof num5);
