package com.arcm.h_abstracta;

public class Cuadrado extends FigurasGeometricas{
    private float base;
    private float altura;

    public Cuadrado() {
    }

    public Cuadrado(float base, float altura) {
        this.base = base;
        this.altura = altura;
    }

    @Override
    public float area() {
        return (getBase()*getAltura());
    }

    public float getBase() {
        return base;
    }

    public void setBase(float base) {
        this.base = base;
    }

    public float getAltura() {
        return altura;
    }

    public void setAltura(float altura) {
        this.altura = altura;
    }
}
