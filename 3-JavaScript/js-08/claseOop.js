class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre; //THIS.NOMBRE ES EL ATRIBUTO DE LA CLASE Y NOMBRE ES EL VALOR
        this.apellido = apellido;
    }

    //EL _ en 'nombre' es para volver publico al atributo y poder acceder a el
    get _nombre(){ //retorna el valor que recibe de fuera
        return this.nombre;
    }
    set _nombre(nombre){ //Colocar el valor al atributo
        this.nombre = nombre;
    }
}

let persona1 = new Persona('Jose', 'Perez');
console.log(persona1);

persona1.nombre = 'Hugo Sanchez';
console.log(persona1.nombre);

let persona2 = new Persona('Ana', 'Cruz');
console.log(persona2);