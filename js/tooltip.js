export default function initTooltip() {
  const mapa = document.querySelector("[data-tooltip]");

  function criarTooltip() {
    const textTooltip = mapa.getAttribute("aria-label");
    const tooltip = document.createElement("div");

    tooltip.innerText = textTooltip;
    tooltip.classList.add("tooltip");
    mapa.appendChild(tooltip);

    return tooltip;
  }
  const tooltip = criarTooltip();

  mapa.addEventListener("mousemove", (e) => {
    tooltip.style.display = "block";

    let posicaoHorizontal = e.clientX - e.target.getBoundingClientRect().x + 20;

    let posicaoVertical = e.clientY - e.target.getBoundingClientRect().y + 20;

    tooltip.style.left = posicaoHorizontal + "px";
    tooltip.style.top = posicaoVertical + "px";
  });

  mapa.addEventListener("mouseout", () => {
    tooltip.style.display = "none";
  });
}
