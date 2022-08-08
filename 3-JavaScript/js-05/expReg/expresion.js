/* Expresiones regulares*/
let texto = "Hoy va salir el sol";
let buscar = /sol/;
/* Se ocupan metodos ya que se toma a la variable como objeto. */
console.log(buscar.test(texto));

/* El metodo test es case sensitive */
let texto1 = "Te veo en el aeropuerto de la";
let buscar1 = /LA/;
console.log(buscar1.test(texto1));

/* Para buscar e o la letra o - Es como un OR*/
let texto2 = "Te marqué anoche";
let buscar2 = /[eo]/;
console.log(buscar2.test(texto2));

let texto3 = "4 = 4.567";
let buscar3 = /[aeiou]/;
console.log(buscar3.test(texto3));

let texto4 = "0 = 9";
let buscar4 = /[1-5]/;
console.log(buscar4.test(texto4));

let texto5 = "los numeros primos son 235 7 dentro de los 10 primeros numeros";
let buscar5 = /\d{3}/;
console.log(buscar5.test(texto5));

let texto6 = "usuario@servidor.com";
let buscar6 = /[\w]+@{1}[\w]+\.[a-z]{2,3}/;
console.log(buscar6.test(texto6));

