function calcularIVA() {
    const precioInput = document.getElementById("precio");
    const precio = parseFloat(precioInput.value);
    const resultadoElement = document.getElementById("resultado");

    if (!isNaN(precio)) {
        const iva = precio * 0.16;
        const precioConIva = precio + iva;

        resultadoElement.innerHTML = `Monto del IVA: <b>${iva.toFixed(2)}</b><br>Precio con IVA: <b>${precioConIva.toFixed(2)}</b>`;
    } else {
        resultadoElement.innerHTML = "Ingresa un número válido";
    }
}
