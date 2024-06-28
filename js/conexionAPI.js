async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");

    const conexionConvertida = await conexion.json();

    return conexionConvertida;

}

async function crearProducto(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
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
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json", },
    })
.then((conexion)=>conexion.json())
.catch((err=> console.log(err)))
}

export const conexionAPI = {
    listarProductos, crearProducto, eliminarProducto
}
