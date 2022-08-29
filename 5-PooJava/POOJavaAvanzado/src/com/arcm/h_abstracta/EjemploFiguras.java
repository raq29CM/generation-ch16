package com.arcm.h_abstracta;

public class EjemploFiguras {
    public static void main(String[] args) {
        Triangulo t = new Triangulo(0,0);
        t.setBase(5);
        t.setAltura(2);
        System.out.println("t es el objeto de triangulo = " + t.area());

        Circulo c = new Circulo();
        c.setRadio(15.5f);
        System.out.println("c.area = Calcula el area del circulo = " + c.area());

        Cuadrado cu = new Cuadrado(0,0);
        cu.setBase(5);
        cu.setAltura(5);
        System.out.println("cu es el objeto de triangulo = " + cu.area());

    }
}
