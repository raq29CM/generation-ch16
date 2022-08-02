/* 1) Funcion que con tres variables de nombre completo
nombre:
apellido paterno:
apellido materno: */
function darNombre(nombres, apellidoPaterno, apellidoMaterno){
    nombre = nombres + " " + apellidoPaterno + " " + apellidoMaterno
    return (nombre);
}

let nombres = "Andrea Raquel";
let apellidoPaterno = "Cruz";
let apellidoMaterno = "Morales";
console.log("Mi nombre completo es: " + darNombre(nombres, apellidoPaterno, apellidoMaterno));

/* Operacion division */
function miDivision(a, b){
    return (a/b);
}

console.log(miDivision(10, 2));
