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
}}


document.getElementById('escolherArquivo').addEventListener('change', function(event) {
    var imagem = document.getElementById('imagem');
    imagem.src = URL.createObjectURL(event.target.files[0]);
  });


