//CREAR UN ELEMENTO
const imagen = document.createElement("img"); //se crea el elemento
console.log(imagen);
//modificaremos los atributos HTML del elemento
imagen.src = 'https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&w=600&h=320&dpr=1';
imagen.alt = 'Imagen de un michi'
document.body.appendChild(imagen); //lo insertamos en el elemento padre AL FINAL - DE USO MAS COMUN
document.body.insertAdjacentElement("afterbegin", imagen); //lo insertamos al INICIO de la etiqueta
document.body.insertAdjacentElement("afterend", imagen); //lo insertamos DESPUES de la etiqueta, justo donde termina. NO SE RECOMIENDA USAR DESPUES DEL BODY
document.body.insertAdjacentElement("beforebegin", imagen); //lo insertamos ANTES de la etiqueta
document.body.insertAdjacentElement("beforeend", imagen); //lo insertamos AL FINAL de la etiqueta

/* *********** FORMA CORRECTA DE CREAR E INSERTAR UN ELEMNTO *********** */
//1.- Ya se tieme un espacio reservado en el HTML. Ej. <div id="padreIMG"></div>
//2).-Seleccionamos el elemento padre:
const padreImg = document.getElementById('padreImg');
//3.- Crear el elemnto:
const imagen2 = document.createElement("img"); //se crea el elemento
//4.- Modificamos los atributos del elemento
imagen2.src = 'https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=500&h=210&dpr=1';
imagen2.alt = '';
//5.- Insertar el elemento
padreImg.appendChild(imagen2);


//UTILIZAR forEach PARA 'PINTAR'/USAR DATOS
const frutas = ["Toronja", "Manzana", "Mandarina", "Limon", "Granada", "Melon"];
const listarFrutas = document.getElementById('frutas');

//FORMA 1
/* frutas.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element;
    listarFrutas.appendChild(li)
}); */

//FORMA 2
frutas.forEach((elemento) => {
    listarFrutas.innerHTML += `<li>${elemento}</li>`; //las comitas de interpolacion: ALTGR + }
});