/* ****************************** ARREGLOS ******************************  */
/* 
Coleccion de elemntos
Cada elemento ocupa una posicion
Esa posicion se conoce como INDICE y comienza a partir del 0
*/

let arr = [1,2,3,4];
console.log(arr);

//propiedades: describen
//metodos: acciones que se pueden realizar

console.log(arr[2]);
arr[4]=190;
console.log(arr);
arr[4]="Hola";
console.log(arr);

//metodos de arreglo
const arreglo = ["Adios"];

//push()
arreglo.push(2, true);
let num = 50;
arreglo.push(num);
console.log("Push: \n" + arreglo);

//unshift()
arreglo.unshift("A", "B");
console.log("Unshift: \n" + arreglo);

//pop()
arreglo.pop();
console.log("Pop: \n" + arreglo);

//shift()
let dato2 = arreglo.shift();
console.log("Shift - dato2: \n" + dato2);
console.log("Shift - arreglo: \n" + arreglo);

//splice()
arreglo.splice(1,0,"Woosh!");
console.log("Splice: \n" + arreglo);

