
//funcion para cambiar unidades de temperatura

/*Primero creamos dos funciones para transformar de grados celcius a grados fahrenheint y luego otra funcion para transformar los grados celcius en grados kelvin.
Nuesta premisa parte de que la ubicación para detectar la temperatura en nuesta weather app se encuentra en sudamerica, donde la escala estandar son los grados celcius. Luego, si uno quiere saber cuantos grados representan en las otras dos escalas, solo tendrá que apretar el botón y se hará la conversión.*/


const celciusAFahrenheit = function (x) {
    return (9/5)*x + 32;

}

const celciusAKelvin = function (x){
    return x + 273;
}

//Luego, creamos una función que dependa de la temperatura ingresada y hacia la escala en la que se quiera transformar. Esta nos devolverá los grados transformado según la esacala pedida. 
 
const celciusA = function(temp, unidad){

    if (unidad.toLowerCase() == "fahrenheit"){

        let fahrenheit = celciusAFahrenheit(temp);
        return fahrenheit;

    } else if (unidad.toLowerCase() == "kelvin"){

        let kelvin = celciusAKelvin(temp);
        return kelvin ;
    }

}

//Para finalizar, probamos nuestra función y vemos los resultados arrojados en nuestro inspector web.  

console.log(celciusA(32,"fahrenheit"));
console.log(celciusA(25,"kelvin"));
console.log(celciusA(18,"celcius")); //En esta situación, el resultado arrojado sera UNDEFINED ya que dentro de la función  "celciusA",  no tiene sentido transformar celcius a celcius


//Por último, creamos otra función para utilizar a futuro, en donde al informar la temperatura se evaluara si la misma es superior a 35°C e indicará si es una temperatura extrema. Junto con las clases de CSS, transformaremos la representación con gradientes de color amarillo, naranja y rojo para representar esa temperatura. En el caso contrario, si la temperatura es menor a 0°C los colores del gradiente serán de color celeste y azul. Cabe indicar que la función está pensada para mostrar la temperatura de la zona local, en este caso, Buenos Aires. 

const tempExtrema = function (temp){
    
    if (temp >= 35){
        return "extremo calor";
    } else if (temp < 0) {
        return "extremo frio";
    }
    return "no es extremo";

}


let mostrarTempExt =  parseInt(prompt(`Ingrese una temperatura!`));
    
if (mostrarTempExt === NaN){

    alert(`Por favor, ingresa algún número por favor`);
} else {
    
    alert(`la temperatura es ${tempExtrema(mostrarTempExt)}`);
} 






