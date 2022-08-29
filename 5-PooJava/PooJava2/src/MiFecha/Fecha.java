package MiFecha;

public class Fecha {
    private int dia;
    private int mes;
    private int anio;

    public Fecha(){}

    public int getDia() {
        return dia;
    }

    public void setDia(int dia) {
        this.dia = dia;
    }

    public int getMes() {
        return mes;
    }

    public void setMes(int mes){
        this.mes = mes;
    }

    public int getAnio() {
        return anio;
    }

    public void setAnio(int anio) {
        this.anio = anio;
    }

    public String formatoF(int d, int  m, int a){
        String dia = String.valueOf(d);
        String mes = String.valueOf(m);
        String an = String.valueOf(a);
        return (dia + "/" + mes + "/" + an);
    }

    public static void main(String[] args) {
        Fecha fechaUno = new Fecha();

        fechaUno.setDia(29);
        fechaUno.setMes(11);
        fechaUno.setAnio(96);

        System.out.println("La fecha es: " + fechaUno.formatoF(fechaUno.getDia(), fechaUno.getMes(), fechaUno.getAnio()));
    }
}
