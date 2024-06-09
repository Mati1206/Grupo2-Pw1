const nombre= document.getElementById('nombre');
const apellido= document.getElementById('apellido')
const usuario=document.getElementById('usuario')
const form=document.getElementById('registro')
const contraseña= document.getElementById('contraseña')
const nombre_titular=document.getElementById('nombre_titular')
const tarjeta=document.getElementById('numero_tarjeta')
const codigo= document.getElementById('codigo_seguridad')

nombre.addEventListener("input",function(event){ 
    this.value=this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g,'');
});
apellido.addEventListener("input",function(event){ 
    this.value=this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g,'');
});

usuario.addEventListener("input",function(event){ 
    this.value=this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ0123456789\s]/g,'')
}) 
const suma={
    item:[],
    total:0
}
tarjeta.addEventListener("input",function(event){ 
    const error= document.getElementById('error')
    
    this.value=this.value.replace(/[^0123456789\s]/g,'')
    s= { 
        'num': parseFloat(tarjeta.value)
    }
    if(tarjeta.value.length>=16 && tarjeta.value.length<=19){ 
      
        suma['total']+= tarjeta.value
        error.innerHTML=""
        console.log(suma)
    }else { 
        error.innerHTML="Tiene que contar como minimo 16 caracteres y como maximo 19"
    }
})
nombre_titular.addEventListener("input",function(event){ 
    this.value=this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g,'')
})

codigo.addEventListener("input",function(event){ 
    const error= document.getElementById('error')
    this.value=this.value.replace(/[^0123456789\s]/g,'')
    
  if(codigo.value[0]==0 && codigo.value[1]==0 && codigo.value[2]==0){ 
    codigo.value= ""
    error.innerHTML="Ingrese un numero distinto a 000" 
    //alert("Ingrese un codigo valido")
  } else {
    error.innerHTML=""
    return codigo
    
  }
   
   // if(codigo.value.length === 3){ 
     //   alert("codigo correco")
    //}else if (codigo.value.length=0 && codigo.value.length1=0){
      //  alert("El numero es invalido")
   // }
})

