const saludo = "Hola mundo";

const datos = [
    {
        nombre: "Raquel",
        apellido: "Cruz"
    },
    {
        nombre: "Jonathan",
        apellido: "Vazquez"
    },
    {
        nombre: "Brandon",
        apellido: "Urquieta"
    }

]

function obtenerDatos(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(true){
                resolve (datos);
            }else{
                reject("No se obtuvieron los datos");
            }
        }, 500)
    })
}

//Se pueden seguir anidando then(), mientras el resultado sigan siendo promesas.
obtenerDatos().then((datos) => {
    console.log(datos);
}).catch((error) => { //atrapa todos los errores
    console.log(error);
})

/* **************** OPCION 2 - FUNCIONES ASINCRONAS **************** */
async function funcionAsincrona(){
    try{
        const datos = await obtenerDatos()
        console.log(datos);
    }catch(error){
        console.log(error);
    }
}
funcionAsincrona();