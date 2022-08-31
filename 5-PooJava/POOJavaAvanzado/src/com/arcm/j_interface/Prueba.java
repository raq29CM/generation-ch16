package com.arcm.j_interface;

class Prueba implements Test,Test1{

    @Override
    public void metodo1(int x) {
        System.out.println("Parametro x = " + x);
    }
    @Override
    public String metodo2(String s) {
        return "Parametro s = " + s;
    }

    public void metodoPropio(){
        System.out.println("Metodo propio");
    }

    public void metodo01(){
        System.out.println("Soy metodo01 de test1");
    }

    @Override
    public String metodo02() {
        return "Soy metodo02 de test1";
    }
}
