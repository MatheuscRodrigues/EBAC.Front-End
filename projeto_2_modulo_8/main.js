const form = document.getElementById('form');
let fullName = document.getElementById('fullName');
let contact = document.getElementById('contact');
const table = document.querySelector('table');

const namesList = [];

form.addEventListener('submit', function(e){
    e.preventDefault();

    if(validationName(fullName.value)){
    addContact();

    } else{
        alert("Insira o Nome Completo");
    }

})

function addContact() {
    /*Função para adicionar contatos */
    const columnFullName = document.createElement('td');
    const columnContact = document.createElement('td');
    const newLine = document.createElement('tr');

    columnFullName.id = 'fullNameCell';
    columnContact.id = 'contactCell';


    if(namesList.includes(fullName.value)){ 
    /*Comparação para verificar se contato já está incluso na lista */
        alert("O Contato já está incluso na lista");
    } else{
    namesList.push(fullName.value);

    columnFullName.textContent = fullName.value;
    columnContact.textContent = contact.value;

    newLine.appendChild(columnFullName);
    newLine.appendChild(columnContact);

    table.querySelector('tbody').appendChild(newLine);

    fullName.value = '';
    contact.value = '';
}
}

function validationName (fullNameIsValid) {
    /*Função para validar se nome está completo*/
    const fullNameArray = fullNameIsValid.split(" ");
    return fullNameArray.length >= 2;
}


/* Ajustes futuros: Inclusão de campo de pesquisa de contato com filtro, exclusão de contato selecionado
através do checkbox.*/