/* ********************** CONTROL DE FLUJO *********************** */
/* *********************** CONDICIONALES ************************* */

/* IF */

/* 
if(condicion){
    instrucciones si se cumple la condicion A 
}else if{
    instrucciones si se cumple la condicion B 
}else{
    instrucciones por 'default'
}
*/

/* EJEMPLO */
function dividir(a,b){
    if(b===0){
        console.log("No se puede realizar la operacion");
    }else{
        console.log("El resultado de la division es: " + (a/b));
    }
}
dividir(10,2);