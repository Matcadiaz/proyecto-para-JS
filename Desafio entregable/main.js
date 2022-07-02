//Vamos a crear una billetera virtual, en donde se podrá realizar distintas operaciones y poder, visualizar, modificar o no hacer nada finalizando nuestra visita. 

//primer paso, creamos las variables que utilizaremos dentro del bloque.

//segundo le pediremos al usuario que ingrese alguna de las operaciones que se le mostrará en pantalla.

let operacion = prompt(`Qué operación desea realizar?, sus opciones son: Mostrar saldo - Depositar - Extraer - Finalizar`).toLowerCase();
let saldo = 0;
let cantidad; 

//La variable "cantidad", la dejaremos libre para que luego, cuando se ejecute el bloque de código, vaya variando según la operación que se realice. 

//Para iniciar nuestro ciclo, lo haremos con un while en donde la operación elegida sea distinta de la acción "finalizar", si no de esta manera el usuario estaría cerrando el ciclo sin haber empezado.

//Luego, para cada una de las distintas operaciones, usaremos un switch para que se analice que accione se debeje ejecutar en cualquiera de las operaciones ingresadas.

//Si el usuario elige la operacion depositar o en su defecto pone la palabra deposito, le pedirá un prompt en donde tendrá que ingresar el dinero a depositar. Si la cantidad es mayor a cero, en la variable saldo se guardará el valor de la cantidad a ingresar y se sumará al saldo. Luego saldrá un cartel diciendo que la operación fue exitosa y arrojará en nuevo saldo en pantalla. En caso de que ingrese un saldo negativo, le arrojara un aviso pidiendo que ingrese un monton positivo. 

//Por otro lado, si el usuario elige la operacion retirar o extraer dinero, se analizará si el monto ingresado es mayor a cero y que al mismo tiempo esa cantidad no sea mayor al saldo disponible a retirar. Si el monto ingresado cumple las condiciones, el bloque, arrojará un aviso diciendo que la operación fue exitosa y mostrará el nuevo saldo disponible. Si el monto que se ingresó es menor a cero, dirá que no es posible realizar esa operación y por ende le pedira ingresar un nuevo monto. En cambio, si el monto es superior al saldo disponible, le dira que no se podrá extraer ese monto ya que supera el disponible y que ingrese un nuevo monto.

//Por último, si sólo desea ver el saldo que tiene, ya sea al comienzo o al final de cualquier operación, le arrojará de cuánto es el mismo.

//Si el usuario desea retirarse, escribe finalizar y el ciclo while se cierra dando paso al saludo final del simulador. 

while (operacion != "finalizar"){

    switch(operacion) {
        case "depositar":
        case "deposito":
            cantidad = parseFloat(prompt(`Cuánto dinero desea depositar`));
            if (cantidad > 0){
                saldo = cantidad + saldo;
                alert(`Operacion realizada con éxito, su nuevo saldo es de: ${saldo}`);
            } else {
                alert(`Por favor ingrese un saldo positivo`);
            }
            break;

        case "extraer":
        case "retirar":
            cantidad = parseFloat(prompt(`Cuánto dinero desea retirar`));
            if ((cantidad > 0) && (cantidad <= saldo)) {
                saldo = saldo - cantidad;
                alert(`Su nuevo saldo es de: ${saldo}`);
            } else if(cantidad < 0) {
                alert(`Imposible realizar operacion. Por favor ingrese otro monto`);
            } else {
                alert(`La cantidad ingresada es mayor al disponible, su saldo es ${saldo}. Por favor ingrese otro monto`);
            }
            break;
        case "mostrar saldo":
        case "consulta":
        case "saldo": 
            alert(`Su saldo es: ${saldo}`);
        
    } 
    
    operacion = prompt(`Qué operación desea realizar?, sus opciones son: Mostrar saldo - Depositar - Extraer - Finalizar`).toLowerCase();
}

alert(`Muchas gracias por operar con nosotros`);