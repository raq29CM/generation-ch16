public class EjemploString {
    public static void main(String[] args) {
        String curso = "Curso en java";
        System.out.println("curso = " + curso);
        String nombre = "Raquel";
        String resultado = new String("Curso en Java");
        System.out.println("resultado = " + resultado);

        boolean esigual = curso == resultado; //SE USA == CUANDO COMPARAMOS OBJETOS
        System.out.println("esigual = " + esigual);

        esigual= curso.equalsIgnoreCase(resultado); // CUANDO COMPARAMOS LA SEMANTICA SE USA EQUALS()
        System.out.println("esigual = " + esigual); // equalsIgnoreCase solo busca que lo que este escrito sea lo mismo sin importar las mayusculas o minusculas

        String concat = curso +" con "+ nombre;
        System.out.println("concat = " + concat);
        String dia = "Jueves";

        String concat1 = concat.concat(" con ").concat(dia);

        System.out.println("concat1 = " + concat1);

        String valor = "Hola";
        System.out.println(valor.concat("23"));
    }
}
