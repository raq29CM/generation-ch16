let saldo = 10000;
let pin = 9182;
let pinIngress = parseInt(prompt("Ingrese su PIN: "));

if(pin === pinIngress){
    let retiro = parseInt(prompt("BIENVENIDO: \nIngrese la cantidad a retirar: "));
    if((retiro%200 === 0) && (retiro <= saldo)){
        alert("Procesando retiro por $" + retiro);
        saldo -= retiro;
        let resto = retiro;
        if(resto >= 1000){
            let mil = parseInt(resto/1000);
            resto -= mil*1000;
            alert("El retiro se efectuara con: \n" + mil + " billete(s) de $1000");
            if((resto >= 500) && (resto < 1000)){
                let quinientos = parseInt(resto/500);
                resto -= quinientos*500;
                alert(quinientos + " billete(s) de $500");
                if((resto < 500) && (resto >= 200)){
                    let doscientos = parseInt(resto/200);
                    resto -= doscientos*200;
                    alert(doscientos + " billete(s) de $200");
                    if((resto < 200) && (resto >= 100)){
                        let cien = parseInt(resto/100);
                        resto -= cien*100;
                        alert(cien + " billete(s) de $100");
                        if((resto < 100) && (resto >= 20)){
                            let viente = parseInt(resto/20);
                            resto -= viente*20;
                            alert(viente + " billete(s) de $20");
                        }
                    }

                }
            }
        }

    }else if(retiro%200 != 0){
        alert("Por el momento solo se permiten retiros en multiplos de $200.");
    }else if(retiro > saldo){
        alert("No se puede retirar esa cantidad.\nSaldo insuficiente.");
    }

    let opcion = parseInt(prompt("Desea verificar su saldo? \nPulse 1 para SI. \nPulse 2 para NO."));
    switch(opcion){
        case 1:
            alert("Su saldo es: " + verSaldo(saldo));
            break;
        case 2:
            alert("Hasta luego!");
            break;
        default:
            alert("Opcion invalida. \nIntente de nuevo.");
    }

}else{
    alert("PIN incorrecto");
}

function verSaldo(saldo){
    return saldo
}



