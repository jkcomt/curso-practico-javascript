function calcularPrecioConDescuento(precioOriginal, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
};

function onClickPrecioConDescuento(){
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const valuePrice = inputPrice.value;
    const valueDiscount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(valuePrice,valueDiscount);
    const result = document.getElementById("resultPrice");
    result.innerText = `El precio con descuento es ${precioConDescuento}$`;
}