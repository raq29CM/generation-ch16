public class OperadoresIncrementales {
    public static void main(String[] args) {

        // pre incremento
        int i = 1;
        int j = ++i; // i = i + 1
        System.out.println("i = " + i);
        System.out.println("j = " + j);

        // pre incremento
        i = 1;
        j = --i; // i = i + 1
        System.out.println("i = " + i);
        System.out.println("j = " + j);

        // pos incremento
        i = 2;
        j = i++;
        System.out.println("i = " + i);
        System.out.println("j = " + j);

        // pos incremento
        i = 2;
        j = i--;
        System.out.println("i = " + i);
        System.out.println("j = " + j);

    }
}
