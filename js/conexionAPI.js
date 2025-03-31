async function listarProductos() {
    const conexion = await fetch("https://67e440e42ae442db76d3b2bc.mockapi.io/alurageek/Products_Alura");

    const conexionConvertida = await conexion.json();

    return conexionConvertida;

}

async function crearProducto(nombre, precio, imagen) {
    const conexion = await fetch("https://67e440e42ae442db76d3b2bc.mockapi.io/alurageek/Products_Alura", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    })
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function eliminarProducto(id){
    const conexion = await fetch(`https://67e440e42ae442db76d3b2bc.mockapi.io/alurageek/Products_Alura/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json", },
    })
.then((conexion)=>conexion.json())
.catch((err=> console.log(err)))
}

export const conexionAPI = {
    listarProductos, crearProducto, eliminarProducto
}
