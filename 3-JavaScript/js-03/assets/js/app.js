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

/* SWITCH */

/* 
switch(condicion){
    case 1:
        instrucciones;
        break
    case 2:
        instrucciones;
        break
    case 3:
        instrucciones;
        break
    default:
        instrucciones en caso que ninguno de los casos anteriores se cumpla;
}
*/

let nuevaCondicion = "Hola";

switch(nuevaCondicion){
    case "Hola":
        console.log("Buenos dias");
        break
    case "Adios":
        console.log("Nos vemos");
        break
    case "Saludo":
        console.log("Te mando un saludo");
        break
    default:
        console.log("No entendi tu mensaje");
}


/* EJEMPLOS */
/* if */
let elegir = "restar";

if(elegir === "sumar"){

    console.log("Vamos a sumar");

}else if(elegir == "restar"){

    console.log("Vamos a restar");

}else if(elegir == "dividir"){

    console.log("Vamos a dividir");

}else if(elegir == "multiplicar"){

    console.log("Vamos a multiplicar");

} else {

    console.log("No entiendo");

}

/* switch */
switch(elegir){

    case "sumar":
        console.log("Vamos a sumar");
        break

    case "restar":
        console.log("Vamos a restar");
        break

    case "dividir":
        console.log("Vamos a dividir");
        break

    case "multiplicar":
        console.log("Vamos a multiplicar");
        break

    default:
        console.log("No entiendo");
}