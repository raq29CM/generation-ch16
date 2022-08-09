/* **************************** FORMA 1  **************************** */

//URLs para consumir
const url1 = "https://api.thecatapi.com/v1/images/search";

//Elementos del DOM
//1.- Ya se tieme un espacio reservado en el HTML. Ej. <div id="img-michi"></div>
//2).-Seleccionamos el elemento padre:
const imgMichi = document.getElementById("img-michi");
console.log(imgMichi);

const btn = document.getElementById("btn-michi");
console.log(btn);

//Eventos 
btn.addEventListener("click", () => {
    console.log("Boton presionado");

    //Agregar funcionalidad
    obtenerMichisAleatorios(url1);

})

//funcion para obtener michis aleatorios
async function obtenerMichisAleatorios(url1){
    const respuesta = await fetch(url1);
    const datos = await respuesta.json();

    console.log(datos);
    console.log(datos[0].url); //url de la imagen

    imgMichi.src = datos[0].url;
} 
obtenerMichisAleatorios(url1);