document.getElementById('campo').addEventListener('submit', function(event) {
    const error=document.getElementById('error')
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const usuario = document.getElementById('usuario').value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuarios.find(buscador => buscador.email === email && buscador.usuario === usuario);

    if (usuarioEncontrado) {
        error.textContent=""
       window.location.href='login.html'
    } else {
      error.textContent="Email o nombre de usuario incorrecto"
      error.style.color="red"
    }
});