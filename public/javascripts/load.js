
var contador = 0;
var segundos = 5;

function conta(){

if(contador == 10 || contador == 20 || contador == 30 || contador == 40 || contador == 50 || contador == 60 || contador == 70 || contador == 80 || contador == 90 || contador == 99){
segundos--
}

var c = document.getElementById("UgCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle="#ffffff";
contador++;
ctx.fillRect(0,0,contador * 10, 40);

if(segundos > 1){
document.getElementById('tagP').innerHTML="Por favor, aguarde " + segundos + " Segundos."
}else{
document.getElementById('tagP').innerHTML="Por favor, aguarde " + segundos + " Segundo."
}

if(segundos == 3){
document.getElementById('aga1').innerHTML = "Subindo Arquivos!"
}

if(segundos == 1){
    document.getElementById('aga1').innerHTML = "Pronto!"
}



console.log(contador)

if(contador >= 50){
    //window.location.href = "/servicos/search";
window.location.href = "javascript:history.go(-1)";
}}

setInterval(conta, 100);

