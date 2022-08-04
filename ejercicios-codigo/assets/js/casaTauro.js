let carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"];
console.log(carreritas);

/* Andrea adelanta a Maria */
carreritas.splice(4,1);
carreritas.splice(2,0,"Andrea");
console.log(carreritas);

/* Jose es descalificado de la carrera */
carreritas.splice(5,1);
console.log(carreritas);

/* Detras de Lucia y antes de Roberto se clasifican tres nuevos corredores: Cristobal, Fernanda y Armando */
carreritas.shift();
carreritas.unshift("Lucia", "Cristobal", "Fernanda", "Armando" );
console.log(carreritas);

/* Hay un nuevo concursante que toma el primer puesto: Federico */
carreritas.unshift("Federico");
console.log(carreritas);