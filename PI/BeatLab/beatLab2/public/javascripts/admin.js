
let id = document.getElementById('id')






    document.getElementById("botaoRead").addEventListener("click", function() {
        //  document.getElementById("botaoRead").innerHTML = "Hello World";
        preventDefault()
    fetch('/servicos/search').then(response =>{
    return response.json();
        })
    .then(data =>{
        id.value(data);
    })
    
    }); 