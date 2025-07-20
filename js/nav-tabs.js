export default class NavTabs {
  constructor(imgs, text) {
    this.animaisMenu = document.querySelectorAll(imgs);
    this.animaisTexto = document.querySelectorAll(text);
  }

  // ADICIONA CLASSE SHOW-RIGHT AO PRIMEIRO ITEM DA LISTA
  showFirstText() {
    this.animaisTexto[0].classList.add("show-right");
  }

  // ADICIONAR ATRIBUTO DATA-ANIME
  addDataAnime() {
    this.animaisTexto.forEach((texto, index) => {
      if (index % 2 === 0) {
        texto.dataset.anime = "show-right";
      } else {
        texto.dataset.anime = "show-down";
      }
    });
  }

  // MOSTRA O TEXTO CORRESPONDENTE Á IMAGEM CLICADA
  showTextOnClick() {
    this.animaisMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.animaisTexto.forEach((texto) => {
          texto.classList.remove("show-down");
          texto.classList.remove("show-right");
        });
        this.animaisTexto[index].classList.add(
          this.animaisTexto[index].dataset.anime
        );
      });
    });
  }

  init() {
    this.showFirstText();
    this.addDataAnime();
    this.showTextOnClick();
  }
}
