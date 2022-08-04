let grados = parseFloat(prompt("Ingresa los grados: "));
let medicion = parseInt(prompt("Selecciona 1 para Celsius. \nSelecciona 2 para Fahrenheit. \nSelecciona 3 para Kelvin."));

switch(medicion){
    case 1:
        function gCelsius(grados){
            f= (1.8*grados)+32;
            k = grados + 273.15;
            alert("La conversion a grados Fahrenheit es: " + f + "\nLa conversion a grados Kelvin es: " + k);
        }
        gCelsius(grados);
        break

    case 2:    
        function gFahrenheit(grados){
            c= (grados - 32) * (5/9);
            k= ((grados - 32) * (5/9)) + 273.15;
            alert("La conversion a grados Celsius es: " + c + "\nLa conversion a grados Kelvin es: " + k);
        }
        gFahrenheit(grados);
        break

    case 3:
        function gKelvin(grados){
            f = (1.8*(grados/273.15)) +32;
            c= grados - 273.15;
            alert("La conversion a grados Celsius es: " + c + "\nLa conversion a grados Fahrenheit es: " + f);
        }
        gKelvin(grados);
        break

    default:
        alert("Opcion no disponible");
}