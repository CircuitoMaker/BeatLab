let quantidade1=document.getElementById('quantidade')

var valorFrete = 0;
var UF = '';

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


 // função que busca o CEP

function buscaCEP(){

var listaUF=['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']
var valores =[10,12,22,45,54,32,21,80,66,43,33,39,67,27,38,90,47,32,51,38,56,73,63,99,93,28,87,75]
  
//dados do CEP
  var recebeCEP = document.getElementById('recebeCEP')
  var CEPValido = false
  
  //verifica se o campo do CEP esta preenchido
  if(recebeCEP.value != 0){   
    if(recebeCEP.value.length != 8 ){
      recebeCEP.value = "CEP Inválido"
    }
  }
  
    
     var requestURL = 'https://viacep.com.br/ws/' + recebeCEP.value + '/json'
    
      var request = new XMLHttpRequest()
      request.open('GET', requestURL)
      request.responseType = 'json'
      request.send()

     
      request.onload = async() =>{
        var meu_callback = await request.response;
        var valor = 0;
        for(var x=0; x<27;x++){
         if(meu_callback.uf == listaUF[x]){
          valor=valores[x]
          UF = listaUF[x]
         }
        }

        valorFrete = valor;
        calculaTotal();
      }
      
    }
  
  //



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
 

    var valorComDesconto = document.getElementById('valorComDesconto')
    var valorTotalProdutos = document.getElementById('valorTotalProdutos')
    var frete = document.getElementById('frete').innerHTML = 'Frete: ' + UF + ' = R$' + valorFrete + ',00';
    var valorFinal = document.getElementById('valorFinal')

    if(quantidade1 != null){
var soma = 0;

console.log(quantidade)

for(var x=0; x< quantidade; x++){
let precos = document.getElementById('preco' + x).getAttribute('valor')
let converte = parseFloat(precos.replace(',','.'))
soma += converte
console.log(converte)
}

valorTotalProdutos.innerHTML='Valor Produtos: R$' + soma.toFixed(2).replace('.',',')

// Aplica a porcentagem de desconto 
if(cupomValido == true){
var aux1 = soma
var aux2 =  descontoAplicado * aux1
valorDescontado = aux2 / 100
soma = aux1 - (aux2 / 100)
}

valor = soma.toFixed(2).replace('.',',')

valorComDesconto.innerHTML='Valor produtos com desconto: R$' + valor

document.getElementById('exibeDesconto').innerHTML="Desconto de: R$" + valorDescontado.toFixed(2).replace('.',',')

}else{
    valorComDesconto.innerHTML = 'Total: R$0,00'
    
}
 
var calculo = soma + valorFrete

// if(calculo.isNaN()){
//   valorFinal.innerHTML = 'Total (Prod + Frete): R$0,00'
// }else{
  valorFinal.innerHTML = 'Total (Prod + Frete): R$' + calculo.toFixed(2).replace('.',',')
//}


}