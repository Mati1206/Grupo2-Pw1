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
        verificarDatos();
    } else {
        errorRepetirContraseña.innerHTML = errorRepetir;
        mensaje.innerHTML = error;
        botonGuardar.disabled = true;
    }
}

function verificarDatosDePago() {
    const numeroTarjeta = document.getElementById('numeroTarjeta').value;
    const codigoTarjeta = document.getElementById('codigoTarjeta').value;
    const metodoDePagoSeleccionado = document.querySelector('input[name="pago"]:checked').value;
    let esValido = true;

    const errorTarjeta = document.getElementById('errorTarjeta');
    const errorCodigo = document.getElementById('errorCodigo');

    errorTarjeta.textContent = '';
    errorCodigo.textContent = '';

    if (metodoDePagoSeleccionado === 'TajetaCredito') {
        if (numeroTarjeta.length < 16 || numeroTarjeta.length > 19 || !/^\d+$/.test(numeroTarjeta)) {
            errorTarjeta.textContent = 'El número de tarjeta debe tener entre 16 y 19 dígitos.';
            errorTarjeta.style.color = 'red';
            esValido = false;
        }
        if (codigoTarjeta.length !== 3 || !/^\d+$/.test(codigoTarjeta) || /0/.test(codigoTarjeta)) {
            errorCodigo.textContent = 'El código de seguridad debe tener exactamente 3 dígitos distintos de cero.';
            errorCodigo.style.color = 'red';
            esValido = false;
        }
    }

    return esValido;
}

function verificarDatos() {
    const esContraseñaValida = contraseña.value === repetirContraseña.value && esContraseñaCompleja(contraseña.value);
    const sonDatosDePagoValidos = verificarDatosDePago();

    if (esContraseñaValida && sonDatosDePagoValidos) {
        botonGuardar.disabled = false;
    } else {
        botonGuardar.disabled = true;
    }
}

contraseña.addEventListener('input', verificarContraseñaCorrecta);
repetirContraseña.addEventListener('input', verificarContraseñaCorrecta);
document.getElementById('numeroTarjeta').addEventListener('input', verificarDatos);
document.getElementById('codigoTarjeta').addEventListener('input', verificarDatos);
document.querySelectorAll('input[name="pago"]').forEach(function (radio) {
    radio.addEventListener('change', verificarDatos);
});
document.querySelectorAll('.checkboxCuponPago input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', verificarDatos);
});

form.addEventListener("submit", e => {
    e.preventDefault();
    if (!botonGuardar.disabled) {
        guardarDatos();
        console.log('Formulario enviado');
    }
});

function esContraseñaCompleja(contraseña) {
    const letras = contraseña.match(/[A-Za-z]/g);
    const numeros = contraseña.match(/[0-9]/g);
    const especiales = contraseña.match(/[^A-Za-z0-9]/g);

    return letras && letras.length >= 2 && numeros && numeros.length >= 2 && especiales && especiales.length >= 2;
}

function limpiarMensajeError() {
    const errorCupon = document.getElementById('errorCupon');
    errorCupon.textContent = '';
}

function guardarDatos() {
    const metodoDePagoSeleccionado = document.querySelector('input[name="pago"]:checked').value;
    const numeroTarjeta = document.getElementById('numeroTarjeta').value;
    const codigoTarjeta = document.getElementById('codigoTarjeta').value;

    const datos = {
        nuevaContraseña: contraseña.value,
        metodoDePago: {
            metodo: metodoDePagoSeleccionado,
            numeroTarjeta: metodoDePagoSeleccionado === 'TajetaCredito' ? numeroTarjeta : '',
            codigoTarjeta: metodoDePagoSeleccionado === 'TajetaCredito' ? codigoTarjeta : ''
        }
    };

    localStorage.setItem('datosUsuario', JSON.stringify(datos));
    mensajeCorrecto.innerHTML = 'Datos guardados correctamente';
}


document.addEventListener('DOMContentLoaded', function() {
    const metodoDePago = JSON.parse(localStorage.getItem('metodoDePago'));
    if (metodoDePago) {
        document.querySelector(`input[name="pago"][value="${metodoDePago.metodo}"]`).checked = true;
        if (metodoDePago.metodo === 'TajetaCredito') {
            document.getElementById('numeroTarjeta').value = metodoDePago.numeroTarjeta;
            document.getElementById('codigoTarjeta').value = metodoDePago.codigoTarjeta;
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const nombreUsuarioElemento = document.querySelector('.nombreUsuario');
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
const usu=document.getElementById('usu')

    if (usuarioLogueado && usuarioLogueado.usuario && usuarioLogueado.email ) {
        nombreUsuarioElemento.textContent = usuarioLogueado.usuario;
        usu.textContent= usuarioLogueado.email
       

    }
});
