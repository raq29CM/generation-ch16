/* console.log(document.ATTRIBUTE_NODE);
console.log(document.URL); */

//getElementById()
/* console.log(document.getElementById("parrafo1").textContent); */

//COSAS DE PARRAFO 1
const $parrafo1 = document.getElementById("parrafo1");
console.log($parrafo1.textContent);
console.log($parrafo1.style);
$parrafo1.style.color = 'red';
$parrafo1.style.backgroundColor = 'black';

//COSAS DE PARRAFO 2
const $parrafo2 = document.querySelector(".parrafo2");
console.log($parrafo2.textContent);
/* 
querySelector()
etiqueta = p
clase = .parrafo2
id = #parrafo1
*/
$parrafo2.textContent += " * Modificando el contenido desde JS.";

//querySelectorAll()
//Nos regresa una lista de NODOS que cumplen con la condicion dada
const parrafos = document.querySelectorAll('p');
console.log(parrafos.length);
console.log(parrafos[2]);
parrafos[2].style.fontSize = "2rem";

//MODIFICAR ATRIBUTOS DE HTML
const enlace = document.getElementById("enlace");
console.log(enlace.href);

//Modificando
enlace.href = "https://www.youtube.com";
console.log(enlace.href);
enlace.target = "_blank";
enlace.textContent = "Enlace a Youtube"

//Ejercicio
//Modificar parrafos
const $parrafo3 = document.getElementById("parrafo3");
$parrafo3.style.color = "purple";
$parrafo3.style.backgroundColor = 'pink';
$parrafo1.style.fontSize = "1.5rem";
$parrafo2.textContent += " QUIERO UN PAN";

//REEMPLAZAR CONTENIDO
const $parrafo4 = document.getElementById("parrafo4");
console.log($parrafo4.nodeName); //que tipo de elemento - nombre de nodo
console.log($parrafo4.textContent);
console.log($parrafo4.innerHTML); //Apunta el HTML que haya en el interior del elemento. Un mejor ejemplo seria:
console.log(document.body.innerHTML);
console.log($parrafo4.outerHTML); //Todo el HTML incluyendo las etiquetas 

/* $parrafo4.innerHTML += ' <a href="https://www.google.com">Enlace</a>'
$parrafo4.outerHTML += ' <a href="https://www.google.com">Enlace2</a>' */

/* $parrafo4.innerHTML = 'Este es un texto normal';
$parrafo4.innerHTML += '<div>Este es un div</div>';

$parrafo4.outerHTML += '<div>Este es un div2</div>'; */

//add
console.log($parrafo4.classList.contains("elemento"));
$parrafo4.classList.add('elemento');
console.log($parrafo4.classList.contains("elemento"));

//toggle
const cambiarColor = () => {
    $parrafo4.classList.toggle('elemento');
}
cambiarColor(); //Se quita la clase elemento
cambiarColor(); //Se agrega la clase elemento



