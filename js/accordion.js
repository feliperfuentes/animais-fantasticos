export default class Accordion {
  constructor(perguntas) {
    this.perguntas = document.querySelectorAll(perguntas);
  }

  mostrarOcultar() {
    this.perguntas.forEach((pergunta) => {
      pergunta.addEventListener("click", () => {
        pergunta.classList.toggle("dt-ativo");
        const resposta = pergunta.nextElementSibling;
        resposta.classList.toggle("ativo");
      });
    });
  }

  init() {
    this.mostrarOcultar();
    return this;
  }
}
