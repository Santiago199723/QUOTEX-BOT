if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar ao indicador! Suporte: https://t.me/+By1fd0M7ZCAwNmFh");
  window.location.href = "./assets/html/signin.html";
}

const userLogado = JSON.parse(localStorage.getItem("userLogado"));
const logadoElement = document.querySelector("#logado");
const logado = document.querySelector("#logado");

if (userLogado && userLogado.nome) {
  logado.innerHTML = `<span style="font-family: 'Verdana', sans-serif; color: #4CAF50; font-size: 1.5em;">Olá, ${userLogado.nome}</span>`;
} else {
  logado.innerHTML = `<span style="font-family: 'Verdana', sans-serif; color: #4CAF50; font-size: 1.5em;">Olá, Trader!</span>`;
}





function sair() {
  localStorage.removeItem("token");
  localStorage.removeItem("userLogado");
  window.location.href = "./assets/html/signin.html";
}
