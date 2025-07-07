export default function initFetchBitcoin() {
  const fetchBiticoin = fetch("https://blockchain.info/ticker");
  fetchBiticoin
    .then((response) => {
      return response.json();
    })
    .then((bitcoin) => {
      const divBitcoin = document.querySelector(".btc-preco");
      divBitcoin.innerText = (1000 / bitcoin.BRL.buy).toFixed(4);
    })
    .catch((erro) => {
      console.log(erro);
    });
}
