// TODAS LAS CARTAS
import { lista_cartas_nivel } from "./Data_cartas.js";

// CONSTRUCCIÓN DEL NUVEL
function construir_nivel(nivel){

    function ordenarAleatorio(a, b) {
        return Math.random() - 0.5;
    }

    let todas_las_tarjetas = lista_cartas_nivel[nivel].concat(lista_cartas_nivel[nivel]);

    // Organiza de forma aleatoria la lista todas_las_cartas
    todas_las_tarjetas.sort(ordenarAleatorio);

    let lista_random = todas_las_tarjetas;
    return lista_random;
}

// ASIGNACIÓN DE NIVEL
let nivel = construir_nivel(0);

// REPARTIR CARTASCON EL NIVEL INDICADO
function repartir_cartas(nivel){

    let tablero = document.querySelector(".tablero");
    nivel.forEach((cada_carta)=> {
        let carta = document.createElement("div");
        carta.classList.add("carta_trasera")
        carta.innerHTML = `<div class="carta_frontal">${cada_carta}</div>`;
        tablero.appendChild(carta);
    })

}
repartir_cartas(nivel);
