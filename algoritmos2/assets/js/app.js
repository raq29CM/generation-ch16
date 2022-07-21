//ARREGLOS

//opcion mas usa
let num = [1,2,3];
console.log(num);

//opcion en desuso
let arr1 = new Array();
console.log(arr1);

//usando un arreglo
const arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[3]);

arr[5]=25;
arr[6]=8;
console.log(arr);

arr[6]=0;
arr[10]=15;
console.log(arr);
console.log("Longitud del arreglo: "+ arr.length);
//const si se puede utilizar con arreglos
// y si se pueden editar los datos 


const frutas = ["Manzana", "Platano"];
console.log(frutas);

//push() - agregar valores al final del arreglo
frutas.push("Naranja");
console.log(frutas);


let otrafruta = "Toronja";
frutas.push(otrafruta);
console.log(frutas);

//pop() - quita el ultimo elemento y lo devuelve
let elementoBorrado = frutas.pop();
console.log(frutas);
console.log(elementoBorrado);

// unshift() - agregar un elemento al inicio
frutas.unshift("Uva");
console.log(frutas);

// shift() - quitar un elemento al inicio
frutas.shift();
console.log(frutas);

//arreglo multidimensional - matriz
const newArr = [1, 45, "Hola", "Adiós", true, null,
[30, 31, 32],
["Azul", "Amarillo", "Verde"]];

console.log("Imprimiendo el numero 32: " + newArr[6][2]);
console.log("Imprimiendo el color amarillo: " + newArr[7][1]);

//OBJETOS
//permite utilizar key-value pairs

const obj = {
    nombre: "Pedro",
    edad: 25,
    color: "Azul",
    hobbies: ["Leer", "Caminar", "Michis"],
    newArr: newArr
}

console.log(obj);
console.log(obj.color);
console.log(obj.hobbies[2]);
console.log(obj.newArr[6][1]);