$(document).ready(function(){
    $('form').on('submit',function(e){
        e.preventDefault();

        addIten();

        cleanInput();

    })
})

function addIten(){
    $('ul').append(`<li>${$('input').val() }</li>`);
}

function cleanInput(){
    $('input').val('');
}

/*Verificar evento de clique na lista */
$('#list').on('click', 'li', function(){
    $(this).toggleClass('completo');
})