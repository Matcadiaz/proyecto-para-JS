//Vamos a crear una cuenta bancaria, donde se deposita el dinero, se extrae o finaliza el proceso.

let saldo = 0;
let operacion = prompt(`Qué operación desea realizar?, sus opciones son: Mostrar saldo - Depositar - Extraer - Finalizar`).toLowerCase();
let cantidad;
let nuevoSaldo;

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
            } else {
                alert(`Imposible realizar operacion, su saldo es ${saldo}. Por favor ingrese otro monto`);
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