export default class Tooltip {
  constructor(mapa) {
    this.mapa = document.querySelector(mapa);
    this.tooltip = this.criarTooltip();
  }

  criarTooltip() {
    const textTooltip = this.mapa.getAttribute("aria-label");
    const tooltip = document.createElement("div");

    tooltip.innerText = textTooltip;
    tooltip.classList.add("tooltip");
    this.mapa.appendChild(tooltip);

    return tooltip;
  }

  mostrarTooltip() {
    this.mapa.addEventListener("mousemove", (e) => {
      this.tooltip.style.display = "block";

      let posicaoHorizontal =
        e.clientX - e.target.getBoundingClientRect().x + 20;

      let posicaoVertical = e.clientY - e.target.getBoundingClientRect().y + 20;

      this.tooltip.style.left = posicaoHorizontal + "px";
      this.tooltip.style.top = posicaoVertical + "px";
    });
  }

  esconderTooltip() {
    this.mapa.addEventListener("mouseout", () => {
      this.tooltip.style.display = "none";
    });
  }

  init() {
    this.mostrarTooltip();
    this.esconderTooltip();
    return this;
  }
}
