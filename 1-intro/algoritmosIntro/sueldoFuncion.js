function calculadoraSueldo(nombre, sueldo, diasLaborados){
    console.log("DATOS DE EMPLEADO");
    console.log(nombre);
    console.log("Sueldo semanal: $" + (sueldo*diasLaborados));
    console.log("Sueldo mensual: $" + (sueldo*diasLaborados*4));
}

const n = parseInt(prompt("Cuantos sueldos quieres calcular?"));

for(var i=0; i<n; i++){
    let nombre = prompt("Cual es tu nombre?");
    let sueldo = parseInt(prompt("Escribe tu sueldo diario: "));
    let diasLaborados = parseInt(prompt("Escribe los dias que laboras: "));
    calculadoraSueldo(nombre, sueldo, diasLaborados);
}
