// Cria um botão e o adiciona ao corpo do documento
let botao = document.createElement("button");
botao.textContent = "Clique duas vezes";
document.body.appendChild(botao);

// Adiciona um evento de duplo clique ao botão
botao.addEventListener("dblclick", function() {
    botao.textContent = "Botão duplo clicado!";
});