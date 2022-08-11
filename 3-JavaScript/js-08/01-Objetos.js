/* let x = 10 ;
console.log(x.length); */ //Ya que el resultado es undefied, sabemos que los tipos de datos primitivos NO SON OBJETOS

let persona = {
    nombre: "Raquel",
    apellido: "Cruz",
    mail: "raquel.cruz2911@gmail.com",
    edad: 25,
    
    //MEDOTOS
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    },
    idioma: 'es',
    get idioma1(){
        return this.idioma.toUpperCase();
    },
    set idioma1(lang){
        this.idioma = lang.toLowerCase();
    }
}

console.log('Imprimir idiomma en mayusculas:')
console.log(persona.idioma1);
console.log('Imprimir idiomma en minisculas:')
persona.lang = 'ES';
console.log(persona.idioma1);



persona.tel = '5548636258';
persona.tel1 = '5512485632';
console.log('Imprimir persona:')
console.log(persona);
console.log('Imprimir persona.nombreCompleto(): ' + persona.nombreCompleto());


//REDEFINIR CON UN CONSTRUCTOR
/* let obj_constructor = new Object();
obj_constructor.nombre = 'Dora';
obj_constructor.apellido = 'Martinez'
obj_constructor.mail = 'dmartinez@gmail.com'
obj_constructor.edad = 23;

console.log(obj_constructor); */

//FOR IN
/* Es otra forma del for normal, pero en ves de usar un iterador, se llama desde la propiedad */
for(varPropiedad in persona){ 
    console.log(persona[varPropiedad]);
}

let personaString = JSON.stringify(persona); //se transforma al objeto en una cadana de caracteres
console.log(personaString);
