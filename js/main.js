const menu = document.querySelector("#menu");
const header = document.querySelector("header");

menu.addEventListener("click",function(e){
    menu.classList.toggle("fa-times");
    header.classList.toggle("toggle");
})

window.addEventListener("scroll",function(){
    menu.classList.remove("fa-times");
    header.classList.remove("toggle");
})

document.addEventListener("DOMContentLoaded", function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector(".portfolio .box-container");
    for(let i=1; i<=12;i++){
        const imagen=document.createElement("IMG");
        imagen.src=`../img/${i}.png`;
        imagen.dataset.imagenId=i;


        // Crear nodo lista y agregar img
        const lista = document.createElement("LI");
        lista.classList.add("box")
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}
