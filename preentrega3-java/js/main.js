class Plan {
    constructor(id, nombre, precioBase, disponible) {
        this.id = id;
        this.nombre = nombre;
        this.precioBase = precioBase;
        this.disponible = disponible;
    }

    calcularPrecioFinal(meses) {
        let subtotal = this.precioBase * meses;
        let descuento = 0;

        if (meses >= 6) {
            descuento = subtotal * 0.15;
        }

        return subtotal - descuento;
    }

    obtenerResumen(meses) {
        let subtotal = this.precioBase * meses;
        let final = this.calcularPrecioFinal(meses);
        let descuento = subtotal - final;

        return "Resumen de Cotizacion:\n" +
               "Plan: " + this.nombre.toUpperCase() + "\n" +
               "Meses: " + meses + "\n" +
               "Precio base mensual: $" + this.precioBase + "\n" +
               "Subtotal: $" + subtotal + "\n" +
               "Descuento aplicado: $" + descuento + "\n" +
               "Total a pagar: $" + final;
    }
}

const planBasico = new Plan(1, "basico", 1200, true);
const planIntermedio = new Plan(2, "intermedio", 2400, true);
const planPremium = new Plan(3, "premium", 4000, true);
const planFamiliar = new Plan(4, "familiar", 2000, true);

let listaDePlanes = [planBasico, planIntermedio, planPremium, planFamiliar];

const planVip = new Plan(5, "vip", 5000, true);
listaDePlanes.push(planVip);

const planPrueba = new Plan(0, "prueba gratis", 0, false);
listaDePlanes.unshift(planPrueba);

let planEliminado = listaDePlanes.pop();
console.log("Se ha eliminado el plan del final: " + planEliminado.nombre);

function listarPlanesConsola(lista) {
    console.log("--- Catalogo de Planes Disponibles ---");
    for (const unPlan of lista) {
        console.log("ID: " + unPlan.id + " | Plan: " + unPlan.nombre + " | Precio Base: $" + unPlan.precioBase);
    }
    console.log("Total de planes en catalogo: " + lista.length);
}

alert("Bienvenido al sistema de gestion y cotizacion de planes.");

let planBuscadoNombre = prompt("¿Qué plan querés buscar en el catálogo? (Ej: basico, intermedio, premium, familiar)").toLowerCase();

let planEncontrado = listaDePlanes.find(p => p.nombre === planBuscadoNombre);

if (planEncontrado) {
    let posicion = listaDePlanes.indexOf(planEncontrado);
    alert("¡Encontrado! El plan '" + planEncontrado.nombre + "' esta disponible en la posicion " + posicion + " con un precio base de $" + planEncontrado.precioBase + ".");
    console.log("Busqueda exitosa: " + planEncontrado.nombre + " (Indice: " + posicion + ")");
} else {
    alert("El plan '" + planBuscadoNombre + "' no figura en el catalogo actual.");
    console.log("Busqueda fallida: " + planBuscadoNombre);
}

listaDePlanes.splice(2, 1, new Plan(3, "premium gold", 4500, true));
console.log("Se actualizo el elemento del indice 2 usando splice.");

listarPlanesConsola(listaDePlanes);

let activo = true;

while (activo) {
    let entrada = prompt("¿Qué plan querés cotizar? (Escribi el nombre del plan o 'fin' para salir)").toLowerCase();

    if (entrada === "fin") {
        alert("Saliendo del simulador. ¡Hasta luego!");
        activo = false;
    } else {
        let planSeleccionado = listaDePlanes.find(p => p.nombre === entrada);

        if (planSeleccionado) {
            let meses = parseInt(prompt("¿Cuántos meses lo vas a contratar?"));

            if (isNaN(meses) || meses <= 0) {
                alert("Error: tenes que poner un número válido de meses.");
            } else {
                let resumen = planSeleccionado.obtenerResumen(meses);
                alert(resumen);
                console.log("Cotizacion realizada con exito para el plan: " + planSeleccionado.nombre);
            }
        } else {
            alert("Ese plan no esta disponible en el sistema. Proba de nuevo.");
        }
    }
}
