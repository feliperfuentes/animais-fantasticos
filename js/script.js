import initNavTabs from "./nav-tabs.js";
import Accordion from "./accordion.js";
import initAnimaScroll from "./anima-scroll.js";
import initModal from "./modal.js";
import initTooltip from "./tooltip.js";
import initDropdownMenu from "./dropdown-menu.js";
import initAtendimento from "./atendimento.js";
import initSetNumeros from "./setNumeros.js";
import initFetchBitcoin from "./fetch-bitcoin.js";

const accordion = new Accordion(".faq-lista dt");
accordion.init();

initSetNumeros();
initNavTabs();
//initAccordion();
initAnimaScroll();
initModal();
initTooltip();
initDropdownMenu();
initAtendimento();
initFetchBitcoin();
