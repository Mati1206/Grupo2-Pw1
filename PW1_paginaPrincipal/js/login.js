document.getElementById('campo').addEventListener('submit', function(event) {
    const error= document.getElementById("error")
    event.preventDefault(); 
    const usuario = document.getElementById('Usuario').value;
    const contraseña = document.getElementById('contraseña').value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuarios.find(buscador => buscador.usuario === usuario && buscador.contraseña === contraseña);

    if (usuarioEncontrado) {
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioEncontrado));
        error.textContent=""
        window.location.href = 'index.html';
    } else {
        error.textContent="Usuario o contraseña incorrecto"
        error.style.color="red"
    }
});