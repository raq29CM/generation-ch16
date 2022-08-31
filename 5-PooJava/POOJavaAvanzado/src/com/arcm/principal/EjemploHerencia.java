package com.arcm.principal;
import com.arcm.herencia.BasePadre;
import com.arcm.herencia.Hija;
import com.arcm.herencia.Hijo;
import java.util.ArrayList;
import java.util.List;

public class EjemploHerencia {
    public static void main(String[] args) {
        Hija h = new Hija();
        h.visualizarA();

        Hijo ho = new Hijo();
        ho.setA(14689);
        ho.visualizarABC();

        BasePadre objB = new BasePadre();
        objB.setA(2357);

        Object miObj = new BasePadre();

        System.out.println("Atributo de Clase Base Padre ->"+objB.getA());
        System.out.println("Atributo de Clase Hijo -> "+ho.getA());

    }
}
