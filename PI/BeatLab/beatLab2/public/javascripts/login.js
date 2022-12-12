const infCadastro = document.querySelector('#formLg');

infCadastro.onsubmit = evento => {
    //receber o valor do campo 
   
    var email = document.querySelector('#email').value;
    
    var password = document.querySelector('#password').value;
    
    console.log(email);
    //verificar se o campo esta em branco 
    if(email === "") {
    evento.preventDefault();
    document.getElementById('msgAlerta').innerHTML = '<p>Campo Email é obrigatorio!</p>'
    return;
}
   
    
    //verificar se o campo esta em branco 
    if(password === "") {
    evento.preventDefault();
    document.getElementById('msgAlerta').innerHTML = '<p>Esqueceu sua senha?</p>'
    return;
}
 
};