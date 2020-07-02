// . para classe 
// # para ID.

$(document).ready(function(){
    var btn_thumb = $('#thumbs');
    var contador = $('#thumbs .contador span');

    btn_thumb.on('click', acrescenta);
   
    function acrescenta(){

//verifica se existe uma classe
        if(btn_thumb.hasClass('disabled')){

//se a condição existir, retorna e não executa a linha abaixo    
           return;

        }

        var contagem = parseInt(contador.text());
        contador.text(contagem + 1);

//adiciona a classe disavle após a operação acima    
        btn_thumb.addClass('disabled');

    };

});