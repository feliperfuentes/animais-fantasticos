export default class AnimaNumeros {
  constructor(numeros) {
    this.numeros = document.querySelectorAll(numeros);
  }

  animarNumeros() {
    this.numeros.forEach((numero) => {
      let total = +numero.innerText;
      let inicial = 0;
      let tempo = Math.floor(total / 100);

      const mudarNumero = setInterval(() => {
        numero.innerText = inicial;
        inicial = inicial + tempo;

        if (inicial > total) {
          numero.innerText = total;
          clearInterval(mudarNumero);
        }
      }, 25 * Math.random());
    });
  }

  init() {
    this.animarNumeros();
    return this;
  }
}
