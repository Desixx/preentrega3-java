function sacarPrecio(tipoPlan, cantMeses) {
    let costo = 0;
    
    if(tipoPlan === "basico" || tipoPlan === "básico") {
        costo = 1200;
    } else if(tipoPlan === "intermedio") {
        costo = 2400;
    } else if(tipoPlan === "premium") {
        costo = 4000;
    }
    
    return costo * cantMeses;
}

const verDescuento = function(monto, cantMeses) {
    let desc = 0;
    if(cantMeses >= 6) {
        desc = monto * 0.15;
    }
    return desc;
}

const calcularFinal = (monto, desc) => monto - desc;

let activo = true;

while(activo) {
    let plan = prompt("¿Qué plan querés? (basico, intermedio, premium) o escribi 'fin' para salir").toLowerCase();

    if(plan === "fin") {
        alert("Saliendo del sistema...");
        activo = false;
    } else if(plan === "basico" || plan === "básico" || plan === "intermedio" || plan === "premium") {
        
        let meses = parseInt(prompt("¿Cuántos meses lo vas a contratar?"));

        if(isNaN(meses) || meses <= 0) {
            alert("Error: tenes que poner un número válido de meses.");
        } else {
            let subtotal = sacarPrecio(plan, meses);
            let descuento = verDescuento(subtotal, meses);
            let total = calcularFinal(subtotal, descuento);

            alert("Resumen:\nPlan: " + plan + "\nMeses: " + meses + "\nSubtotal: $" + subtotal + "\nDescuento: $" + descuento + "\nTotal a pagar: $" + total);

            console.log("cotizacion hecha");
            console.log("plan: " + plan);
            console.log("total: " + total);
        }

    } else {
        alert("Ese plan no existe che, probá de nuevo.");
    }
}