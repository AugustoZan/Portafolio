// Función para abrir el modal
function openModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'block'; // Muestra el modal
  setTimeout(() => {
    modal.classList.add('show'); // Agrega la clase para la animación de entrada
  }, 10); // Pequeño delay para que la transición funcione
}

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('show'); // Remueve la clase para la animación de salida
  setTimeout(() => {
    modal.style.display = 'none'; // Oculta después de la transición
  }, 300); // Tiempo igual a la duración de la transición (0.3s)
}

// Cerrar el modal si se hace clic fuera del contenido
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal(); // Usa la función de cierre para animación
  }
}