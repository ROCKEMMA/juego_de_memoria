// TODAS LAS CARTAS
import { lista_random } from "./Data_cartas.js";
let todas_las_tarjetas = lista_random;


function repartir_cartas(){

    let tablero = document.querySelector(".tablero");
    todas_las_tarjetas.forEach((cada_carta)=> {
        let carta = document.createElement("div");
        carta.classList.add("carta_trasera")
        carta.innerHTML = `<div class="carta_frontal">${cada_carta}</div>`;
        tablero.appendChild(carta);
    })

}
repartir_cartas();

