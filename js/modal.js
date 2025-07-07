export default function initModal() {
  const login = document.querySelector('[data-modal="abrir"]');
  const modalContainer = document.querySelector('[data-modal="container"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');

  // ABRIR MODAL
  function abrirModal(event) {
    event.preventDefault();
    modalContainer.classList.add("modal-open");
  }
  login.addEventListener("click", abrirModal);

  //FECHAR MODAL PELO BOTÃO
  function fecharModal() {
    modalContainer.classList.remove("modal-open");
  }
  btnFechar.addEventListener("click", fecharModal);

  //FECHAR MODAL CLICANDO FORA DELE
  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
      fecharModal();
    }
  });
}
