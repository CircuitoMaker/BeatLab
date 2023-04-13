

document.getElementById('escolheArquivo').addEventListener('change', function(event) {
   var imagem = document.getElementById('imagemAL');
   imagem.src = URL.createObjectURL(event.target.files[0]);
 });





