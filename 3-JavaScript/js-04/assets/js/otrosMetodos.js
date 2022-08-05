'use strict'

console.log(sumar(5,3));

//sort() - ordena los elementos del arreglo
const arr = ["X", "A", "H", "a", "W", "b"];
console.log(arr);
arr.sort();
console.log(arr);

const arr2 = ["Hola", "adios", "Calle", "bienvenido"];
console.log(arr2);
arr2.sort();
console.log(arr2);

const arr3 = [11, 4, 7, 6, 2];
console.log(arr3);
arr3.sort((a,b) => a-b); /* orden ascendente */
console.log(arr3);
arr3.sort((a,b) => b-a); /* orden descendente */
console.log(arr3);

//funcion declarada
/* HOISTING - proceso de re acomodo automatico del codigo */
function sumar(a, b){
    return a+b;
}

/* Funcion flecha */
/* const division = (a,b) => (a/b);
console.log(division(10,2)); */

/* for each() */
/* Un ciclo que recorre en automatico TODO nuestro arreglo */
const arrnum = [1,4,6,8,10,20,30];

/* for(let i=0; i<arrnum.length; i++){
    arrnum[i] = arrnum[i]*2;
}
console.log(arrnum); */

arrnum.forEach((a, b, c) => console.log(a, b, c)); //imporimir elemento, index y arreglo completo


