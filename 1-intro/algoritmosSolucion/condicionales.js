//CONTROL DE FLUJO

//Condicionales
//IF

let nombre = prompt("Cual es tu nombre?","Escribe tu nombre");

if(nombre === "Raquel"){
    console.log("Holi, Raquel");
}else if(nombre === "Julio"){
    console.log("Amooociiiiito!");
}else if(nombre === "Zyanya"){
    console.log("Prometedora de jokeis");
}else if(nombre === "Gabriela"){
    console.log("Suegriiiiis!");
}else if(nombre === "Diana"){
    console.log("Dianuki-nuki");
}else{
    console.log("Holi, persona");
}

//shift+alt+a = comentar seleccionado
//CASTEO - string a numerico (parseInt)
//Tambien existe parseFloat
console.log("Edad");
let edad = prompt("Cual es tu nombre?","Escribe tu edad");
console.log(typeof(edad));
console.log(edad);
edad = parseInt(edad);
console.log(typeof(edad));
console.log(edad);
