/* eligeir un producto de una lista mas que se sume cada producto que se va eligiendo y que al final se de la suma de todo con IVA*/


const IVA = 0.21;
let totalCompra = 0;
let salida = false;
let carrito = "";

do {
    let producto = parseInt(prompt("Elige un producto de la lista de opciones:\n 1- Naranjas\n 2- Bananas\n 3- Manzanas\n 0- Terminar compra"));

    if (producto === 1) {
    alert("Producto agregado");
    totalCompra = totalCompra + 50;
    } else if (producto === 2) {
    alert("Producto agregado");
    totalCompra = totalCompra + 1000;
    } else if (producto === 3) {
    alert("Producto agregado");
    totalCompra = totalCompra + 80;
    } else if (producto === 0) {
    alert("El total de su compra es $ " + (totalCompra + iva()));
    salida = true;
    } else {
    alert("Opción inválida, por favor elige nuevamente.");
}

    carrito = carrito + totalCompra;


} while ( salida !== true);


function iva (){
    let compraiva= IVA * totalCompra
    return compraiva
}