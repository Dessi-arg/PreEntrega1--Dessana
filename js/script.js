
function precioFinal() {
    let precioProducto = 0

    while (precioProducto <= 0) {
        precioProducto = parseFloat(prompt("Ingrese el valor de la compra en $ARS"));
        if (precioProducto <= 0) {
        alert("El valor ingresado es inválido. Por favor, ingrese un valor mayor que 0.");
        }
}

    let impuesto = precioProducto * 0.75;
    let valorTotal = precioProducto + impuesto;
    alert("El valor FINAL es: $" + valorTotal + " y el total de impuestos es de ARS " + impuesto);

    let repetir = prompt("¿Desea calcular el precio final de otra compra? (S/N)");
    switch (repetir) {
        case "S":
        precioFinal();
        break;
        case "N":
        alert("Gracias, Vuelva Pronto!");
        break;
        default:
        alert("Opción inválida. Por favor, seleccione S o N , en mayúsculas.");
        precioFinal();
        break;
    }
}

precioFinal();
