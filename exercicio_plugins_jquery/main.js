$(document).ready(function(){

    $('form').validate({     

        rules: {
        nome: {required: true},
        email: {required: true},
        telefone: {required: true},
        CPF: {required: true},
        endereco: {required: true},
        CEP: {required: true},
    },

        messages: {
            nome: 'Campo Obrigatório',
            email: 'Campo Obrigatório',
            telefone: 'Campo Obrigatório',
            CPF: 'Campo Obrigatório',
            endereco: 'Campo Obrigatório',
            CEP: 'Campo Obrigatório',
        }

})

    $('#telefone').mask('(00) 00000-0000')
    $('#CPF').mask('000.000.000-00')
    $('#CEP').mask('00000-000')

})

