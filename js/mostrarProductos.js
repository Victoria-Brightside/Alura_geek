import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(nombre, precio, imagen, id) {
    const producto = document.createElement("li")
    producto.className = "card";
    producto.innerHTML = `<img src="${imagen}" class="card_img">
                    <div class="card-container-info">
                        <p>${nombre}</p>
                        <div class="card-container-value">
                            <p>$ ${precio}</p>
                            <button class="delete-button" data-id="${id}">
                              <img src="images/delete.svg" alt="Icono de basurero" class="delete_img">
                            </button>
                        </div>
                    </div>`;

                    const eliminarBoton = producto.querySelector(".delete-button");
eliminarBoton.addEventListener("click", async()=>{
    try{
        await conexionAPI.eliminarProducto(id);
        producto.remove();
    } catch (error) {
        console.log(error);
    }
})
    return producto;
}

async function listarProductos() {
    const listaAPI = await conexionAPI.listarProductos()

    listaAPI.forEach(producto => lista.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen, producto.id)))
}

listarProductos()
