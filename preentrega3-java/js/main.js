let planesDisponibles = ["básico", "intermedio", "premium", "familiar", "corporativo"];

function manipularExtremos(lista) {
    lista.push("vip");
    lista.unshift("prueba gratis");
    let eliminado = lista.pop();
    console.log("Se eliminó el elemento del final: " + eliminado);
}

function buscarPlanCatalogo(lista) {
    let buscado = prompt("¿Qué plan querés buscar en el catálogo?").toLowerCase();
    if (lista.includes(buscado)) {
        let pos = lista.indexOf(buscado);
        alert("¡Encontrado! El plan '" + buscado + "' está en la posición " + pos + ".");
        console.log("Búsqueda exitosa: " + buscado + " (Índice: " + pos + ")");
    } else {
        alert("El plan '" + buscado + "' no figura en el catálogo.");
        console.log("Búsqueda fallida: " + buscado);
    }
}

function actualizarPlanConSplice(lista) {
    lista.splice(2, 1, "premium gold");
    console.log("Se actualizó el elemento del índice 2 usando splice.");
    alert("Se actualizó el catálogo en el índice 2.");
}

function listarPlanesConForOf(lista) {
    console.log("--- Listado actual de planes ---");
    for (const plan of lista) {
        console.log("Plan: " + plan);
    }
    alert("Listado mostrado en la consola (F12). Total de planes: " + lista.length);
}

function calcularPrecio(tipoPlan, meses) {
    let costo = (tipoPlan === "intermedio") ? 2400 : (tipoPlan === "premium" || tipoPlan === "vip" || tipoPlan === "premium gold") ? 4000 : 1200;
    return costo * meses;
}

function obtenerDescuento(monto, meses) {
    return (meses >= 6) ? monto * 0.15 : 0;
}

function cotizarPlanSeleccionado(lista) {
    let plan = prompt("¿Qué plan querés cotizar? Escribí uno de la lista:").toLowerCase();
    if (lista.includes(plan)) {
        let meses = parseInt(prompt("¿Cuántos meses lo vas a contratar?"));
        if (isNaN(meses) || meses <= 0) {
            alert("Número de meses no válido.");
        } else {
            let subtotal = calcularPrecio(plan, meses);
            let descuento = obtenerDescuento(subtotal, meses);
            let total = subtotal - descuento;
            alert("Resumen:\nPlan: " + plan + "\nMeses: " + meses + "\nSubtotal: $" + subtotal + "\nDescuento: $" + descuento + "\nTotal: $" + total);
        }
    } else {
        alert("Ese plan no está disponible.");
    }
}

manipularExtremos(planesDisponibles);
buscarPlanCatalogo(planesDisponibles);
actualizarPlanConSplice(planesDisponibles);
listarPlanesConForOf(planesDisponibles);

let activo = true;
alert("Bienvenido al simulador interactivo.");

while (activo) {
    let opcion = prompt(
        "Seleccioná una opción:\n" +
        "1. Buscar un plan\n" +
        "2. Ver catálogo completo\n" +
        "3. Cotizar un plan\n" +
        "4. Salir"
    );

    switch (opcion) {
        case "1":
            buscarPlanCatalogo(planesDisponibles);
            break;
        case "2":
            listarPlanesConForOf(planesDisponibles);
            break;
        case "3":
            cotizarPlanSeleccionado(planesDisponibles);
            break;
        case "4":
        case null:
            alert("¡Hasta luego!");
            activo = false;
            break;
        default:
            alert("Opción no válida.");
            break;
    }
}
            break;
    }
}
