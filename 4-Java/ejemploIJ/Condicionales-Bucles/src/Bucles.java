import java.util.Objects;
import java.util.Scanner; // importar todas las clases del paquete util con java.util.*

public class Bucles {
    //bucle controlado
    public static void main(String[] args) {
        for (int i=5; i<=10; i++){
            System.out.println(i);
        }

        // While
        // Buclee no controlado
        // La condicion se debe modificar dentro del while

        //Mientras la condicion sea tru
        String condicion = "";
        Scanner sc = new Scanner(System.in);

        // == != estamos comparando datos primitivos
        while(!Objects.equals(condicion, "Hola")){
            System.out.println("Saludame");
            condicion = sc.next();
        }

        // El do while es igual al while
        // El do while ejecuta la accion aunque sea una vez
        do {
            System.out.println("Saludame x2");
            condicion = sc.next();
        }while(!Objects.equals(condicion, "Hola"));
    }
}
