document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registro');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const usuario = document.getElementById('usuario');
    const contraseña = document.getElementById('contraseña');
    const confirmar_contraseña = document.getElementById('confirmar_contraseña');
    const email = document.getElementById('email');
    const errores = document.getElementById('errores');
    const error2 = document.getElementById('error2');
    const especial = document.getElementById('especial');
    const errorE = document.getElementById('errorE');
    const errorc = document.getElementById('errorc');
    const confirmar = document.getElementById('confirmar');
    const cancelar = document.getElementById('cancelar');

    nombre.addEventListener("blur", function() {
        this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g,'');
        if (this.value === "") {
            errores.innerHTML = "El nombre solo puede contener letras";
        } else {
            errores.innerHTML = "";
        }
    });

    apellido.addEventListener("blur", function() {
        this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g,'');
        if (this.value === "") {
            error2.innerHTML = "El apellido solo puede contener letras";
        } else {
            error2.innerHTML = "";
        }
    });

    usuario.addEventListener("blur", function() {
        this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]/g,'');
        if (this.value === "") {
            especial.innerHTML = "El usuario no puede tener caracteres especiales";
        } else {
            especial.innerHTML = "";
        }
    });

    email.addEventListener("blur", function() {
        const validarEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (validarEmail.test(this.value)) {
            errorE.innerHTML = "";
        } else {
            errorE.innerHTML = "El mail ingresado no es correcto";
            this.value = "";
        }
    });

    contraseña.addEventListener("blur", function() {
        if (validarContrasena(this.value)) {
            errorc.innerHTML = "";
        } else {
            errorc.innerHTML = "Contraseña inválida. Debe tener al menos 8 caracteres, incluyendo 2 letras, 2 números y 2 caracteres especiales.";
        }
    });

    confirmar_contraseña.addEventListener("blur", function() {
        if (contraseña.value !== this.value) {
            errorc.innerHTML = "Las contraseñas no coinciden.";
        } else {
            errorc.innerHTML = "";
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const metodoPago = document.querySelector('input[name="metodo_pago"]:checked');

        const tarjeta = document.getElementById('tarjeta');
        const errorT = document.getElementById('errort');

        if (metodoPago && metodoPago.value === 'tarjeta') {
            const numeroTarjeta = document.getElementById('numero_tarjeta').value.trim();
            if (numeroTarjeta.length !== 16 || /^0{3}/.test(numeroTarjeta)) {
                errorT.innerHTML = "Número de tarjeta inválido.";
                return;
            } else {
                errorT.innerHTML = "";
            }
        }

        if (nombre.value === '' || apellido.value === '' || email.value === '' ||
            usuario.value === '' || contraseña.value === '' || confirmar_contraseña.value === '' ||
            (metodoPago && metodoPago.value === 'tarjeta' && !tarjeta.checked)) {
            alert('Por favor complete todos los campos requeridos.');
            return;
        }

        this.submit();
    });

    cancelar.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
});

function validarContrasena(contrasena) {
    const longitud = /^.{8,}$/;
    const letras = /[a-zA-Z]/g;
    const numeros = /[0-9]/g;
    const caracteresEspeciales = /[!=@#$%^&*()_+{}\[\]:;<>,.?~=/]/g;

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