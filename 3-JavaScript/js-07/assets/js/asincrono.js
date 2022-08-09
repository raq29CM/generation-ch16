//ASINCRONO
/* Es cuando se tienen varias tareas que se pueden realizar de forma inmediata y otras que no. ENtonces, las que no tienen tiempo de espera se ejecutan en orden y las que tienen tiempo, se envian a una cola para ejecutarse en orden de prioridad. */
const num = 10;
console.log(num);
console.log(2);

setTimeout( () => {
    console.log("Hola");
}, 2000) //Espere 2 segundos para imprimir hola

console.log(3);

setTimeout( () => {
    console.log("Adios");
}, 0)

console.log(4);

for(let i=0; i<10; i++){
    console.log("Procesando");
}

console.log(5);
