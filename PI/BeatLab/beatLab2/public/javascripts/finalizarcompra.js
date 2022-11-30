//TELA UM CLICK FORMA DE PAGAMENTO
var button = document.getElementById("action-bt3");

button.addEventListener("click", function(){
    var dados = document.getElementById("dados");

    dados.classList.toggle("hide");
});
//JANELA MODAL
// function finalizar(){
//     const modal = document.getElementById('janela-modal')
//     modal.classList.add('abrir')

//     modal.addEventListener('click', (e) => {
//         if(e.target.id == 'home-bt' || e.target.id == 'janela-modal'){
//             modal.classList.remove('abrir')
//         }         
//     })
// };

//JANELA MODAL PARA VOLTAR AO HOME APOS FINALIZAR A COMPRA
function finalizar(){
    const modal = document.getElementById('janela-modal')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'home-bt'){
            modal.classList.remove('abrir')
        }         
    })
};


//FUNCTION PARA A DIV DE FORMA DE PAGAMNTO FICAR NONE
function Mudarestado(el) {
  var display = document.getElementById(el).style.display;
  if (display == "none")
    document.getElementById(el).style.display = 'block';
  else
    document.getElementById(el).style.display = 'none';
    
}