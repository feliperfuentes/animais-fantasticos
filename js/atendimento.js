export default class Atendimento {
  constructor(diasAtendimento, horariosAtendimento, element) {
    this.diasAtendimento = diasAtendimento;
    this.horariosAtendimento = horariosAtendimento;
    this.element = element;
  }

  verificarAtendimento(dias, horas) {
    const data = new Date();
    const hoje = data.getDay();
    const hora = data.getHours();

    if (hora >= horas[0] && hora < horas[1] && dias.includes(hoje)) {
      const atendimento = document.querySelector(this.element);
      atendimento.classList.add("aberto");
    }
  }

  init() {
    this.verificarAtendimento(this.diasAtendimento, this.horariosAtendimento);
    return this;
  }
}
