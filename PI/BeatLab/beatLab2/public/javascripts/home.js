





//carrossel 1
// let count = 1;
// document.getElementById("radio1").checked = true;
// document.getElementById("carrosselScroll1").checked = true;


// setInterval(function(){
//     nextImage();
// }, 5000);
// //função carossel 
// function nextImage(){
//     count++;
//     if(count>4){
//         count=1;
//     }
//     document.getElementById("radio"+count).checked = true;
// }
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

// Funcionando  
let botaoNext = document.getElementById('next')
let botaoRew = document.getElementById('rew')

 
function rew(){

   botaoRew.innerHTML="Está"
}


function next(){
  
   botaoNext.innerHTML="gato"

  
   
   botaoNext.innerHTML="OK"

 
}





//  let car = cars.find(car => car.color === "red" && car.type === "cabrio");

    let contPlayPause = false;
 function playPause(){
  
      let labelPlayPause = document.getElementById('playPauseBtn')
      //let playPause =document.getElementById('playPause')
 
      if(contPlayPause == false){
         document.getElementById('player').play()
         labelPlayPause.innerHTML="Pause";
      //playPause.src"/img/player-img/play2.png"
       }
     else{
         document.getElementById('player').pause()
         labelPlayPause.innerHTML="Play";
      }
      contPlayPause =! contPlayPause;  
 }
 
 
 function move(valor){
    var elem = document.getElementById("myBar");
    var width = valor;
    elem.style.width = width + "%";
 
 }
 
 
 setInterval(function() { 
 
    var duracaoMusica = document.getElementById('player').duration;
    var tempoAtual = document.getElementById('player').currentTime;
    var tempoTotalLabel = "00:00"; 
    var tempoDecorridoLabel = "00:00"
 
 // Converte o tempo total da musica "de segundos" para "minutos e segundos"   
 var minT = parseInt(duracaoMusica /60)
 var segT = parseInt(duracaoMusica %60)
 var minTStr = "00" 
 var segTStr = "00"
 
 if(minT <= 9){
    minTStr = "0" + minT
 }else{
    minTStr = minT
 }
 
 if(segT <= 9){
 segTStr = "0" + segT
 }else{
 segTStr = segT
 }
 
 
 
 tempoTotalLabel = minTStr + ":" + segTStr 
 if(tempoTotalLabel == "NaN:NaN"){tempoTotalLabel = "00:00"}
 
 // Converte o tempo DECORRIDO da musica "de segundos" para "minutos e segundos" 
 var minD = parseInt(tempoAtual /60)
 var segD = parseInt(tempoAtual %60)
 var minDStr = "00" 
 var segDStr = "00"
 
 if(minD <= 9){
    minDStr = "0" + minD
 }else{
    minDStr=minD;
 }
 
 if(segD <= 9){
 segDStr = "0" + segD;
 }else{
 segDStr=segD
 }
 
  tempoDecorridoLabel = minDStr + ":" + segDStr 
 
     document.getElementById('timer').innerHTML = tempoDecorridoLabel + " / " + tempoTotalLabel
  
 
 
     if(tempoAtual >= duracaoMusica){
         // chama a proxima musica
         window.location.href = "/incrementa"; 
  }
 
  // Movimenta a progressBar
 var tempoAtualBar = parseInt(document.getElementById('player').currentTime); 
 var aux =  100/duracaoMusica ;
 var porcentagem =  tempoAtualBar * aux;
 move(porcentagem);
 
 }, 1000);
 
 
 
 // controlar o volume com as teclas up e down
 document.addEventListener("keydown", function(apertar){
 if(apertar.key === "a"){
    window.alert("vc pressionou" + apertar.key)
 }
 
 if(apertar.key === "ArrowUp"){
    document.getElementById('player').volume+=0.1
 }
 if(apertar.key === "ArrowDown"){
    document.getElementById('player').volume-=0.1
 }
 
 if(apertar.key === "Enter"){
    playPause()
 }
 
 if(apertar.key === "ArrowRight"){
    window.location.href = "/incrementa";
 }
 
 if(apertar.key === "ArrowLeft"){
    window.location.href = "/decrementa";
 }
 
 
 //window.alert("vc pressionou = " + apertar.key)
 
 })
 





