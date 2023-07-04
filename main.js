const form = document.getElementById("form-atividade");
const imgAprovado = "<img src='images/aprovado.png'alt 'Emoji celebrando'/>"; //inserindo emojis
const imgReprovado = "<img src='images/reprovado.png'alt 'Emoji triste'/>";
let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault(); //remover comportamento de atualizar a página
  //chamar os campos nome e nota
  const inputNomeAtividade = document.getElementById("nome-atividade");
  const inputNotaAtividade = document.getElementById("nota-atividade");

  //adicionar linhas a tabela
  // let linhas = ""; adicionado ao conteúdo global para evitar o reset de linha

  //adicionar no corpo da tabela
  let linha = "<tr>";
  linha += `<td>${inputNomeAtividade.value}</td>`;
  linha += `<td>${inputNotaAtividade.value}</td>`;
  linha += `<td>${
    inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado
  }</td>`;
  linha += "</tr>";

  linhas += linha;

  //colocar itens acima no corpo da tabela
  const corpoTabela = document.querySelector("tbody");

  //inserir conteúdo dentro de uma tag
  corpoTabela.innerHTML = linhas;

  //limpar o campo após adicionar conteúdo
  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";
});
