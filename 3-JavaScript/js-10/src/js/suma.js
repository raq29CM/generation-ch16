const suma = (a, b) => {
    return a+b;
}

console.log(suma(3,5));

//EXPORTAR A OTRO ARCHIVO
module.exports = suma



//CORROBORACION EXAMEN
/* const numeros = [1,2,3,4,5,6,7,8,9,10];
numeros.push(79);
 */
/* const numPar = buscar => {
    return buscar%2 ==0;
} */

/* console.log(numeros); */



/* const ejemProm = () => Promise.resolve("C");

function pFuncion(){
    console.log("A");
    ejemProm().then(res => console.log(res));
}

 async function sFuncion(){
    console.log(await ejemProm());
    console.log("B");
}

pFuncion();
sFuncion();
 */