public class OperadoresAsignacion {
    public static void main(String[] args) {
        int i = 5;
        int j = i + 4;
        System.out.println("i = " + i);
        System.out.println("j = " + j);

        i+= 2; // i=i+2  5+2=7
        System.out.println("i = " + i);
        j-=4; // j=j-4 9-4=5
        System.out.println("j = " + j);

        i*=3; // 7*3=21
        System.out.println("i = " + i);
    }
}
