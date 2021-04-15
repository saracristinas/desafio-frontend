$(document).ready(function(){
    console.log('Página carregada');


    fetch("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1")
    .then(function(data) {
        debugger
        console.log(data)
    })
    .catch(function(err){
        debugger
        console.log('deu ruim!')
    })

});