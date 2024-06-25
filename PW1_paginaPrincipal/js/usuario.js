document.getElementById('registro').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const usuario = document.getElementById('usuario').value.trim();
    const contraseña = document.getElementById('contraseña').value.trim();
    const confirmarContraseña = document.getElementById('confirmar_contraseña').value.trim();

    if (nombre === '') {
        return;
    }

    if (apellido === '') {
        
        return;
    }

    if (email === '') {
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return;
    }

    if (usuario === '') {
        return;
    }

    if (!validarContrasena(contraseña)) {
        return;
    }

    if (contraseña !== confirmarContraseña) {
       
        return;
    }

    
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

    
    this.reset();

    window.location.href = 'index.html';
});

function validarContrasena(contrasena) {
    if (contrasena.length < 8) {
        return false;
    }

    const letras = /[a-zA-Z]/g;
    const numeros = /[0-9]/g;
    const caracteresEspeciales = /[!@#$%^&*()_+{}\[\]:;<>,.?~]/g; 

    const letrasEncontradas = contrasena.match(letras);
    const numerosEncontrados = contrasena.match(numeros);
    const especialesEncontrados = contrasena.match(caracteresEspeciales);

    if (!letrasEncontradas || letrasEncontradas.length < 2 ||
        !numerosEncontrados || numerosEncontrados.length < 2 ||
        !especialesEncontrados || especialesEncontrados.length < 2) {
        return false;
    }

    return true;
}