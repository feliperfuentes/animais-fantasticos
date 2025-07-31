export default class DropdownMenu {
  constructor(menus, dropdownMenu) {
    this.menus = document.querySelector(menus);
    this.dropdownMenu = document.querySelector(dropdownMenu);
    this.html = document.documentElement;
    this.removeDropdownMenu = this.removeDropdownMenu.bind(this);
  }

  activeDropdownMenu() {
    //ATIVAR AO CLICAR NO 'SOBRE'
    this.menus.addEventListener("click", (e) => {
      e.preventDefault();
      this.menus.parentElement.classList.toggle("active");
      this.html.addEventListener("click", this.removeDropdownMenu);
    });
  }

  removeDropdownMenu(e) {
    //REMOVER AO CLICAR FORA
    if (e.target !== this.menus && e.target !== this.dropdownMenu) {
      this.menus.parentElement.classList.remove("active");
    }
  }

  init() {
    this.activeDropdownMenu();
    return this;
  }
}
