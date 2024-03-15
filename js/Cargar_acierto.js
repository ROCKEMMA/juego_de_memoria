let lista_aciertos = [];

let section_aciertos = document.querySelector(".section_aciertos");

section_aciertos.innerHTML= `
    <h3 class="titulo_aciertos">🏆 Aciertos</h3>
    <hr/>
    <ol class="lista"></ol>
`;

function Cargar_acierto(carta){
    lista_aciertos.push(carta);    let lista = document.querySelector(".lista"); 
    lista.innerHTML="";

    lista_aciertos.forEach((cada_acierto)=>{
        let div = document.createElement("div");
        div.innerHTML = `<li>${cada_acierto}</li>`;
        lista.appendChild(div);
    });
}

export { Cargar_acierto }