let tamanhoFonte = 16;
let contrasteAtivo = false;

function aumentarFonte() {
  if (tamanhoFonte < 24) {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + 'px';
  }
}

function diminuirFonte() {
  if (tamanhoFonte > 12) {
    tamanhoFonte -= 2;
    document.body.style.fontSize = tamanhoFonte + 'px';
  }
}

function alternarContraste() {
  contrasteAtivo = !contrasteAtivo;
  if (contrasteAtivo) {
    document.body.classList.add("contraste");
  } else {
    document.body.classList.remove("contraste");
  }
}