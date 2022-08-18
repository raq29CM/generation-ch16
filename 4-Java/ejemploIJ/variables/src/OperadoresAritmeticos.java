import java.util.Scanner;

public class OperadoresAritmeticos {
    public static void main(String[] args) {
        
        int i = 5, j = 4, suma = i + j; //SUMA
        System.out.println("suma = " + suma);
        System.out.println("i + j =" + (i + j));
        System.out.println("i + j =" + i + j);

        int resta = i - j; //RESTA
        System.out.println("resta = " + resta);
        System.out.println("i - j = " + (i - j));

        int multi = i * j; //MULTIPLICACION
        System.out.println("multi = " + multi);
        System.out.println("i * j = " + (i * j));

        int div = i / j; //DIVISION
        System.out.println("div = " + div);
        float div1 = (float) i / (float) j;
        System.out.println("div1 = " + div1);

        int resto = i % j; //RESIDUO
        System.out.println("resto = " + resto);
        resto = 8 % 5;
        System.out.println("resto = " + resto);

        Scanner scanner = new Scanner(System.in); //PIDE DATOS
        //System.out.println(" Cual es tu nombre: ");
        //String dato = scanner.next();
        //System.out.println("Mi nombre es : " + dato);

        System.out.println(" Cual es tu edad: ");
        String dato = scanner.next();
        int edad = Integer.parseInt(dato);
        // System.out.println("Mi edad es : " + edad);
        System.out.println(" Cual es tu nombre: ");
        String nombre = scanner.next();
        System.out.println("Mi nombre y edad es : " + nombre + " " + edad);
    }
    }
