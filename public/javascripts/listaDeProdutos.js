

 // INCLUI A MÚSICA CLICADA NO CARRINHO 
 let quantidade = document.getElementById('quantidade').getAttribute('tagDeQuantidade')
 for(let x=0; x<quantidade; x++){
    document.getElementById("ID" + x).addEventListener("click", function() {
      // console.log('teste' + x)
       var product = document.getElementById('ID' + x).getAttribute('novaTag');
    //  console.log(product)
       carrinhoImg(product)
    },);
  }


  
function carrinhoImg(add){
   
    const atualizaCarrinho = fetch('/carrinhoApi/A'+ add)
 .then((atualizaCarrinho)=> atualizaCarrinho.json())
 .then((dados) => {
    
    if(dados.length <= 0){
 // carrinho.style.display = "none";
    }else{
 //      carrinho.style.display = "flex";
//       carrinho.style.justifyContent = "center";
//       carrinho.innerHTML = dados.length
    }
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
