let btn = document.querySelector('.fa-eye');
let inputSenha = document.querySelector('#senha');

btn.addEventListener('click', () => {
  if (inputSenha.getAttribute('type') === 'password') {
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  }
});

function entrar() {
  let usuario = document.querySelector('#usuario');
  let userLabel = document.querySelector('#userLabel');

  let senha = document.querySelector('#senha');
  let senhaLabel = document.querySelector('#senhaLabel');

  let msgError = document.querySelector('#msgError');
  let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

  // Verificar se ambos os campos estão preenchidos
  if (!usuario.value || !senha.value) {
    msgError.style.display = 'block';
    msgError.innerHTML = 'Preencha todos os campos para poder logar.';
    return;
  }

  let userValid = listaUser.find((item) => {
    return usuario.value == item.userCad && senha.value == item.senhaCad;
  });

  if (userValid) {
    // Gera e armazena o token e userLogado no localStorage
    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;
    localStorage.setItem('token', token);
    localStorage.setItem('userLogado', JSON.stringify(userValid));

    window.location.href = '../../index.html';
  } else {
    userLabel.style.color = 'red';
    usuario.style.borderColor = 'red';
    senhaLabel.style.color = 'red';
    senha.style.borderColor = 'red';
    msgError.style.display = 'block';
    msgError.innerHTML = 'Cliente não tem cadastro ou usuário e senha incorretos!';
    usuario.focus();
  }
}
