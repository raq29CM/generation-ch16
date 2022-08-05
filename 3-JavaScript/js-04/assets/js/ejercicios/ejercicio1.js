let personas = ["Sofia", "David", "Juan"];
console.log("La fila inicial: " + personas);

/* Se añaden tres personas mas al final de la linea: Sara y Agustin. La primera persona en la linea es llamada por el asesor. ¿Cómo luce la fila ahora? */
personas.push("Sara", "Agustin");
personas.shift();
console.log("La fila en la parte 2: " + personas);

/* David estaba apartando un lugar para su amiga Renata, la cual se pone detras de el en la fila. También, llega Elena quien se pone hasta el final de la fila */
personas.splice(1,0,"Renata");
personas.push("Elena");
console.log("La fila en la parte final: " + personas);