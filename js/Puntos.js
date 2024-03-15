function Cargar_puntos(corazones_restantes){
    let div_puntos = document.querySelector(".puntos");
    div_puntos.innerHTML = ""
    div_puntos.innerHTML = `🪙 +${corazones_restantes}`;
}

export { Cargar_puntos }