
const nombre= document.getElementById('nombre');
const apellido= document.getElementById('apellido')
const usuario=document.getElementById('usuario')
const form=document.getElementById('registro')
const contraseña= document.getElementById('contraseña')
const confirmar_contraseña = document.getElementById('confirmar_contraseña')
const nombre_titular=document.getElementById('nombre_titular')
const tarjeta=document.getElementById('numero_tarjeta')
const codigo= document.getElementById('codigo_seguridad')
const mail =document.getElementById('email')
const errores=document.getElementById('errores')
const error2=document.getElementById('error2')
const especial=document.getElementById('especial')
const boton=document.getElementById('confirmar')

nombre.addEventListener("blur",function(){ 
    this.value=this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g,'');
    if (this.value==""){ 
        errores.innerHTML="El nombre solo puede contener letras"
    }else { 
        errores.innerHTML=""
    }
    return nombre.value
});



apellido.addEventListener("blur",function(){ 
    this.value=this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g,'');
    if (this.value==""){ 
        error2.innerHTML="El apellido solo puede contener letras"
    }else { 
        error2.innerHTML=""
    }
    return apellido.value
});

usuario.addEventListener("blur",function(){ 
    this.value=this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ0123456789\s]/g,'')
    if (this.value==""){ 
        especial.innerHTML="El usuario no puede tener caracteres especiales"
    }else { 
        especial.innerHTML=""
    }
}) 
/*const suma={
    item:[],
    total:0
}*/
tarjeta.addEventListener("input",function(){ 
    const error= document.getElementById('errort')
    
    this.value=this.value.replace(/[^0123456789\s]/g,'')
    /*s= { 
        'num': parseFloat(tarjeta.value)
    }*/
    if(this.value.length>=16 && this.value.length<=19){ 
        /*suma['total']+= tarjeta.value*/
        error.innerHTML=""
        /*console.log(suma)*/
    }else { 
        error.innerHTML="Tiene que contar como minimo 16 caracteres y como maximo 19"
    }
})

nombre_titular.addEventListener("input",function(){ 
    this.value=this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g,'')
})

codigo.addEventListener("blur",function(){ 
    const error= document.getElementById('errorE')
    this.value=this.value.replace(/[^0123456789\s]/g,'')
  if(this.value[0]==0 && this.value[1]==0 && this.value[2]==0 ){ 
    this.value= ""
    error.innerHTML="Ingrese un numero distinto a 000" 
  } else if(this.value.length<3) {
    error.innerHTML="El codigo tiene que contar con 3 digitos"
    this.value=""
  } else { 
    error.innerHTML=""

  } })

mail.addEventListener("blur",function(event) { 
    const error= document.getElementById('errorE')
   campo= event.target; 
   validar= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
if (validar.test(campo.value)){ 
    error.innerHTML=""
} else {
    error.innerHTML="El mail ingresado no es correcto"
    mail.value=""   
} })

       form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const password = contraseña.value;
        const confirmarPassword = confirmar_contraseña.value;
        const errorc = document.getElementById('errorc');

        if (password !== confirmarPassword) {
            errorc.textContent = 'Las contraseñas no coinciden.';
            errorc.style.color = 'red';
            return;
        }

        if (validarContrasena(password)) {
            //this.submit(); 
            const USUARIO = {
                nombreUsuario: usuario.value
            }

            localStorage.setItem('Nombre de usuario', JSON.stringify(USUARIO))
           
            this.submit()
        } else {
            errorc.textContent = 'Contraseña inválida. Debe tener al menos 8 caracteres, incluyendo 2 letras, 2 números y 2 caracteres especiales.';
            errorc.style.color = 'red';
        }
        
        
    });

    function validarContrasena(contrasena) {
        const longitud = /^.{8,}$/;
        const letras = /[a-zA-Z]/g;
        const numeros = /\d/g;
        const caract = /[!@#$%^&*(),.?":{}|<>]/g;
        if (!longitud.test(contrasena)) {
            return false;
        }
        const letra = contrasena.match(letras) ;
        const num = contrasena.match(numeros) ;
        const especi = contrasena.match(caract) ;

        if (letra.length < 2 || num.length < 2 || especi.length < 2) {
            return false;
        }

        return true;
    }


    