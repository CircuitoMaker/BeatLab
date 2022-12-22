

// COMANDOS DOS PLAYER
let botaoNext = document.getElementById('next')
let botaoRew = document.getElementById('rew')


let musicaLabel   = document.getElementById('musicaLabel')
let artistaLabel  = document.getElementById('artistaLabel')

 //let playListLabel = document.getElementById('playListLabel')
 let capaAlbum     = document.getElementById('capaAlbum')


// carrega os dados na tela ao iniciar ************
window.onload = () => {
    const response =  fetch('/api/i')//, {  
       .then((response) => response.json())
       .then((data) => {
         artistaLabel.innerHTML =  data[0].artista;
         musicaLabel.innerHTML =  data[0].musica;
        // playListLabel.innerHTML = 'PlayList: ' + data[0].genero;
         capaAlbum.src = data[0].imagem
      })
      document.getElementById("player").src = '/audio'
 
 }
 //************************************************* */


 botaoNext.addEventListener('click', async _ => {
     
    const response = await fetch('/api/1')//, {
   .then((response) => response.json())
   .then((data) => {
     artistaLabel.innerHTML = 'Artista: '   + data[0].artista;
     musicaLabel.innerHTML = 'Música: '     + data[0].musica;
     //playListLabel.innerHTML = 'PlayList: ' + data[0].genero;
     capaAlbum.src =  data[0].imagem
  })
  document.getElementById("player").src = '/audio'
 
});


botaoRew.addEventListener('click', async _ => {
 
    const response = await fetch('/api/0')//, {
     .then((response) => response.json())
     .then((data) => {
       artistaLabel.innerHTML = 'Artista: '   + data[0].artista;
       musicaLabel.innerHTML = 'Música: '     + data[0].musica;
       //playListLabel.innerHTML = 'PlayList: ' + data[0].genero;
       capaAlbum.src = data[0].imagem
    });

    document.getElementById("player").src = '/audio'
});



//***************  BOTO DE PLAY / PAUSE */

let contPlayPause = false;
 function playPause(){
  
      let labelPlayPause = document.getElementById('playPauseBtn')
 
      if(contPlayPause == false){
         document.getElementById('player').play()
         document.getElementById("player").autoplay = true
         labelPlayPause.innerHTML="Pause";
      
       }
     else{
         document.getElementById('player').pause()
         document.getElementById("player").autoplay = false
         labelPlayPause.innerHTML="Play";
      }
      contPlayPause =! contPlayPause;  
 }
 
 //************************************************************* */



 function move(valor){
    var elem = document.getElementById("myBar");
    var width = valor;
    elem.style.width = width + "%";
 
 }
 
 
 setInterval(function() { 
 
    var duracaoMusica = document.getElementById('player').duration;
    var tempoAtual = document.getElementById('player').currentTime;
    var tempoTotalLabel = "0:00"; 
    var tempoDecorridoLabel = "0:00"
 
 // Converte o tempo total da musica "de segundos" para "minutos e segundos"   
 var minT = parseInt(duracaoMusica /60)
 var segT = parseInt(duracaoMusica %60)
 var minTStr = "0" 
 var segTStr = "00"
 
//  if(minT <= 9){
//     minTStr = "0" + minT
//  }else{
    minTStr = minT
 //}
 
 if(segT <= 9){
 segTStr = "0" + segT
 }else{
 segTStr = segT
 }
 
 
 
 tempoTotalLabel = minTStr + ":" + segTStr 
 if(tempoTotalLabel == "NaN:NaN"){tempoTotalLabel = "0:00"}
 
 // Converte o tempo DECORRIDO da musica "de segundos" para "minutos e segundos" 
 var minD = parseInt(tempoAtual /60)
 var segD = parseInt(tempoAtual %60)
 var minDStr = "0" 
 var segDStr = "00"
 
//  if(minD <= 9){
//     minDStr = "0" + minD
//  }else{
    minDStr=minD;
 //}
 
 if(segD <= 9){
 segDStr = "0" + segD;
 }else{
 segDStr=segD
 }
 
  tempoDecorridoLabel = minDStr + ":" + segDStr 
 
     document.getElementById('timer').innerHTML = tempoDecorridoLabel + " / " + tempoTotalLabel
  
 
 
     if(tempoAtual >= duracaoMusica){
      const response =  fetch('/api/1')
         .then((response) => response.json())
         .then((data) => {
           artistaLabel.innerHTML = 'Artista: '   + data[0].artista;
           musicaLabel.innerHTML = 'Música: '     + data[0].musica;
          // playListLabel.innerHTML = 'PlayList: ' + data[0].genero;
           capaAlbum.src = data[0].imagem
        })
        document.getElementById("player").src = '/audio'
  }
 

  // Movimenta a progressBar
 var tempoAtualBar = parseInt(document.getElementById('player').currentTime); 
 var aux =  100/duracaoMusica ;
 var porcentagem =  tempoAtualBar * aux;
 move(porcentagem);
 
 }, 1000);
 