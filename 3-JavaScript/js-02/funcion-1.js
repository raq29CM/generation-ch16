/* Una funcion es una accion que puede realizar un objeto - nos permiten ejecutar un procedimiento y son reutiliuzables */

function miSuma(a,b){
    let resultado = a + b;
    console.log("La suma es: " + resultado);
}

miSuma(2, 3);

function miSuma(a,b){
    console.log("La suma es: "  + (a + b));
}

miSuma(4, 6);

//Forma favorita de VIC
function miProducto(a, b){
    return (a*b);
}

console.log("El producto es: " + miProducto(4, 5));
//Forma favorita de VIC 

function miResta(a, b){
    return(a-b);
}

let res = miResta(10, 4);
console.log("La resta es: " + res);