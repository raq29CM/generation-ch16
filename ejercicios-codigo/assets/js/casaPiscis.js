let saldo = 10000;
let retiro = parseInt(prompt("Que cantidad desea retirar del cajero?"));

if(retiro > saldo){
    alert("No se puede retirar esa cantidad.\nSaldo insuficiente.");
}else{
    saldo -= retiro;
}

let opcion = parseInt(prompt("Desea verificar su saldo? \nPulse 1 para SI. \nPulse 2 para NO."));

switch(opcion){
    case 1:
        alert("Su saldo es: " + verSaldo(saldo));
        break;
    case 2:
        alert("Hasta luego!");
    default:
        alert("Opcion invalida. \nIntente de nuevo.");
}

function verSaldo(saldo){
    return saldo
}