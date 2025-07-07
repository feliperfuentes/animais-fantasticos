export default function initAtendimento() {
  const diasAtendimento = [1, 2, 3, 4, 5];
  const horariosAtendimento = [8, 18];

  function verificarAtendimento(dias, horas) {
    const data = new Date();
    const hoje = data.getDay();
    const hora = data.getHours();

    if (hora >= horas[0] && hora < horas[1] && dias.includes(hoje)) {
      const atendimento = document.querySelector("[data-atendimento]");
      atendimento.classList.add("aberto");
    }
  }

  verificarAtendimento(diasAtendimento, horariosAtendimento);
}
