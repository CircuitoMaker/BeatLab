const database = require('../models/db')
const musica = require('../models/musica')




async function vai(){

const id = document.getElementById('id')
const artista = document.getElementById('artista')


//let msc = await musica.findOne()
//console.log(msc.preco)



   document.getElementById('busca').innerHTML = 'OLA';
  
    window.location='/servicos/admin' + id.value

   // id.value = document.getElementById('enviaId').value

  
}




    