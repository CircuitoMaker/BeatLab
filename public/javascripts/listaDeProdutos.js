const filtrarBtn = document.getElementById('filtrarBtn')
const removeFiltroBtn = document.getElementById('removeFiltroBtn')
const lista = document.getElementById('lista')
const semDados = document.getElementById('semDados')

var run = [];
var timer = [];

// Verifica se o botão PLAY de algum card foi pressionado!
let qtd = document.getElementById('play0').getAttribute('qtd');
for(let x=0; x < qtd; x++){
   document.getElementById("play" + x).addEventListener("click", function() {
     var toca = document.getElementById('play' + x).getAttribute('idi');
    // console.log("TOCA = " + toca)
      play(toca)
   },);
 }

 // SE for, executa ou pausa a musica escolhida por 15 segundos
 for(let x=0; x < qtd; x++){
timer[x]=15;
run[x] = false;
//console.log("run[x] = " + x + " valor logico = " + run[x]) ;
}

 
// função que verifica se algum playar ja esta tocando e encerra a musica para o proximo player
function play(toca){

for(let x=0; x < qtd; x++){

if(x != toca){
 if(run[x] == true){
   run[x] = false;
   timer[x] = 15;
   parar();
   document.querySelector('.pla' + x).pause();
   document.querySelector('.pla' + x).currentTime = 0;
   document.getElementById('play' + x).innerHTML="Play";
}}}

   run[toca] = !run[toca];
 

if(run[toca] == true){
  
   document.querySelector('.pla' + toca).play();

  // console.log("ENVIA = " + envia);
   document.getElementById('play' + toca).addEventListener("click", contar(toca));

}else{
   document.querySelector('.pla' + toca).pause()
   parar();
   var conta = document.getElementById('play' + toca).innerHTML="Play";
  
   //console.log("Toca timer = " + timer[toca]);
   //contar(toca);
}
}// fim do FOR


let timerId;

function contar(toca){
   //console.log('toca = ' + toca)
   timerId = setInterval(() => {
   timer[toca]--;
   //console.log("Timer " + timer[toca])

if(timer[toca] <= 0){
   console.log("Tempo acabou!!")
   document.querySelector('.pla' + toca).pause()
   document.getElementById('play' + toca).innerHTML = "Play";
   document.querySelector('.pla' + toca).currentTime = 0;
   run[toca] = false;
   timer[toca] = 15;
   parar();
}else{
    document.getElementById('play' + toca).innerHTML = timer[toca];
}
  }, 1000);
}

function parar() {
  clearInterval(timerId);
}




// FILTRA a busca de produtos pelo gênero
function filtrar(){   
    window.location='/listadeprodutos/' +  lista.value 
}

function removeFiltro(){
   window.location='/listadeprodutos'
}



 // INCLUI A MÚSICA CLICADA NO CARRINHO 
 let quantidade = document.getElementById('quantidade').getAttribute('tagDeQuantidade')
 for(let x=0; x<quantidade; x++){
    document.getElementById("ID" + x).addEventListener("click", function() {
       var product = document.getElementById('ID' + x).getAttribute('novaTag');
       carrinhoImg(product)
    },);
  }


  
function carrinhoImg(add){
   
 const atualizaCarrinho = fetch('/carrinhoApi/A'+ add)
 .then((atualizaCarrinho)=> atualizaCarrinho.json())
 .then((dados) => {
    
 })
 }
 /// FIM DA FUNCAO


 // *****  modal *****
const buttons = document.querySelectorAll('.Comprar');
const container = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');

const activeModalClass = 'modal-show';
 
const openModal  = () => container.classList.add(activeModalClass);
const closeModal = () => container.classList.remove(activeModalClass);
 
 buttons.forEach(button => {
    button.addEventListener('click', openModal);
    container.addEventListener('click', (event) => {
        if (modal.contains(event.target)) return;
        
        closeModal();
    });
    // fim do modal
 });


