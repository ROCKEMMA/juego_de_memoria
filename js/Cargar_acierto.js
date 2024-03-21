let lista_aciertos = [];

let section_aciertos = document.querySelector(".section_aciertos");

section_aciertos.innerHTML= `
    <h3 class="titulo">🏆 Aciertos: </h3>
    <ol class="lista"></ol>
`;

function Cargar_acierto(carta){
    lista_aciertos.push(carta);    let lista = document.querySelector(".lista"); 
    lista.innerHTML="";

    lista_aciertos.forEach((cada_acierto)=>{
        let div = document.createElement("div");
        div.innerHTML = `<span>${cada_acierto}</span>`;
        lista.appendChild(div);
    });
}

export { Cargar_acierto }