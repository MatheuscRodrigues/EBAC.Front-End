const form = document.getElementById('form-submit')

form.addEventListener('submit', function validaNum (){

    let numA = parseInt(document.getElementById('numA').value)
    let numB = parseInt(document.getElementById('numB').value)

    if (numB > numA) {
        alert(`O número "${numB}" é maior que o número "${numA}" - Formulário Válido!`);
        return true;
    } 
    else {
        alert(`O número "${numB}" é menor que o número "${numA}" - Formulário Inválido!`);
        return false
    }
})