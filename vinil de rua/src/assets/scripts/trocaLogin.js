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