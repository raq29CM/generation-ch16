package MiEjemploJava;

public class EjemploPersona {

    public static void main(String[] args) {
        Persona p = new Persona();
        p.setNombre("Raquel");
        p.setEdad(25);
        p.setNss(164978);
        System.out.println("El cvalor de la variable de instancia p.nombre -> " + p.getNombre());
        System.out.println("El cvalor de la variable de instancia p.edad -> " + p.getEdad());
        System.out.println("El cvalor de la variable de instancia p.nss -> " + p.getNss());


    }
}
