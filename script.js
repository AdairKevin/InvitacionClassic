function abrirSobre() {
  const sobre = document.querySelector(".envelope");
  if (!sobre.classList.contains("abierto")) {
    sobre.classList.add("abierto");
    sobre.onclick = null; // Desactiva el evento de clic después de abrir
  }
}
