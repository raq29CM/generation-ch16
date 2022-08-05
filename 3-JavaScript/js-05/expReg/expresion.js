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

