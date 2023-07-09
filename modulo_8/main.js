const form = document.getElementById('form');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji feliz">';
const imgReprovado = '<img src="./images/Reprovado.png" alt="Emoji feliz">';
const notaMinima = parseFloat(prompt('Informe a nota mínima para aprovação:'))

let linhas = '';

const notas = [];
const atividades = [];

const aprovado = '<span class="resultado aprovado">Aprovado!</span>';
const reprovado = '<span class="resultado reprovado">Reprovado!</span>';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    mediaNota();
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('nota');

    if(atividades.includes(inputNomeAtividade.value)) {
        alert('A atividade já está inclusa na lista!')
    } else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td> ${inputNomeAtividade.value}</td>`;
    linha += `<td> ${inputNotaAtividade.value}</td>`;
    linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>'

    linhas += linha;
    }
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
    
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function calculaMediaFinal(){
    let soma = 0;

    for(let i = 0; i < atividades.length; i++){
        soma += notas[i];
    }

    let mediaFinal = soma / atividades.length;
    
    return mediaFinal;
}

function mediaNota() {
    let mediaAtual = calculaMediaFinal(mediaFinal);

    document.getElementById('mediaFinal').innerHTML = mediaAtual;
    document.getElementById('resultadoFinal').innerHTML = mediaAtual >= notaMinima ? aprovado : reprovado;
}
