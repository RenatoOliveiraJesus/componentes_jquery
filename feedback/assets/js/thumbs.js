// . para classe 
// # para ID.

$(document).ready(function(){
    var btn_thumb = $('#thumbs');
    var contador = $('#thumbs .contador span');

    btn_thumb.on('click', acrescenta);
   
    function acrescenta(){

        if(btn_thumb.hasClass('disabled')){

           return;
        }

        var contagem = parseInt(contador.text());
        contador.text(contagem + 1);
      

       //adiciona a classe disable   
        btn_thumb.addClass('disabled');

        var p = $( '<p>', {text:'0brigado pelo seu feedback!'} );
        
        btn_thumb.after(p);
    };

});