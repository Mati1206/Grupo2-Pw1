
const form = document.getElementById("form");
const contraseña = document.getElementById("nuevaContraseña");
const repetirContraseña = document.getElementById("repetirContraseña");
const mensaje = document.getElementById("error");
const errorRepetirContraseña = document.getElementById("errorRepetirContraseña");
const mensajeCorrecto = document.getElementById("mensajeContraseñaCorrecta");
const botonGuardar = document.querySelector(".botonGuardarCambios");

function verificarContraseñaCorrecta() {
    let error = '';
    let errorRepetir = '';
    let esValido = true;

    
    errorRepetirContraseña.innerHTML = '';
    mensaje.innerHTML = '';
    mensajeCorrecto.innerHTML = '';

    if (contraseña.value !== repetirContraseña.value) {
        errorRepetir += 'Las contraseñas no son idénticas. ';
        esValido = false;
    }

    if (contraseña.value.length < 8 || !esContraseñaCompleja(contraseña.value)) {
        error += 'La contraseña debe contener al menos 8 letras, 2 números y 2 caracteres especiales.';
        esValido = false;
    }

    if (esValido) {
        mensajeCorrecto.innerHTML = 'La contraseña es correcta';
        botonGuardar.disabled = false;
    } else {
        errorRepetirContraseña.innerHTML = errorRepetir;
        mensaje.innerHTML = error;
        botonGuardar.disabled = true;
    }
}


contraseña.addEventListener('input', verificarContraseñaCorrecta);
repetirContraseña.addEventListener('input', verificarContraseñaCorrecta);

form.addEventListener("submit", e => {
    e.preventDefault();

    if (!botonGuardar.disabled) {
   
        console.log('Formulario enviado');
    }
});

function esContraseñaCompleja(contraseña) {
    const letras = contraseña.match(/[A-Za-z]/g);
    const numeros = contraseña.match(/[0-9]/g);
    const especiales = contraseña.match(/[^A-Za-z0-9]/g);

    return letras && letras.length >= 2 && numeros && numeros.length >= 2 && especiales && especiales.length >= 2;
}

verificarContraseñaCorrecta();




function limpiarMensajeError() {
    const errorCupon = document.getElementById('errorCupon');
    errorCupon.textContent = '';
}

document.getElementById('numeroTarjeta').addEventListener('input', function (e) {
    const tarjeta = e.target.value;
    const errorMensaje = document.getElementById('errorTarjeta');
    const numerosTarjeta = tarjeta.replace(/\D/g, '');

    if (numerosTarjeta.length < 16 || numerosTarjeta.length > 19) {
        errorMensaje.textContent = 'El número de tarjeta debe tener entre 16 y 19 dígitos.';
        errorMensaje.style.color = 'red';
    } else {
        errorMensaje.textContent = '';
    }

    if (numerosTarjeta.length >= 16) {
        const sumOfDigits = numerosTarjeta.slice(0, -1).split('').reduce((acc, curr) => acc + parseInt(curr), 0);
        const lastDigit = parseInt(numerosTarjeta.slice(-1));
        if (sumOfDigits % 2 === 0 && lastDigit % 2 === 0) {
            errorMensaje.textContent = 'El último dígito debe ser impar si la suma de los números anteriores es par.';
            errorMensaje.style.color = 'red';
        } else {
            errorMensaje.textContent = '';
        }
    }

    e.target.value = numerosTarjeta;
});

document.getElementById('codigoTarjeta').addEventListener('input', function (e) {
    const codigo = e.target.value;
    const errorCodigo = document.getElementById('errorCodigo');

    const numerosCodigo = codigo.replace(/\D/g, '');

    if (numerosCodigo.length !== 3 || /0/.test(numerosCodigo)) {
        errorCodigo.textContent = 'El código de seguridad debe tener exactamente 3 dígitos distintos de cero.';
        errorCodigo.style.color = 'red';
    } else {
        errorCodigo.textContent = '';
    }

    e.target.value = numerosCodigo;
});

document.getElementById('cuponPago').addEventListener('change', function () {
    const errorCupon = document.getElementById('errorCupon');
    if (this.checked) {
        const pagoFacilChecked = document.getElementById('pagoFacil').checked;
        const rapiPagoChecked = document.getElementById('rapiPago').checked;

        if (!pagoFacilChecked && !rapiPagoChecked) {
            errorCupon.textContent = 'Debe seleccionar al menos un tipo de cupón.';
            errorCupon.style.color = 'red';
        } else {
            errorCupon.textContent = '';
        }
    }
});

document.querySelectorAll('.checkboxCuponPago input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        const cuponPagoChecked = document.getElementById('cuponPago').checked;
        const errorCupon = document.getElementById('errorCupon');
        const pagoFacilChecked = document.getElementById('pagoFacil').checked;
        const rapiPagoChecked = document.getElementById('rapiPago').checked;

        if (cuponPagoChecked && (!pagoFacilChecked && !rapiPagoChecked)) {
            errorCupon.textContent = 'Debe seleccionar al menos un tipo de cupón.';
            errorCupon.style.color = 'red';
        } else {
            errorCupon.textContent = '';
        }
    });
});

document.querySelectorAll('input[name="pago"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
        if (this.id !== 'cuponPago') {
            limpiarMensajeError();
        }
    });
});