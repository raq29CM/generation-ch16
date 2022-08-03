'use strict'

/* ********************** FUNCION ESTANDAR ***************************** */
function miFunction(a, b){
    return (a + b);
}

let resultado = miFunction(3, 6);
console.log(resultado);

/* ******************** FUNCION EXPRESION ******************************* */
/* *********** Tambien se le conoce como funciones anónimas ************* */

let suma = function (a, b){return (a+b)};
/* console.log(suma(9, 8)); */
resultado = suma(2,3);
let caracteres = "La suma es: ";
console.log(caracteres + resultado);

/* ************************* SELF-INVOKING ****************************** */
/* SE UTILIZAN CUANDO REQUIERES LLAMAR UNA FUNCION PERO SIN GUARDARLA EN MEMORIA POR LO QUE SE AYUDA A CUIDAR LOS RECURSOS - COMO EN APPS MUY GRANDES O QUE SE UTILICEN 24/7 O AMBOS */
(function(a, b){
    console.log("El resultado de Self Invoking es: " + (a + b));
})(3,4);

