/* Tipos de datos */
'use strict'; /* Es para indicarle al navegador que interprete el .js de forma 'no permisiva' - si se usa, siempre debe estar en la linea 1*/
// Para hacer comentarios de una linea: ctrl + k + c
// String
let cadena = "Hola mundo!";

// para copiar shift + alt + (flechas arriba/abajo)
/* 
const es constante y no puede variar
let es una variable y puede cambiar durante la ejecutar
var existe pero ya no se usa
*/
//number
let num1 = 5;
let num2 = 5.2;
let num3 = -2.6;

//boolean
let bool = true;

//undefined
let variable;

//null
let var1 = null;

//NaN - not a number

/* Plantillas literales
    Template strings
    literal strings */

// Las comillas chuecas son "ALTGR + }"
/* Ejemplo de interpolacion */
console.log(`Esto es una cadena ${5+4}`);

let nombre = 'Raquel';

console.log("Mi nombre es " + nombre);
console.log(`Yo me llamo ${nombre}`);

/* console.log("<h1>Hola</h1>");
console.log(`<h1>Hola</h1>`); */

//Arreglos - Matrices - Array
let arr = [1, "A", null, undefined, [true, false]];
//Notacion de corchetes
console.log(arr[4][0])

let arr2 = new Array(); //Esta es la forma antigua, llamando al constructor
console.log(arr2);

//Objetos
// ESTRUCTURA: clave - valor

const persona = { //Esto es un objeto
    nombre: 'Raquel',
    edad: 31,
    hobbies: [ //Esto es un arreglo
        "Leer",
        "Ver Shrek 1 y 2",
        "Comer"
    ],
    auto: { 
        marca: "Nissan",
        modelo: "Platina",
        year: 2004
    },
    saludar: function(){
        /* console.log("Hola"); */
        return "saludar"
    }
};

//ARREGLO DE OBJETOS
/* [{}, {}, {}] */

//NOTECION DE PUNTO
console.log(`Mi nombre es ${persona.nombre}`);
console.log(`Mi hobbie es ${persona.hobbies[1]}`);
console.log(`La marca de mi auto es ${persona.auto.marca}`);
console.log(`La accion que realizo es: ${persona.saludar()}`);
