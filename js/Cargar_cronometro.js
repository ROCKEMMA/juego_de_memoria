let div_cronometro = document.querySelector(".cronometro");
import { repartir_cartas } from "./repartir_cartas.js";
import { nivel } from "./repartir_cartas.js";
import { Descubrir_carta } from "./descubrir_carta.js";
import { Cargar_ventana_modal } from "./Ventana_modal.js";

let tiempo;
function iniciar_cronometro(minutos, segundos) {

    // IMPRESIÓN NICIAL DEL CRONÓMETRO
    if (segundos < 10) {
        div_cronometro.innerHTML = `0${minutos}:0${segundos}`;
    }
    else {
        div_cronometro.innerHTML = `0${minutos}:${segundos}`;
    }

    // ACTUALIZAR CRONÓMETRO
    function actualizar() {

        if (segundos == 0 & minutos == 0) {
            clearInterval(tiempo);
        }
        
        segundos > 0 ? segundos-- : null;

        // Restar un minuto, segundos = 60
        if (segundos <= 0) {
            if (minutos >= 1) {
                segundos = 59
                minutos--;
            }
            if(segundos == 0 & minutos == 0){
/*                 repartir_cartas(nivel);
                Descubrir_carta(); */
                Cargar_ventana_modal();
            }
        }

        div_cronometro.innerHTML = "";

        if (segundos < 10) {
            div_cronometro.innerHTML = `0${minutos}:0${segundos}`;
        }
        else {
            div_cronometro.innerHTML = `0${minutos}:${segundos}`;
        }
    }
    tiempo = setInterval(actualizar, 1000);
}

export { iniciar_cronometro }