let quantidade1=document.getElementById('quantidade')

if(quantidade1 != null){
var quantidade = quantidade1.getAttribute('quantidade')
}

window.addEventListener("load", (event) => {
    
    calculaTotal()
  });

  


  if(quantidade1 != null){
  for(let x=0; x<quantidade; x++){
    document.getElementById("ID" + x).addEventListener("click", function() {
       console.log('BOTAO' + x)
       var product = document.getElementById('ID' + x).getAttribute('tagID');
     // console.log(product)
       carrinhoImg(product)
       location.reload();

    },);
  }
  }


function carrinhoImg(remove){
   
    const atualizaCarrinho = fetch('/carrinhoApi/R'+ remove)
 .then((atualizaCarrinho)=> atualizaCarrinho.json())
 .then((dados) => {
    
    if(dados.length <= 0){
  //carrinho.style.display = "none";
    }else{
 //      carrinho.style.display = "flex";
//       carrinho.style.justifyContent = "center";
//       carrinho.innerHTML = dados.length
    }
 })
 
 }







 // CALCULA VALORES DO CARRINHO  
function calculaTotal(){
  
    var valorTotal = document.getElementById('valorTotal')
   
    if(quantidade1 != null){
var soma = 0;

console.log(quantidade)

for(var x=0; x< quantidade; x++){
let precos = document.getElementById('preco' + x).getAttribute('valor')
let converte = parseFloat(precos.replace(',','.'))
soma += converte
console.log(converte)
}

valor = soma.toFixed(2).replace('.',',')

valorTotal.innerHTML='Total: R$' + valor

}else{
    valorTotal.innerHTML = 'Total: R$0,00'
}


}