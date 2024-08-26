//Selecionando elementos do DOM
let titulo=document.getElementById("titulo");
let nombre=document.getElementById('iten-list');
let novoltemlnputante=document.getElementById('novo-item');
let adicionarBtn = document.getElementById('adicionar-btn');
let removerBtn = document.getElementByld('remover-btn');

//Função para adicionar novo item

function adicionarItem() {
  let novoItem = novoltemlnputante.value;

  // Verifica se o input não está vazio
  if (novoItem.trim() === '') {
    alert('Por favor, insira um item válido.');
    return;
  }

  // Cria um novo item com o valor do input
  let novoElemento = document.createElement('li');
  novoElemento.textContent = novoItem;

  // Adiciona o novo item à lista
  nombre.appendChild(novoElemento);

  // Limpa o input
  novoltemlnputante.value = '';
  
}

// Função para remover item

function removerItem() {
  let ultimoItem = nombre.lastElementChild;

  // Verifica se a lista não está vazia
  if (ultimoItem) {
    nombre.removeChild(ultimoItem);
  } else {
    alert('Não há itens para remover.');
  }
}

// Adiciona eventos aos botões

adicionarBtn.addEventListener('click', adicionarItem);
removerBtn.addEventListener('click', removerItem);

// Adiciona um novo item inicial

let novoItem = 'Novo item';
let novoElemento = document.createElement('li');
novoElemento.textContent = novoItem;
nombre.appendChild(novoElemento);

// Atualiza o título da página

let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();
let tituloAtualizado = `Lista de Itens - Ano ${anoAtual}`;
titulo.textContent = tituloAtualizado;

