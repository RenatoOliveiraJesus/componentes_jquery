// . para classe 
// # para ID.

$(document).ready(function(){
    var contador = $('#quantidade .contador span');

    var btn_quantidade_mais = $('#quantidade-mais');
    var btn_quantidade_menos = $('#quantidade-menos');

    
    btn_quantidade_mais.on('click', incrementa);
        function incrementa(){
            var contagem = parseInt(contador.text());
            contador.text(contagem + 1);
        };

        
    btn_quantidade_menos.on('click', decrementa);
        function decrementa(){

            var contagem = parseInt(contador.text());

            if(contagem > 0){

                contador.text(contagem - 1);

            }            
        };    
    
});