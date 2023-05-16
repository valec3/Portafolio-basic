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