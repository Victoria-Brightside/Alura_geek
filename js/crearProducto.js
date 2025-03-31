import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {

    evento.preventDefault();
    console.log("Formulario enviado");
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    await conexionAPI.crearProducto(nombre, precio, imagen);
    alert("Producto agregado exitosamente!");

}

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("[data-formulario]");
    formulario.addEventListener("submit", crearProducto);
});