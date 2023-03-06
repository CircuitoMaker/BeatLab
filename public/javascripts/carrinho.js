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
  
  // exemplo de cupom de de desconto 
  // 10%OFF
  // 30%OFF
  // 78%OFF

  var desconto = document.getElementById('cupom')
  var valida = desconto.value.substr(-4)
  var descontoAplicado = Number(desconto.value.substr(0,2)) 
  var cupomValido = false
  var valorDescontado = 0;

  // verifica se o campo de desconto está preenchido e se é válido
  if(desconto.value != 0){
  if(valida == "%OFF"){
   desconto.value = "Cupom Válido";
   cupomValido = true;
  }else{
    desconto.value = "Cupom Inválido"
  }
}
 
  

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

// Aplica a prcentagem de desconto 
if(cupomValido == true){
var aux1 = soma
var aux2 =  descontoAplicado * aux1
valorDescontado = aux2 / 100
soma = aux1 - (aux2 / 100)
}

valor = soma.toFixed(2).replace('.',',')

valorTotal.innerHTML='Total: R$' + valor

document.getElementById('exibeDesconto').innerHTML="Desconto de: R$" + valorDescontado.toFixed(2).replace('.',',')

}else{
    valorTotal.innerHTML = 'Total: R$0,00'
    
}


}