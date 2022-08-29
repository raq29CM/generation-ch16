package com.arcm.herencia;

public class BasePadre {
    private int a;
    private double b;
    private String c;

    public BasePadre(){}

    public void visualizarA(int a){
        System.out.println("El valor entero es: " + a);
    }

    public void visualizarABC(int a, double b, String c){
        System.out.println("El valor entero es: " + a);
        System.out.println("El valor double es: " + b);
        System.out.println("El string es: " + c);
    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }
}
