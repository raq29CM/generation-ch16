package com.arcm.j_interface;

public class EjemploTest {
    public static void main(String[] args) {
        System.out.println("test.conv = " + Test.conv);
        System.out.println("prueba.test = " + Prueba.conv);

        Prueba p = new Prueba();
        System.out.println("p = " + p.conv);

        Test ts = new Prueba(); //Intancia de referencia
        ts.metodo1(3);
        System.out.println(ts.metodo2("Hola"));
        p.metodoPropio();

        Test1 s1 = new Prueba();
        s1.metodo01();
        System.out.println(s1.metodo02());
    }
}
