document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const usuarioInput = document.getElementById('usuario');
    const submitButton = document.getElementById('button');

    // validar formulario
    function validateForm() {
        const email = emailInput.value.trim();
        const usuario = usuarioInput.value.trim();
        
        if (email === '' || usuario === '') {
            return false;
        }

        return true;
    }

    // deshabilitar el botón de enviar
    function toggleSubmitButton() {
        if (validateForm()) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    // eventos de entrada a los campos de formulario
    emailInput.addEventListener('input', toggleSubmitButton);
    usuarioInput.addEventListener('input', toggleSubmitButton);

    // validar formulario para enviar
    document.querySelector('form').addEventListener('submit', (e) => {
        if (!validateForm()) {
            e.preventDefault();
            alert('Por favor, complete todos los campos.');
        }
    });
});