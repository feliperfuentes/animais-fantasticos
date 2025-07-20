import Accordion from "./accordion.js";
import NavTabs from "./nav-tabs.js";
import initAnimaScroll from "./anima-scroll.js";
import initModal from "./modal.js";
import initTooltip from "./tooltip.js";
import initDropdownMenu from "./dropdown-menu.js";
import initAtendimento from "./atendimento.js";
import initSetNumeros from "./setNumeros.js";
import initFetchBitcoin from "./fetch-bitcoin.js";

const accordion = new Accordion(".faq-lista dt");
accordion.init();

const navtabs = new NavTabs(
  "[data-animais='animais-menu'] li",
  "[data-animais='animais-texto'] section"
);
navtabs.init();

initSetNumeros();
//initNavTabs();
//initAccordion();
initAnimaScroll();
initModal();
initTooltip();
initDropdownMenu();
initAtendimento();
initFetchBitcoin();
