export default function initSetNumeros() {
  async function puxarDados() {
    const consultaNumeros = await fetch("../animaisapi.json");
    const numerosJson = await consultaNumeros.json();

    numerosJson.forEach((dado) => {
      const numerosGrid = document.querySelector(".numeros-grid");
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const span = document.createElement("span");
      h3.innerText = dado.specie;
      span.innerText = dado.total;
      span.setAttribute("data-numero", "");
      div.classList.add("numero-animal");
      div.appendChild(h3);
      div.appendChild(span);
      numerosGrid.appendChild(div);
    });
  }
  puxarDados();
}
