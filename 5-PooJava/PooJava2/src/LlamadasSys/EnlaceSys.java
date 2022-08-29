package LlamadasSys;

import MenuP.MenuOp;
import MiEjemploJava.Persona;
import MiFecha.Fecha;
import MiSaludo.Saludo;

import java.util.Scanner;

public class EnlaceSys {
    public void enlazar(){
        Scanner sc = new Scanner(System.in);
        MenuOp menuOp = new MenuOp();
        int op;
        do {

            menuOp.menu();
            System.out.println("Eliga la opcion ->");
            op = sc.nextInt();
            switch (op) {
                case 1:
                    Saludo s = new Saludo();
                    s.saludar();
                    System.out.println(s.saludar0());
                    break;
                case 2:
                    Persona p = new Persona();
                    p.setNombre("Raquel");
                    p.setEdad(25);
                    p.setNss(164978);
                    System.out.println("El cvalor de la variable de instancia p.nombre -> " + p.getNombre());
                    System.out.println("El cvalor de la variable de instancia p.edad -> " + p.getEdad());
                    System.out.println("El cvalor de la variable de instancia p.nss -> " + p.getNss());
                    break;
                case 3:
                    Fecha fechaUno = new Fecha();

                    fechaUno.setDia(29);
                    fechaUno.setMes(11);
                    fechaUno.setAnio(96);
                    System.out.println("La fecha es: " + fechaUno.formatoF(fechaUno.getDia(), fechaUno.getMes(), fechaUno.getAnio()));
                    break;
                case 4:
                    System.out.println("aqui va la catividad del dia");
                    break;
                default:
                    System.out.println("<-- Opcion no valida --> ");

            }
        }while (op != 5 );
    }
}
