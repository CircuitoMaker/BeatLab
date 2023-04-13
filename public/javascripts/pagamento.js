
var contador = 0;
var segundos = 5;
var usuarioLogado = document.getElementById('logado').value;

function conta(){

if(contador == 10 || contador == 20 || contador == 30 || contador == 40 || contador == 50 || contador == 60){
segundos--
}

var c = document.getElementById("UgCanvas");
var ctx = c.getContext("2d");
 ctx.fillStyle="#9400d3"; //roxo
contador++;
ctx.fillRect(0,0,contador * 10, 40);

//impede contagem negativa
if(segundos < 0){segundos = 0}

if(segundos > 1){
document.getElementById('tagP').innerHTML="Por favor, aguarde " + segundos + " Segundos."
}else{
document.getElementById('tagP').innerHTML="Por favor, aguarde " + segundos + " Segundo."
}


if(segundos == 5){
    if(usuarioLogado == '1'){
        document.getElementById('aga1').innerHTML = "Recebendo Dados do Cartão..."
      }else{
        document.getElementById('aga1').innerHTML = "Obrigado por sua Visita!";
      }
}

if(segundos == 3){
    if(usuarioLogado == '1'){
      document.getElementById('aga1').innerHTML = "Processando Pagamento..."
    }else{
      document.getElementById('aga1').innerHTML = "Faça LOGIN ou CADASTRE-SE";
    }
}


if(segundos == 2){

    if(usuarioLogado == '1'){
    document.getElementById('cash').play();
    }
    ctx.fillStyle="#097bf4"; //azul
    ctx.fillRect(0,0,contador * 10, 40);
}

if(segundos <= 1){

    if(usuarioLogado == '1'){
    document.getElementById('aga1').innerHTML = "Sucesso!"
    }else{
        document.getElementById('aga1').innerHTML = "Redirecionando para o LOGIN"
    }

    ctx.fillStyle="#ffffff";//branco
    ctx.fillRect(0,0,contador * 10, 40);
}



console.log(contador)

if(contador >= 60){
    if(usuarioLogado == '1'){
        window.location.href = "/meuPlayer";
    }else{
        window.location.href = "/login";
    }
}

}// fim da rotina "conta"

setInterval(conta, 100);

