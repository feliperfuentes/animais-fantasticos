export default function initNavTabs() {
  // NAVEGAÇÃO POR TABS
  const animaisMenu = document.querySelectorAll(
    "[data-animais='animais-menu'] li"
  );
  const animaisTexto = document.querySelectorAll(
    "[data-animais='animais-texto'] section"
  );

  // ADICIONAR ATRIBUTO DATA-ANIME
  animaisTexto.forEach((texto, index) => {
    if (index % 2 === 0) {
      texto.dataset.anime = "show-right";
    } else {
      texto.dataset.anime = "show-down";
    }
  });

  // ADICIONA CLASSE SHOW-RIGHT AO PRIMEIRO ITEM DA LISTA
  animaisTexto[0].classList.add("show-right");

  animaisMenu.forEach((item, index) => {
    item.addEventListener("click", function animalClicado(event) {
      animaisTexto.forEach((texto) => {
        texto.classList.remove("show-down");
        texto.classList.remove("show-right");
      });
      animaisTexto[index].classList.add(animaisTexto[index].dataset.anime);
    });
  });
}
