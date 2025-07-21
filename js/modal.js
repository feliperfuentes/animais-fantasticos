export default class Modal {
  constructor(login, modalContainer, btnFechar) {
    this.login = document.querySelector(login);
    this.modalContainer = document.querySelector(modalContainer);
    this.btnFechar = document.querySelector(btnFechar);
    this.abrirModal = this.abrirModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
    this.fecharModalFora = this.fecharModalFora.bind(this);
  }

  // ABRIR MODAL
  abrirModal(event) {
    event.preventDefault();
    this.modalContainer.classList.add("modal-open");
  }

  //FECHAR MODAL PELO BOTÃO
  fecharModal() {
    this.modalContainer.classList.remove("modal-open");
  }

  //FECHAR MODAL CLICANDO FORA DELE
  fecharModalFora(e) {
    if (e.target === this.modalContainer) {
      this.fecharModal();
    }
  }

  addEvents() {
    this.login.addEventListener("click", this.abrirModal);
    this.btnFechar.addEventListener("click", this.fecharModal);
    this.modalContainer.addEventListener("click", this.fecharModalFora);
  }

  init() {
    this.addEvents();
    return this;
  }
}
