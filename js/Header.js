let header = document.querySelector("#header");

header.innerHTML = `
    <div class="nivel">
        Nivel
        <div class="num-nivel">1</div>
    </div>
    <div class="puntos">🪙 0</div>

    <div class="vidas"></div>

    <div class="tiempo">
        <span class="material-symbols-outlined ico_time">
            timer
        </span> 
        <span class="cronometro">00:00</span>
    </div>
`;