import java.util.*;

public class Diccionario {
    public static void main(String[] args) {
        //Creando el diccionario
        Map<String, String> diccionario = new HashMap<String, String>();

        //Introducir palabras en el diccionario
        diccionario.put("manzana", "apple");
        diccionario.put("arbol", "tree");
        diccionario.put("mascota", "pet");
        diccionario.put("vaca", "cow");
        diccionario.put("rosa", "pink");
        diccionario.put("perro", "dog");
        diccionario.put("gato", "kitten");
        diccionario.put("mariposa", "butterfly");
        diccionario.put("mosca", "fly");
        diccionario.put("verdura", "vegetable");
        diccionario.put("abeja", "bee");
        diccionario.put("sol", "sun");
        diccionario.put("nube", "cloud");
        diccionario.put("tierra", "ground");
        diccionario.put("mantequilla", "butter");
        diccionario.put("cocodrilo", "crocodile");
        diccionario.put("lampara", "lamp");
        diccionario.put("zapato", "shoe");
        diccionario.put("tenis", "sneakers");
        diccionario.put("coche", "car");
        diccionario.put("television", "television");
        diccionario.put("oso", "bear");
        diccionario.put("girasol", "sunflower");
        diccionario.put("servilleta", "napkin");
        diccionario.put("carpinteria", "carpentry");
        diccionario.put("madera", "wood");

        System.out.println("Escriba, por ejemplo:");

        for(int i=0; i<5; i++){
            Object llaves = diccionario.keySet().toArray()[i];
            System.out.println(diccionario.get(llaves));
        }

        System.out.println("De que palabra quieres obtener su traduccion?");

        Scanner teclado = new Scanner(System.in);


        for (Map.Entry<String, String> pair : diccionario.entrySet()){
            String scanner = teclado.nextLine();
            if(!Objects.equals(scanner, pair.getKey()) ) {
                System.out.println(pair.getKey() + ": " + pair.getValue());
            }else {
                System.out.println("La palabra no esta en el diccionario");;
            }
        }

    }
}
