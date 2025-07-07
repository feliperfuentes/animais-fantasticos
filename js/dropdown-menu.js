export default function initDropdownMenu() {
  const dropdown = document.querySelector("[data-dropdown] a");
  const html = document.documentElement;
  const dropdownMenu = document.querySelector(".dropdown-menu");

  //ATIVAR AO CLICAR NO 'SOBRE'
  dropdown.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.parentElement.classList.toggle("active");
    html.addEventListener("click", clickOut);
  });

  //REMOVER AO CLICAR FORA
  function clickOut(e) {
    if (e.target !== dropdown && e.target !== dropdownMenu) {
      dropdown.parentElement.classList.remove("active");
    }
  }
}
