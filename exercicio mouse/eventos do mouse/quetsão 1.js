const botao = document.createElement("button");
botao.innerText = "Clique aqui";
botao.onclick = function() {
    alert("Botão clicado!");
};
document.getElementById("container").appendChild(botao);