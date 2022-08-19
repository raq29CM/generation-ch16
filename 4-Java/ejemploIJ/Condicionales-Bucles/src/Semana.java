import java.util.Scanner;

public class Semana {
    public static void main(String[] args) {
        System.out.println("Semana");

        Scanner sc = new Scanner(System.in);
        System.out.println("Escriba un numero");
        byte diaSemana = sc.nextByte();

        switch (diaSemana){
            case 1:
                System.out.println("Se ecribio un uno");
                break;
            case 2:
                System.out.println("Se escribio un dos");
                break;
            case 3:
                System.out.println("Se escribio un tres");
                break;
            case 4:
                System.out.println("Se escribio un cuatro");
                break;
            default:
                System.out.println("No entendi");
        }
    }
}
