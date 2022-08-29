public class Aclaracion {
    private int atributo1;
    private int atributo2;
    private String atributo3;

    public Aclaracion(int at1, int at2, String at3){
        this.atributo1 = at1;
        this.atributo2 = at2;
        this.atributo3 = at3;
    }

    public static void main(String[] args) {
        Aclaracion ac = new Aclaracion(5, 12, "woosh");

        System.out.println("Atributo1: " + ac.atributo1 + ". \nAtributo2: " + ac.atributo2 + ". \nAtributo3: " + ac.atributo3);
    }
}
