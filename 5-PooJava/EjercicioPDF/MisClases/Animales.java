package MisClases;

public class Animales {
    private String raza;
    private String nombre;
    private int edad;

    public Animales(String nuevoNombre){
        this.nombre = nuevoNombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getNombre() {
        return nombre;
    }

}
