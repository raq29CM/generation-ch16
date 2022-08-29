import MisClases.Animales;

public class Ejemplos {
    public static void main(String[] args) {
        Animales miAnimal = new Animales("Falco");
        miAnimal.setEdad(3);

        System.out.println("El nombre de mi animal es: " + miAnimal.getNombre());
        System.out.println("La edad de mi animal es: " + miAnimal.getEdad() + " anios");
    }
}
