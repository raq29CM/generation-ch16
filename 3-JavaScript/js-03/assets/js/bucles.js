'use strict'

/* ******************************* BUCLES ****************************** */
/* ESTRUCTURA QUE NOS PERMITE REPETIR NUESTRO CODIGO X CANTIDAD DE VECES */

/* FOR - bucle de ciclo controlado */

/* 
for(variable a usar, hasta donde, incremento){
    Instrucciones a realizar;
}
*/

let n = parseInt(prompt("Cuantas veces quiere repetir el bucle? "));

for(let i=0; i < n; i++){
    console.log("El valor de i es: " + i);
}

/* WHILE - bucle de ciclo no controlado */

/* 
funciona si la condicion es verdadera
while(condicion){
    instrucciones;
}
*/
let saludo;
while(saludo != "Hola"){
    saludo = prompt("Saludame");
}