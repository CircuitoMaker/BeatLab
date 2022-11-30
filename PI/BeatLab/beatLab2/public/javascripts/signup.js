const infCadastro = document.querySelector('#formUp');

infCadastro.onsubmit = evento => {
    //receber o valor do campo 
    var nome = document.querySelector('#name');
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var repetPassword = document.querySelector('#repetPassword').value;
    //verificar se o campo esta em branco 
   if(!nome.value) {
   evento.preventDefault();
    document.getElementById('msgAlerta').innerHTML = '<p> Hum...Algo deu errado.</p><p> Campo Nome é obrigatorio!</p>'
   
    return;
}
    //receber o valor do campo 
    
    //verificar se o campo esta em branco 
    if(email === "") {
    evento.preventDefault();
    document.getElementById('msgAlerta').innerHTML = '<p> Hum...Algo deu errado.</p><p>Campo Email é obrigatorio!</p>'
    return;
}
    //receber o valor do campo 
    
    if(repetEmail === '') {
    evento.preventDefault();
    document.getElementById('msgAlerta').innerHTML = '<p> Hum...Algo deu errado.</p><p>Você precisa confirmar seu email!</p>'
    return;
}
    //receber o valor do campo 
    
    //verificar se o campo esta em branco 
    if(password === '') {
    evento.preventDefault();
    document.getElementById('msgAlerta').innerHTML = '<p> Hum...Algo deu errado.</p><p>Você Não pode esquecer da sua senha!</p>'
    return;
}
 //receber o valor do campo 
 
 //verificar se o campo esta em branco 
 if(repetPassword === '') {
 evento.preventDefault();
 document.getElementById('msgAlerta').innerHTML = '<p> Hum...Algo deu errado?</p><p>Você precisa repetir sua senha!</p>'
 return;

} 
};


//JANELA MODAL PARA VOLTAR AO HOME APOS FINALIZAR O CADASTRO
// function finalizar(){
    
//     const modal = document.getElementById('janela-modal')
       
//     modal.classList.add('abrir') 

//     modal.addEventListener('click', (e) => {
//         if(e.target.id == 'home-bt' ){
//             modal.classList.remove('abrir')
//         }         
//     }) 
//};
