/* *********************** FUNCIONES COMO OBJETOS ************************** */
/* Es una abstraccionn en donde definimos a traves de pares de valores key-value y las funciones que este objeto puede realizar.*/

function miFuncion(a=6, b=7){ //a,b son parametros
    let res = 0; //propiedad (parametro)
    res = (a*b); //accion o proceso
    return  res; 
}
// a,b, res son tres parametros

console.log(typeof miFuncion);
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);