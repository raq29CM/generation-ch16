public class Arreglos {
    public static void main(String[] args) {
        // Arreglos
        //No se pueden mezclar tipos de datos
        int[] numeroAleatorio = {1,2,3,4,5,6};
        String[] valores = {"Hola","Adios","etc"};
        // byte otrosNumeros[] = {1,2,3}; // No es muy usado para definir
        //Los arreglos tienen un tamaño definido
        char[] caracteres = new char[4];
        caracteres[0] = 'h';
        caracteres[1] = 'o';
        caracteres[2] = 'l';
        caracteres[3] = 'a';

        valores[2] = "Valor cambiado";

        System.out.println(numeroAleatorio.length);
        System.out.println(valores[2]);
        System.out.println(caracteres);

        // for each
        for(String elemento : valores){
            System.out.println(elemento);
        }

        for(int numero : numeroAleatorio){
            System.out.println(numero);
        }
    }
}
