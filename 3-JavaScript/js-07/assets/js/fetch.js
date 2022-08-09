//API Fetch esta en la documentacion de js asi que es una API local.
//Fetch nos da una interfaz para realizar peticiones de internet
//Esta API nos ayudara a utilizar APIs publicas remotas

const url = "https://dog.ceo/api/breeds/image/random";


/* ******************************* FORMA 1 ******************************* */
//Respuesta de la peticion
fetch(url)
.then((respuesta) => {
    console.log(respuesta); //se obtiene el header
})

//Obetener la informacion de la peticion
fetch(url)
.then((respuesta) => respuesta.json()) //se obtiene el link dentro del header
. then((datos) => {
    console.log(datos); //Los datos en la pagina
}).catch((error) => {
    console.log(error); //en caso de error (por si el API se cae o es deshabilitada o cualquier error que se pueda presentar del lado de la API o nuestro)
})


/* ******************************* FORMA 2 ******************************* */
async function obtenerPerritosAleatorios(){
    const respuesta = await fetch(url);
    const datos = await respuesta.json()

    console.log(datos);
}

obtenerPerritosAleatorios();