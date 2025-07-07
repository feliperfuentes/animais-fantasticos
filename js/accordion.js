export default function initAccordion() {
  // ACCORDION LIST
  const perguntas = document.querySelectorAll(".faq-lista dt");

  perguntas.forEach((pergunta) => {
    pergunta.addEventListener("click", () => {
      pergunta.classList.toggle("dt-ativo");
      const resposta = pergunta.nextElementSibling;
      resposta.classList.toggle("ativo");
    });
  });
}
