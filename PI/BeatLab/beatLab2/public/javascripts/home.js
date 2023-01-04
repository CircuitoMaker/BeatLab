 
 // Direciona para o site mobile caso seja acessado por um celular
 //var url_mobile = "/mobile";
 //(function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))window.location=b})(navigator.userAgent||navigator.vendor||window.opera,url_mobile);
 
 
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


// COMANDOS DOS PLAYER
let botaoNext = document.getElementById('next')
let botaoRew = document.getElementById('rew')

 let artistaLabel  = document.getElementById('artistaLabel')
 let musicaLabel   = document.getElementById('musicaLabel')
 let playListLabel = document.getElementById('playListLabel')
 let capaAlbum     = document.getElementById('capaAlbum')
 
let carrinho = document.getElementById('carinhoLabel')


// carrega os dados na tela ao iniciar ************
window.onload = () => {
   const response =  fetch('/api/i')
      .then((response) => response.json())
      .then((data) => {
        artistaLabel.innerHTML = 'Artista: '   + data[0].artista;
        musicaLabel.innerHTML = 'Música: '     + data[0].musica;
        playListLabel.innerHTML = 'PlayList: ' + data[0].genero;
        capaAlbum.src = data[0].imagem
         
     })
     document.getElementById("player").src = '/audio'


const atualizaCarrinho = fetch('/carrinhoApi/a')
.then((atualizaCarrinho)=> atualizaCarrinho.json())
.then((dados) => {
   
   if(dados.length <= 0){
 carrinho.style.display = "none";
   }else{
      carrinho.innerHTML = dados.length
   }
})


}
//************************************************* */

botaoNext.addEventListener('click', async _ => {
     
     const response = await fetch('/api/1')//, {
    .then((response) => response.json())
    .then((data) => {
      artistaLabel.innerHTML = 'Artista: '   + data[0].artista;
      musicaLabel.innerHTML = 'Música: '     + data[0].musica;
      playListLabel.innerHTML = 'PlayList: ' + data[0].genero;
      capaAlbum.src = data[0].imagem

      //atualiza as ouvidas recentes
      for(var x=0; x<5; x++){
         let label = document.getElementById('labelMusica' + x).innerHTML=data[1][x].musica
         let albuns = document.getElementById('capaAlbum' + x).src= data[1][x].imagem
      }
         
   })
   document.getElementById("player").src = '/audio'
  
 });



 botaoRew.addEventListener('click', async _ => {
  
     const response = await fetch('/api/0')//, {
      .then((response) => response.json())
      .then((data) => {
        artistaLabel.innerHTML = 'Artista: '   + data[0].artista;
        musicaLabel.innerHTML = 'Música: '     + data[0].musica;
        playListLabel.innerHTML = 'PlayList: ' + data[0].genero;
        capaAlbum.src = data[0].imagem

       //atualiza as ouvidas recentes
       for(var x=0; x<5; x++){
         let label = document.getElementById('labelMusica' + x).innerHTML=data[1][x].musica
         let albuns = document.getElementById('capaAlbum' + x).src= data[1][x].imagem
      }

     });

     document.getElementById("player").src = '/audio'
 });
 


 // INCLUI AS TOP 5 COVERS DA SEMANA NO CARRINHO 
 for(let x=0; x<5; x++){
   document.getElementById("imgTop5-" + x).addEventListener("click", function() {
      console.log('teste' + x)
      var product = document.getElementById('imgTop5-' + x).getAttribute('alt');
      carrinhoImg(product)
   },);
 }


function carrinhoImg(add){
   
   const atualizaCarrinho = fetch('/carrinhoApi/A'+ add)
.then((atualizaCarrinho)=> atualizaCarrinho.json())
.then((dados) => {
   
   if(dados.length <= 0){
 carrinho.style.display = "none";
   }else{
      carrinho.style.display = "flex";
      carrinho.style.justifyContent = "center";
      carrinho.innerHTML = dados.length
   }
})

}
/// FIM DA FUNCAO



function rew(){
  // document.getElementById("player").src = '/audio'
}

function next(){ 
 //  document.getElementById("player").src = '/audio'
}


//  let car = cars.find(car => car.color === "red" && car.type === "cabrio");

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
 
    minTStr = minT
 
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
 
    minDStr=minD;
 
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
           playListLabel.innerHTML = 'PlayList: ' + data[0].genero;
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
    //window.location.href = "/incrementa";
    const response =  fetch('/api/1')
    .then((response) => response.json())
    .then((data) => {
      artistaLabel.innerHTML = 'Artista: '   + data[0].artista;
      musicaLabel.innerHTML = 'Música: '     + data[0].musica;
      playListLabel.innerHTML = 'PlayList: ' + data[0].genero;
      capaAlbum.src = data[0].imagem
   })
   document.getElementById("player").src = '/audio'
 }
 
 if(apertar.key === "ArrowLeft"){
    //window.location.href = "/decrementa";
    const response =  fetch('/api/0')
    .then((response) => response.json())
    .then((data) => {
      artistaLabel.innerHTML = 'Artista: '   + data[0].artista;
      musicaLabel.innerHTML = 'Música: '     + data[0].musica;
      playListLabel.innerHTML = 'PlayList: ' + data[0].genero;
      capaAlbum.src = data[0].imagem
   })
   document.getElementById("player").src = '/audio'
 }
 
 
 //window.alert("vc pressionou = " + apertar.key)
 
 })
 


//********************************* */

