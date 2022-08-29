package MiSaludo;

public class EjemploSaludo {
    public static void main(String[] args) {
        // otra manera de llamar el metodo Saludo objSaludo = new Saludo()
        Saludo objSaludo; // declarar el objeto
        objSaludo = new Saludo(); // crear el objeto con new
        objSaludo.saludar(); // llamando al metodo

        Saludo objSaludo0 = new Saludo();

        System.out.println(objSaludo.saludar0());
        System.out.println("este es otro objeto: -> " + objSaludo.saludar0());

        objSaludo.textoS = "Hola";
        System.out.println("objSaludo = " + objSaludo);
        objSaludo0.a = 4;
        System.out.println("objSaludo0 = " + objSaludo0);
    }
}
