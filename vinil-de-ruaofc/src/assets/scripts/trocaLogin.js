const container = document.querySelector('.form-container');

function showForgot() {
  container.classList.add('show-forgot');
  container.classList.remove('show-criarConta');
}

function showLogin() {
  container.classList.remove('show-forgot');
  container.classList.remove('show-criarConta');
}

function showCriarConta() {
  container.classList.add('show-criarConta');
  container.classList.remove('show-forgot');
}

var input = document.querySelector('#input input');
var img = document.querySelector('#input img');
img.addEventListener('click', function () {
  input.type = input.type == 'text' ? 'password' : 'text';
});