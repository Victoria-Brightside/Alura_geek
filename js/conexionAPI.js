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
    try{
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
    });
    if(conexion.ok){
        console.log("Producto eliminado exitosamente");
    } else {
        console.error("Error al eliminar producto", error);
    }
} catch (error){
    console.error("Error al eliminar producto", error);
}
}


export const conexionAPI = {
    listarProductos, crearProducto, eliminarProducto
}
