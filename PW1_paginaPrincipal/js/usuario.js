document.getElementById('registro').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;
    const confirmarContraseña = document.getElementById('confirmar_contraseña').value;

    
    const datosUsuario = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        usuario: usuario,
        contraseña: contraseña,
        confirmarContraseña: confirmarContraseña,
    };

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios.push(datosUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    window.location.href = 'home.html';
});