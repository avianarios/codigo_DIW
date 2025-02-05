document.getElementById("boton-abre").addEventListener("click", muestraModal);
document.getElementById("boton-cierra").addEventListener("click", function (){
    document.getElementById("modal").style.display="none";
});

function muestraModal() {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
}


/*document.addEventListener(
    "click",
    function(event) {
      // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
      if (
        event.target.matches(".button-close-modal") ||
        !event.target.closest(".modal")
      ) {
        closeModal()
      }
    },
    false
  )
  
  function closeModal() {
    document.querySelector(".modal").style.display = "none"
  }*/