document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('email');
  const usuarioInput = document.getElementById('usuario');
  const submitButton = document.getElementById('button');
  const error = document.getElementById('error');

  function validateFields() {
      const email = emailInput.value.trim();
      const usuario = usuarioInput.value.trim();

      if (email && usuario) {
          submitButton.disabled = false;
      } else {
          submitButton.disabled = true;
      }
  }

  emailInput.addEventListener('input', validateFields);
  usuarioInput.addEventListener('input', validateFields);

  document.getElementById('campo').addEventListener('submit', function(event) {
      event.preventDefault(); 
      const email = emailInput.value.trim();
      const usuario = usuarioInput.value.trim();

      if (!email || !usuario) {
          error.textContent = "Ambos campos son obligatorios";
          error.style.color = "red";
          return;
      }

      const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      const usuarioEncontrado = usuarios.find(buscador => buscador.email === email && buscador.usuario === usuario);

      if (usuarioEncontrado) {
          error.textContent = "";
          window.location.href = 'index.html';
      } else {
          error.textContent = "Email o nombre de usuario incorrecto";
          error.style.color = "red";
      }
  });
});
