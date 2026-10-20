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

function filtrarPorPresupuesto(lista, precioMax) {
    return lista.filter(plan => plan.precioBase <= precioMax && plan.disponible);
}

function obtenerCatalogoFormateado(lista) {
    return lista.map(plan => "• " + plan.nombre.toUpperCase() + " -> $" + plan.precioBase + "/mes");
}

function calcularSumaTotalCatalogo(lista) {
    return lista.reduce((acumulado, plan) => acumulado + plan.precioBase, 0);
}

alert("Bienvenido al sistema interactivo de gestion y cotizacion de planes.");

let activo = true;

while (activo) {
    let opcion = prompt(
        "Selecciona una opcion del menu:\n" +
        "1. Cotizar un plan especifico\n" +
        "2. Filtrar planes por presupuesto maximo\n" +
        "3. Ver catalogo formateado\n" +
        "4. Ver costo total del catalogo completo\n" +
        "5. Salir"
    );

    switch (opcion) {
        case "1":
            let nombreBuscado = prompt("Escribi el nombre del plan que queres cotizar (ej: basico, intermedio, premium, familiar, vip):").toLowerCase();
            
            let planEncontrado = listaDePlanes.find(p => p.nombre === nombreBuscado);

            if (planEncontrado) {
                let meses = parseInt(prompt("¿Por cuantos meses queres cotizar " + planEncontrado.nombre.toUpperCase() + "?"));
                if (isNaN(meses) || meses <= 0) {
                    alert("Por favor ingresa una cantidad de meses valida.");
                } else {
                    let resumen = planEncontrado.obtenerResumen(meses);
                    alert(resumen);
                    console.log("Cotizacion generada exitosamente:", planEncontrado);
                }
            } else {
                alert("No encontramos ningun plan llamado '" + nombreBuscado + "'.");
            }
            break;

        case "2":
            let presupuesto = parseFloat(prompt("Ingresa tu presupuesto maximo mensual ($):"));
            if (isNaN(presupuesto) || presupuesto <= 0) {
                alert("Ingresa un monto valido.");
            } else {
                let filtrados = filtrarPorPresupuesto(listaDePlanes, presupuesto);
                if (filtrados.length > 0) {
                    let mensaje = "Planes encontrados dentro de tu presupuesto ($" + presupuesto + "):\n";
                    filtrados.forEach(p => mensaje += "- " + p.nombre.toUpperCase() + " ($" + p.precioBase + ")\n");
                    alert(mensaje);
                    console.log("Planes filtrados por presupuesto:", filtrados);
                } else {
                    alert("No hay planes disponibles por $" + presupuesto + " o menos.");
                }
            }
            break;

        case "3":
            let listaFormateada = obtenerCatalogoFormateado(listaDePlanes);
            alert("Catalogo Actual de Planes:\n\n" + listaFormateada.join("\n"));
            console.log("Nombres de planes transformados:", listaFormateada);
            break;

        case "4":
            let totalCatalogo = calcularSumaTotalCatalogo(listaDePlanes);
            alert("La suma total de contratar todos los planes del catalogo por un mes es: $" + totalCatalogo);
            console.log("Suma total del catalogo calculada: $" + totalCatalogo);
            break;

        case "5":
        case "fin":
        case null:
            alert("Gracias por utilizar el simulador. ¡Hasta luego!");
            activo = false;
            break;

        default:
            alert("Opcion no valida. Por favor ingresa un numero del 1 al 5.");
            break;
    }
}
