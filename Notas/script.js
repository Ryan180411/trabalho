// 1. Selecionando elementos do DOM
const campoNome = document.getElementById("campoNome");
const campoNota = document.getElementById("campoNota");
const botaoAdicionar = document.getElementById("botaoAdicionar");
const mensagem = document.getElementById("mensagem");
const listaAlunos = document.querySelector("#listaAlunos");
const resumo = document.querySelector("#resumo");
// 2. Dados iniciais da turma (um array de objetos)
const alunos = [
{ nome: "Ana", nota: 8.5 },
{ nome: "Bruno", nota: 4.0 },
{ nome: "Carla", nota: 6.0 }
];
// 3. Função que desenha a lista de alunos na tela
function mostrarAlunos() {
for (let i = 0; i < alunos.length; i++) {
const aluno = alunos[i];
const item = document.createElement("li");
item.textContent = aluno.nome + " - Nota " + aluno.nota.toFixed(1);
listaAlunos.appendChild(item);
}
}
// 5. Desenha a lista assim que a página abre
mostrarAlunos();
console.log("Script carregado!");