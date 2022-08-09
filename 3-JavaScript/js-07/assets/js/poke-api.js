//URLs para consumir
const url1 = "https://pokeapi.co/api/v2/pokemon/133";

//Elementos del DOM
//1.- Ya se tieme un espacio reservado en el HTML. Ej. <div id="img-michi"></div>
//2).-Seleccionamos el elemento padre:
const imgPokemon = document.getElementById("img-pokemon");
console.log(imgPokemon);
const idPokemon = document.getElementById("id-pokemon");
console.log(idPokemon);
const namePokemon = document.getElementById("nombre-pokemon");
console.log(namePokemon);

/* const btn = document.getElementById("btn-michi");
console.log(btn); */

//Eventos 
/* btn.addEventListener("click", () => {
    console.log("Boton presionado");

    //Agregar funcionalidad
    obtenerPokemon(url1);

}) */

//funcion para obtener michis aleatorios
async function obtenerPokemon(url1){
    const respuesta = await fetch(url1);
    const datos = await respuesta.json();

    console.log(datos);
    //Esto sera solo para confirmar que estamos obteniendo el dato correcto
    console.log(datos.forms[0].name);
    console.log(datos.abilities);
    console.log(datos.id); 
    console.log(datos.types);
    console.log(datos.sprites.other["official-artwork"].front_default);


    const pokemon = {
        nombre: datos.forms[0].name,
        habilidad: datos.abilities,
        id: datos.id,
        tipo: datos.types, 
        imagen: datos.sprites.other["official-artwork"].front_default
    }

    imgPokemon.src = pokemon.imagen;
    idPokemon.textContent = `ID: ${pokemon.id}`; 
    namePokemon.textContent = pokemon.nombre.toUpperCase();
} 
obtenerPokemon(url1);