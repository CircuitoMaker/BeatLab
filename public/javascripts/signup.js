const infCadastro = document.querySelector('#formUp');

infCadastro.onsubmit = evento => {
    var campoNome = false
    var campoLastName = false
    var campoEmail = false
    var campoSenha = false 

    //receber o valor do campo 
    var nome = document.querySelector('#name');
    var lastName = document.querySelector('#lastName');
    var email = document.querySelector('#email');
    var repetEmail = document.querySelector('#repetEmail');
    var password = document.querySelector('#password');
    var repetPassword = document.querySelector('#repetPassword');

 // Valida os campos de senha!
 if(password.value !== repetPassword.value || !password.value || !repetPassword || password.value.length < 6 || password.value.length > 10) {
   
   if( password.value.length < 6 || password.value.length > 10){
    document.getElementById('msgAlerta').innerHTML = '<p>Sua senha precisa ter de 6 a 10 caracteres!</p>'
   }else{
    document.getElementById('msgAlerta').innerHTML = '<p>Você precisa repetir sua senha!</p>'
   } 
   
    campoSenha = false   
} else{
    campoSenha = true
}



// Valida os campos de emails
    if(!email.value) {
        document.getElementById('msgAlerta').innerHTML = '<p>Campo Email é obrigatorio!</p>'
        campoEmail = false
    }
        

    if(email.value !== repetEmail.value || !email.value || !repetEmail.value){
        document.getElementById('msgAlerta').innerHTML = '<p>Os campos de email percisam ser iguais!</p>'
        campoEmail = false
    }else{
        campoEmail = true
    }



// Valida os campos de Nome e Sobrenome
  if(!lastName.value) {
    document.getElementById('msgAlerta').innerHTML = '<p> Campo Sobrenome é obrigatório!</p>'
    campoLastName = false
}else{
   campoLastName = true
}

    if(!nome.value) {
        document.getElementById('msgAlerta').innerHTML = '<p> Campo Nome é obrigatório!</p>'
        campoNome = false
    }else{
        campoNome = true
    }


// verifica se todos os campos estão devidamente preenchidos  

if(campoNome == true && campoLastName == true && campoEmail == true && campoSenha == true ){
     console.log('enviado**')
     windown.alert('enviado**')
     evento.preventDefault();
//     window.location.href = "/home";

  
}else{
    evento.preventDefault();
}

};


//JANELA MODAL PARA VOLTAR AO HOME APOS FINALIZAR O CADASTRO
function finalizar(cadastroOk){
    
    if(cadastroOk == true){
      const modal = document.getElementById('janela-modal')     
      modal.classList.add('abrir') 
      modal.addEventListener('click', (e) => {
        if(e.target.id == 'home-bt' ){
         modal.classList.remove('abrir')     
     }          
  }) 
 
};

}




// function enviar(){
//     return envia=true
// }


// setInterval(function(){
// if(contador > 0){
//     decrementaContador()
// }
// },
// 1000);


// function decrementaContador(){
//     var contadorLabel = document.getElementById('contador')
//     contador --
//     contadorLabel.innerHTML = 'Você será redirecionado em ' + contador
//     console.log(contador)

// }
//branch//