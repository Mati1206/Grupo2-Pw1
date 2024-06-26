document.getElementById('campo').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const usuario = document.getElementById('Usuario').value.trim();
    const contraseña = document.getElementById('contraseña').value.trim();
    const error = document.getElementById("error");

    if (!usuario || !contraseña) {
        error.textContent = "Ambos campos son obligatorios";
        error.style.color = "red";
        return;
    }
    
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuarios.find(buscador => buscador.usuario === usuario && buscador.contraseña === contraseña);

    if (usuarioEncontrado) {
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioEncontrado));
        error.textContent = "";
        window.location.href = 'home.html';
    } else {
        error.textContent = "Usuario o contraseña incorrecto";
        error.style.color = "red";
    }
});
