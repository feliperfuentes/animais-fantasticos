import AnimaNumeros from "./anima-numeros.js";

export default class AnimaScroll {
  constructor(secoes) {
    this.secoes = document.querySelectorAll(secoes);
    this.mostrarSecao = this.mostrarSecao.bind(this);
  }

  mostrarSecao() {
    this.secoes.forEach((secao) => {
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

  addEvent() {
    window.addEventListener("scroll", this.mostrarSecao);
  }

  init() {
    this.mostrarSecao();
    this.addEvent();
    return this;
  }
}
