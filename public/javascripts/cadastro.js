

function testaSenhas(){
senha1 = document.getElementById("senha1")
senha2 = document.getElementById("senha2")

if(senha1.value != senha2.value){
    event.preventDefault();
window.alert('As senhas devem ser Iguais!')

}else{

    if(senha1.value.length < 5){
        event.preventDefault();
        window.alert('A Senha deve ter no mínimo 6 caracteres!')
        
    }

}

}


document.getElementById('escolherArquivo').addEventListener('change', function(event) {
    var imagem = document.getElementById('imagem');
    imagem.src = URL.createObjectURL(event.target.files[0]);
  });


// window.addEventListener('load', function() {

//     const removeErrors = function() {
//         const errorSPan = document.querySelectorAll('main form.conteudoprincipal1 span.error');
//         errorSPan.forEach(span => span.remove());
//     };

//     const createError = function (input, mensagem) {
//         const errorSpan = document.createElement('span');
//         errorSpan.innerText = mensagem;
//         input.insertAdjacentElement('afterend', errorSPan);
//     }

//     const form = document.querySelector('main form.conteudoprincipal1')

//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//         removeErrors();

//         let hasErros = false;
        
//         const inputList = document.querySelectorAll('main form.conteudoprincipal1 input')

//         inputList.forEach (input => {
//             if(!input.value){
//                 hasErros= true
//                 createError(input, 'Campo Obrigatorio');
//             }
//         });

//         if (!hasErros) {
//             this.submit();
//         }      
//     });
// });