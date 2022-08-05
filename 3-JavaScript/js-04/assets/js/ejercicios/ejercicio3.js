/* ************************* PROBLEMA #1 *************************  */
let xValue = 5;
console.log("XVALUE DECREMENTA EN 0.5\n");
while(xValue>=0){
    console.log(xValue + "\n");
    xValue -= 0.5;
}
console.log("\n");

/* ************************* PROBLEMA #2 *************************  */
console.log("NUMEROS IMPARES ENTRE 1 - 100\n");
let impar = 1;
while(impar<=100){
    console.log(impar + "\n");
    impar += 2;
}
console.log("\n");

/* ************************* PROBLEMA #3 *************************  */
console.log("IMPRIMIR DE 1 a N\n");
let n = 6;
let inic=1;
while(inic<=n){
    console.log("[" + inic + "] ");
    inic ++;
}
console.log("\n");

/* ************************* PROBLEMA #4 *************************  */
console.log("SUMAR NUMEROS DEL 1 HASTA N\n");
n = 5;
inic=0;
let incremento = 1;
while(incremento<=n){
    inic = inic + incremento;
    incremento ++;
}
console.log("La suma de 1 hasta " + n + " es igual a: " + inic + "\n");
