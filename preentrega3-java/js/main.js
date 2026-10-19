let planesDisponibles = ["basico", "intermedio", "premium", "familiar", "corporativo"];

planesDisponibles.push("vip");
planesDisponibles.unshift("prueba gratis");
let planEliminado = planesDisponibles.pop();
console.log("Se ha eliminado el elemento: " + planEliminado);

function sacarPrecio(tipoPlan, cantMeses) {
    let costo = 0;
    
    if(tipoPlan === "basico" || tipoPlan === "básico") {
        costo = 1200;
    } else if(tipoPlan === "intermedio") {
        costo = 2400;
    } else if(tipoPlan === "premium" || tipoPlan === "vip") {
        costo = 4000;
    } else {
        costo = 2000;
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

function listarPlanes(lista) {
    console.log("--- Lista de planes disponibles ---");
    for (const unPlan of lista) {
        console.log("Plan: " + unPlan);
    }
    console.log("Total de planes: " + lista.length);
}

alert("Bienvenido al sistema de gestion y cotizacion de planes.");

let planBuscado = prompt("¿Qué plan querés buscar en el catálogo?").toLowerCase();

if (planesDisponibles.includes(planBuscado)) {
    let posicion = planesDisponibles.indexOf(planBuscado);
    alert("¡Encontrado! El plan '" + planBuscado + "' esta en stock, en la posicion " + posicion + ".");
    console.log("Busqueda exitosa: " + planBuscado + " (Indice: " + posicion + ")");
} else {
    alert("El plan '" + planBuscado + "' no figura en el catalogo actual.");
    console.log("Busqueda fallida: " + planBuscado);
}

planesDisponibles.splice(2, 1, "premium gold");
console.log("Se actualizo el elemento del indice 2 usando splice.");

listarPlanes(planesDisponibles);

let activo = true;

while(activo) {
    let plan = prompt("¿Qué plan querés cotizar? (Escribi uno de la lista o 'fin' para salir)").toLowerCase();

    if(plan === "fin") {
        alert("Saliendo del simulador. ¡Hasta luego!");
        activo = false;
    } else if(planesDisponibles.includes(plan)) {
        
        let meses = parseInt(prompt("¿Cuántos meses lo vas a contratar?"));

        if(isNaN(meses) || meses <= 0) {
            alert("Error: tenes que poner un número válido de meses.");
        } else {
            let subtotal = sacarPrecio(plan, meses);
            let descuento = verDescuento(subtotal, meses);
            let total = calcularFinal(subtotal, descuento);

            alert("Resumen de cotizacion:\n" +
                  "Plan: " + plan + "\n" +
                  "Meses: " + meses + "\n" +
                  "Subtotal: $" + subtotal + "\n" +
                  "Descuento: $" + descuento + "\n" +
                  "Total a pagar: $" + total);

            console.log("Cotizacion realizada para el plan: " + plan);
        }

    } else {
        alert("Ese plan no está disponible en el sistema. Probá de nuevo.");
    }
}
