// usuario.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registro');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const email = document.getElementById('email').value.trim();
        const usuario = document.getElementById('usuario').value.trim();
        const contraseña = document.getElementById('contraseña').value.trim();
        const confirmarContraseña = document.getElementById('confirmar_contraseña').value.trim();

        // Validar campos
        if (nombre === '') {
            alert('Por favor ingrese su nombre.');
            return;
        }

        if (apellido === '') {
            alert('Por favor ingrese su apellido.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor ingrese un correo electrónico válido.');
            return;
        }

        if (usuario === '') {
            alert('Por favor ingrese un nombre de usuario.');
            return;
        }

        if (!validarContrasena(contraseña)) {
            alert('La contraseña debe tener al menos 8 caracteres, incluyendo 2 letras, 2 números y 2 caracteres especiales.');
            return;
        }

        if (contraseña !== confirmarContraseña) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        // Guardar datos del usuario en localStorage
        const datosUsuario = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            usuario: usuario,
            contraseña: contraseña
        };

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push(datosUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        // Reiniciar el formulario
        this.reset();

        // Redireccionar a la página de login
        window.location.href = 'index.html';
    });
    // Agregar evento click para el botón Cancelar
    const cancelarBtn = document.getElementById('cancelar');
    if (cancelarBtn) {
        cancelarBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});

function validarContrasena(contrasena) {
    const longitud = /^.{8,}$/;
    const letras = /[a-zA-Z]/g;
    const numeros = /[0-9]/g;
    const caracteresEspeciales = /[!@#$%^&*()_+{}\[\]:;<>,.?~]/g;

    if (!longitud.test(contrasena)) {
        return false;
    }

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
