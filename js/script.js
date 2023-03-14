//clase producto y sus metodos 
class Producto{
    constructor(nombre, precio, stock){
        
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    datosProd(){
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
    }

    stockProd( unidades ){
        if( this.stock >= unidades ){
            this.stock = this.stock - unidades;
            return true
        }else{
            return false;
        }
    }
}

//ARMADO DE LISTA Y ALMACENAMIENTO DE OBJETOS EN LA MISMA

let listaProductos = [];

for( let i = 0 ; i < 3 ; i = i + 1){
    let nombre = prompt('Ingrese el nombre del producto');
    let precio = prompt('Ingrese el precio del producto');
    let stock = prompt('Ingrese el stock del producto');

    let producto = new Producto(nombre, precio, stock);

    listaProductos.push(producto);
}


console.log("Lista de productos")

for (let producto of listaProductos) {
    producto.datosProd();
    
}

//FUNCION PARA REALIZAR UNA COMPRA

function comprarProducto(producto) {

    let unidades = prompt("¿Cúantas unidades desea comprar?");

    if (producto.stockProd(unidades)) {
        console.log("¡¡ Gracias por su compra !!");
        return true;
    } else {
        console.log("¡¡ No puedes comprar ese producto !! stock insuficiente ");
        console.log("Stock disponible: ", producto.stock);
        return false;
    }
}

//CICLO PARA QUE EL USUARIO SIGA COMPRANDO HASTA QUE INDIQUE "NO"
let seguirComprando = true;
while (seguirComprando) {

    let compraUser = prompt('Ingrese el producto que desea comprar o escriba "NO" para finalizar la compra');
    if (compraUser.toUpperCase() === "NO") {
        seguirComprando = false;
        console.log("¡¡ Gracias por su compra !!");
        break;
    }

    let resultadoFind = listaProductos.find((producto) => producto.nombre === compraUser);

    if (resultadoFind !== undefined) {
        console.log(resultadoFind);

        let compraExitosa = comprarProducto(resultadoFind);

        if (!compraExitosa) {
            continue; // si no se pudo realizar la compra, se vuelve a preguntar por el producto
        }

    } else {
        console.log("No existe el producto", compraUser);
    }
}













