function saludar(){
    alert('Hola');
}

function risa(){
    alert('jeje 7u7');
}

//PARA FORMA 2
const boton = document.getElementById('boton');
console.log(boton);
boton.addEventListener('click', (evento) => {
    alert("Holaaa!");
    console.log(evento.target);
});

//FORMULARIO
const formulario = document.getElementById('form');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(formulario[0].value);
});