const form = document.getElementById("form-atividade");
const imgAprovado = "<img src='images/aprovado.png'alt 'Emoji celebrando'/>"; //inserindo emojis
const imgReprovado = "<img src='images/reprovado.png'alt 'Emoji triste'/>";
//para calcular a média precisa criar 2 arrays
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite uma nota mínima: "));

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault(); //remover comportamento de atualizar a página
  //chamar os campos nome e nota
  adicionaLinha();
  atualizaTabela();
  atualizaMediaFinal();
});

function adicionaLinha() {
  const inputNomeAtividade = document.getElementById("nome-atividade");
  const inputNotaAtividade = document.getElementById("nota-atividade");

  if (atividades.includes(inputNomeAtividade.value)) {
    alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
  } else {
    atividades.push(inputNomeAtividade.value); //médias
    notas.push(parseFloat(inputNotaAtividade.value)); // médias
    //adicionar linhas a tabela
    // let linhas = ""; adicionado ao conteúdo global para evitar o reset de linha

    //adicionar no corpo da tabela
    let linha = "<tr>";
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${
      inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado
    }</td>`;
    linha += "</tr>";

    linhas += linha;
  }

  //limpar o campo após adicionar conteúdo
  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";
}

function atualizaTabela() {
  //colocar itens acima no corpo da tabela
  const corpoTabela = document.querySelector("tbody");

  //inserir conteúdo dentro de uma tag
  corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
  const mediaFinal = calculaMediaFinal();

  document.getElementById("media-final-valor").innerHTML = mediaFinal;
  document.getElementById("media-final-resultado").innerHTML =
    mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
  let somaDasNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }

  return somaDasNotas / notas.length; //qtde de inserções na tabela
}
