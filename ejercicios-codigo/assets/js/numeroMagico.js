let numero = parseInt(Math.random()*100);
let opcion = 1;

while(opcion===1){
    let num = parseInt(prompt("Numero Magico.\nIngresa un numero: "));
    if(num > numero){
        alert("El numero que ingresaste es mayor al numero magico.");
    }else if(num < numero){
        alert("El numero que ingresaste es menor al numero magico.");
    }else{
        alert("Felicidades, adivinaste el numero magico.");
    }
    opcion = parseInt(prompt("Presione el numero 1 para continuar. \nPresione el numero 2 para salir. "));
}

