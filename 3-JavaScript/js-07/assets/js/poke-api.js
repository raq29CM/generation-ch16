//URLs para consumir
const url1 = "https://pokeapi.co/api/v2/pokemon/";

//Elementos del DOM
//1.- Ya se tieme un espacio reservado en el HTML. Ej. <div id="img-michi"></div>
//2).-Seleccionamos el elemento padre:
const imgPokemon = document.getElementById("img-pokemon");
console.log(imgPokemon);
const idPokemon = document.getElementById("id-pokemon");
console.log(idPokemon);
const namePokemon = document.getElementById("nombre-pokemon");
console.log(namePokemon);
const listaHabilidades = document.getElementById("lista-habilidades");
console.log(listaHabilidades);
const listaTipos = document.getElementById("tipos");
console.log(listaTipos);
const formulario = document.getElementById("buscador-pokemon");
console.log(formulario);

//Eventos 
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Boton presionado");

    //Agregar funcionalidad
    const inputPokemon = document.getElementById("busqueda-pokemon");
    console.log(inputPokemon.value);

    const nuevaBusqueda = url1 + inputPokemon.value;
    console.log(nuevaBusqueda);
    obtenerPokemon(nuevaBusqueda);

})

//funcion para obtener michis aleatorios
async function obtenerPokemon(url1){
    try{
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


        //IMAGEN, NOMBRE Y ID
        imgPokemon.src = pokemon.imagen;
        idPokemon.textContent = `ID: ${pokemon.id}`; 
        namePokemon.textContent = pokemon.nombre.toUpperCase();

        //HABILIDADES
        let template = ``;

        for(let i=0; i< pokemon.habilidad.length; i++){
            const nombreHabilidad = pokemon.habilidad[i].ability.name;
            console.log(nombreHabilidad);
            template += `<li class="list-group-item"> ${nombreHabilidad} </li>`;
        }

        listaHabilidades.innerHTML = template; //ya que tiene comillas dobles se usan las comitas 'chuecas'

        //TIPOS
        let template2 = ``;

        pokemon.tipo.forEach((tipo) => {
            const nombreTipo = tipo.type.name;
            console.log(nombreTipo);
            template2 += `<li class="list-group-item"> ${nombreTipo} </li>`;
        })

        listaTipos.innerHTML = template2;
    }catch(e){
        alert("Pokemon o ID inexiste. Intente de nuevo, por favor.")
    }
} 
