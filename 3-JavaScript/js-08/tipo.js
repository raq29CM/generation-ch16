//Hay dos formas de implementacion en js: forma clasica y 

//TIPO CADENA
let cadena = "Esto es una cadena"; //FORMA CLASICA
let cadena_obj = new String('Esto es una cadena objeto');
console.log(cadena);
console.log(cadena_obj);

//TIPO NUMERICO
let numero = 13; //FORMA CLASICA
let numero_obj = new Number(13.13);
console.log(numero);
console.log(numero_obj);

//TIPO DE DATO UNICO O COMPUESTO: ARRAY
const lista = ['1', '4', '6', '8']; //FORMA CLASICA
let lista_obj = new Array ('1', '3', '5', '7');
console.log(lista);
console.log(lista_obj);

//TIPO PREDEFINIDO
let tiempo = new Date();
console.log(tiempo);
console.log(Math);

//El constructor es una funcion de una clase
//caracteristicas de constructor: metodo o funcion que puede estar declarado o no en una clase
//Un objeto es una instancia de una clase
let obj_literal = { //objeto abstracto porque no tiene una clase
    nombre: 'Juan',
    edad: 35
}
let obj_constructor = new Object();
obj_constructor.nombre = 'Dora';
obj_constructor.edad = 23;
console.log(obj_literal);
console.log(obj_constructor);

//USAR CANDADO O LLAVE
obj_literal['nombre'];
let llave = 'nombre';
console.log('Esto es con llave: ' + obj_literal[llave]);

/* La abstracción consiste en ocultar los detalles de implementación y resaltar las características esenciales de un objeto para los usuarios. Así es como la incorporación de la abstracción en un programa de JavaScript puede mejorar la legibilidad del código y evitar la duplicación. Al proporcionar sólo los detalles importantes a los usuarios, también mejora la seguridad de una aplicación. */
