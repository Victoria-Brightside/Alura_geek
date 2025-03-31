import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento){
    
    evento.preventDefault();

    const nombre= document.querySelector("[data-nombre]").value;
    const precio= document.querySelector("[data-precio]").value;
    const imagen= document.querySelector("[data-imagen]").value;   

await conexionAPI.crearProducto(nombre,precio,imagen);
alert("Producto agregado exitosamente!");

}

formulario.addEventListener("submit", evento => crearProducto(evento));
formulario.addEventListener("submit", evento => crearProducto(evento));