class Plan {
    constructor(id, nombre, precioBase, disponible) {
        this.id = id;
        this.nombre = nombre;
        this.precioBase = precioBase;
        this.disponible = disponible;
    }

    calcularPrecioFinal(meses) {
        let subtotal = this.precioBase * meses;
        let descuento = meses >= 6 ? subtotal * 0.15 : 0;
        return subtotal - descuento;
    }
}

const listaDePlanes = [
    new Plan(1, "básico", 1200, true),
    new Plan(2, "intermedio", 2400, true),
    new Plan(3, "premium", 4000, true),
    new Plan(4, "familiar", 3500, false),
    new Plan(5, "corporativo", 6000, true)
];

let activo = true;
alert("Bienvenido al simulador de suscripciones con Funciones de Orden Superior.");

while (activo) {
    let opcion = prompt(
        "Seleccioná una opción:\n" +
        "1. Buscar un plan (find)\n" +
        "2. Filtrar planes disponibles (filter)\n" +
        "3. Calcular valor total del catálogo (reduce)\n" +
        "4. Ver catálogo transformado (map)\n" +
        "5. Salir"
    );

    switch (opcion) {
        case "1":
            let nombreBuscado = prompt("Escribí el nombre del plan a buscar (básico, intermedio, premium, familiar, corporativo):").toLowerCase();
            let planEncontrado = listaDePlanes.find(plan => plan.nombre === nombreBuscado);
            if (planEncontrado) {
                alert("Plan encontrado: " + planEncontrado.nombre.toUpperCase() + " - Precio base: $" + planEncontrado.precioBase);
                console.log("Plan encontrado:", planEncontrado);
            } else {
                alert("No se encontró ningún plan con ese nombre.");
            }
            break;

        case "2":
            let planesDisponibles = listaDePlanes.filter(plan => plan.disponible === true);
            let nombresDisponibles = planesDisponibles.map(plan => plan.nombre).join(", ");
            alert("Planes actualmente disponibles:\n" + nombresDisponibles);
            console.log("Planes filtrados (disponibles):", planesDisponibles);
            break;

        case "3":
            let totalCatalogo = listaDePlanes.reduce((acc, plan) => acc + plan.precioBase, 0);
            alert("El valor acumulado de los precios base es: $" + totalCatalogo);
            console.log("Total catálogo (reduce): $" + totalCatalogo);
            break;

        case "4":
            let resumenMayus = listaDePlanes.map(plan => plan.nombre.toUpperCase() + " ($" + plan.precioBase + ")");
            alert("Catálogo transformado:\n" + resumenMayus.join("\n"));
            console.log("Catálogo transformado (map):", resumenMayus);
            break;

        case "5":
        case null:
            alert("¡Hasta luego!");
            activo = false;
            break;

        default:
            alert("Opción no válida.");
            break;
    }
}
