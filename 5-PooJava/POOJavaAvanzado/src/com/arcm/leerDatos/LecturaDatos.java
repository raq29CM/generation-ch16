package com.arcm.leerDatos;
import com.arcm.herencia.BasePadre;
import java.util.Scanner;

public class LecturaDatos extends BasePadre{

    public void leerDatos(){
        Scanner leer = new Scanner(System.in);
        LecturaDatos padre1 = new LecturaDatos();

        //Leyendo numero entero
        System.out.println("Inserte un numero entero: ");
        int num = leer.nextInt();
        padre1.setA(num);

        //Leyendo numero de tipo double
        System.out.println("Inserte un numero de tipo double: ");
        double numDecimal = leer.nextDouble();
        padre1.setB(numDecimal);

        //Leyendo cadena de texto
        String cadenaTexto = leer.nextLine(); //Limpiar buffer
        System.out.println("Inserte un a cadena de texto: ");
        cadenaTexto = leer.nextLine();
        padre1.setC(cadenaTexto);

        System.out.println("\nImprimir visualizaA");
        padre1.visualizarA(padre1.getA());
        System.out.println("\nImprimir visualizaABC");
        padre1.visualizarABC(padre1.getA(), padre1.getB(), padre1.getC());
    }

}
