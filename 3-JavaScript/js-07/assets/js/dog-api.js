/* **************************** FORMA 1  **************************** */

//URLs para consumir
const url = "https://dog.ceo/api/breeds/image/random";

//Elementos del DOM
//1.- Ya se tieme un espacio reservado en el HTML. Ej. <div id="img-perrito"></div>
//2).-Seleccionamos el elemento padre:
const imgPerrito = document.getElementById("img-perrito");
console.log(imgPerrito);

const btn = document.getElementById("btn-perrito");
console.log(btn);

//Eventos 
btn.addEventListener("click", () => {
    console.log("Boton presionado");

    //Agregar funcionalidad
    obtenerPerritosAleatorios(url);

})

//funcion para obtener perritos aleatorios
async function obtenerPerritosAleatorios(url){
    const respuesta = await fetch(url);
    /* const datos = await respuesta.json() */

    console.log(respuesta);
    /* console.log(datos.message); */ //url de la imagen
    /* console.log(datos.status); */ //status: success o failed

    imgPerrito.src = datos.message;
}

