/* Declaramos las variables para el peso en kilogramos pra que esten en la misma unidad de medida */
let pesoMuneca = 0.075;
let pesoPayaso = 0.112;
let numPayasos = parseInt(prompt("Cuantos payasos se vendieron? "));
let numMunecas = parseInt(prompt("Cuantos munecas se vendieron? "));
let pesoTotal = parseFloat(calculaPeso(numPayasos, numMunecas, pesoPayaso, pesoMuneca));
let paquetesTotal = calculaPaquetes(pesoTotal);

function calculaPeso(np, nm, pp, pm){
    return ((np*pp)+(nm*pm));
}

function calculaPaquetes(pesoTotal){
    let paquetes = 0;
    if(pesoTotal%1===0){
        paquetes = parseInt(pesoTotal); 
        return paquetes;    
    }else{
        paquetes = parseInt(pesoTotal); 
        return(paquetes+1);
    }
}


alert("El peso total de payasos y munecas es: " + pesoTotal.toFixed(2) + ".\nEl numero de paquetes a enviar es de: " + paquetesTotal);