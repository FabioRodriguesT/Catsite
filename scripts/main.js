
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
  let meuSrc = minhaImagem.getAttribute('src');
  if(meuSrc === 'images/yellow-cat.jpg') {
    minhaImagem.setAttribute('src', 'images/two-cats.jpg');
  } else {
    minhaImagem.setAttribute('src', 'images/yellow-cat.jpg');
  }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

meuCabecalho.textContent = 'Ola mundo!'; 

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  if(!meuNome || meuNome === null) {
    defineNomeUsuario();
  } else {
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Cats are cool, ' + meuNome;
  }
}

if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'Cats are cool, ' + nomeGuardado;
}

meuBotao.onclick = function() {defineNomeUsuario()};

