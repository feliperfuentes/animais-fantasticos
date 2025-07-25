import Accordion from "./accordion.js";
import NavTabs from "./nav-tabs.js";
import AnimaScroll from "./anima-scroll.js";
import Modal from "./modal.js";
import Tooltip from "./tooltip.js";
import initDropdownMenu from "./dropdown-menu.js";
import initAtendimento from "./atendimento.js";
import SetNumeros from "./setNumeros.js";
import FetchBitcoin from "./fetch-bitcoin.js";

const accordion = new Accordion(".faq-lista dt");
accordion.init();

const navtabs = new NavTabs(
  "[data-animais='animais-menu'] li",
  "[data-animais='animais-texto'] section"
);
navtabs.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="container"]',
  '[data-modal="fechar"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const setNumeros = new SetNumeros("../animaisapi.json");
setNumeros.init();

const fetchBitcoin = new FetchBitcoin(
  "https://blockchain.info/ticker",
  ".btc-preco"
);
fetchBitcoin.init();

const animascroll = new AnimaScroll(".grid-container > section");
animascroll.init();

//initSetNumeros();
//initNavTabs();
//initAccordion();
//initAnimaScroll();
//initModal();
//initTooltip();
initDropdownMenu();
initAtendimento();
//initFetchBitcoin();
