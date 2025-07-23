import AnimaNumeros from "./anima-numeros.js";

export default function initAnimaScroll() {
  // ANIMAÇÃO AO SCROLL
  const secoes = document.querySelectorAll(".grid-container > section");

  function mostrarSecao() {
    secoes.forEach((secao) => {
      const view = window.innerHeight;
      const alturaSecao = secao.getBoundingClientRect().top;

      if (alturaSecao <= view / 1.5) {
        if (secao.classList.contains("numeros")) {
          if (!secao.classList.contains("scroll-in")) {
            const animaNumeros = new AnimaNumeros("[data-numero]");
            animaNumeros.init();
          }
        }
        secao.classList.remove("scroll-out");
        secao.classList.add("scroll-in");
      } else {
        secao.classList.remove("scroll-in");
        secao.classList.add("scroll-out");
      }
    });
  }
  window.addEventListener("scroll", mostrarSecao);
}
