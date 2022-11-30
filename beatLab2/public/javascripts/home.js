//carrossel 1
let count = 1;
document.getElementById("radio1").checked = true;
document.getElementById("carrosselScroll1").checked = true;

setInterval(function(){
    nextImage();
}, 5000);
//função carossel 
function nextImage(){
    count++;
    if(count>4){
        count=1;
    }
    document.getElementById("radio"+count).checked = true;
}
 //menu hamburguer
const btnMobile = document.getElementById("btn-mobile")

function toggleMenu(event){
    if(event.type==="touchstart"){
        event.preventDefault()
    }
    
    const nav = document.getElementById("nav")
    nav.classList.toggle("active")
    const active=nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded',active)
    if(active){ 
        event.currentTarget.setAttribute('aria-label','Fechar Menu')
    }else{
        event.currentTarget.setAttribute('aria-label','Abrir Menu')
    }
}

btnMobile.addEventListener("click", toggleMenu)
btnMobile.addEventListener("touchstart", toggleMenu)