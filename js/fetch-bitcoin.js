export default class FetchBitcoin {
  constructor(url, targetUrl) {
    this.url = url;
    this.targetUrl = targetUrl;
  }

  bitcoin() {
    const fetchBiticoin = fetch(this.url);
    fetchBiticoin
      .then((response) => {
        return response.json();
      })
      .then((bitcoin) => {
        const divBitcoin = document.querySelector(this.targetUrl);
        divBitcoin.innerText = (1000 / bitcoin.BRL.buy).toFixed(4);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  init() {
    this.bitcoin();
    return this;
  }
}
