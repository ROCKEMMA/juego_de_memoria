let div_cronometro = document.querySelector(".cronometro");

let tiempo;
function iniciar_cronometro(minutos, segundos) {
    div_cronometro.innerHTML = `0${minutos}:${segundos}`;

    function actualizar() {
        if (segundos == 1 & minutos == 0) {
            clearInterval(tiempo);
        }
        segundos--;

        // Restar un minuto, segundos = 60
        if (segundos == 0) {
            if (minutos >= 1) {
                segundos = 60
                minutos--;
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