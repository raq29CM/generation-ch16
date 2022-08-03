/* Ejercicio de funciones expresion con resta */
let resta = function (a, b){return (a-b)};
console.log("El resultado de la operacion es: " + resta(19, 8));

/* Ejercicio de funciones expresion con multiplicacion */
let multiplicacion = function (a, b){return (a*b)};
console.log("El resultado de la operacion es: " + multiplicacion(7, 4));

/* Ejercicio de funciones expresion con division */
let division = function (a, b){return (a/b)};
let indeterminacion = true;

while(indeterminacion === true){
    let num1 = parseInt(prompt("Digite el numerador: "));
    let num2 = parseInt(prompt("Digite el denominador: "));

    if(num2===0){
        alert("El cero no es un valor admitido. Escriba otro valor:");
    }else{
        console.log("El resultado de la operacion es: " + division(num1, num2));
        indeterminacion = false;
    }
}
