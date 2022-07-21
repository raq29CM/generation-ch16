/*
RETURN

Return nos sirve en las funciones para devolver un dato
en especifica, ya sea texto, una variable o constante, un
numero, una operacion aritmetica, entre otros.
*/

function calcularPorcentaje(numero, porcentaje){
    let resultado = (numero * porcentaje) / 100;
    return resultado;
}

console.log("CALCULADORA DE PORCENTAJES");
let numero = parseInt(prompt("Escribe el numero: "));
let porcentaje = parseInt(prompt("Escribe el porcentaje: "));

console.log("El " + porcentaje + "% de " + numero + " es: " + calcularPorcentaje(numero,porcentaje));