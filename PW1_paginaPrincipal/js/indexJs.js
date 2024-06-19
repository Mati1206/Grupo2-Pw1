
const catalogo_comlpeto = JSON.parse(localStorage.getItem('catalogo'))

actualizarCatalogo(catalogo_comlpeto)

function mostrarPeliculasYSeries(){
    const nodo_catalogoCompleto = document.querySelector('.home')
    nodo_catalogoCompleto.addEventListener('click', (event) =>{
       event.preventDefault()
       actualizarCatalogo(catalogo_comlpeto)
    })
}

function mostrarPeliculas(){
    let catalogo_peliculas;
    const nodo_peli = document.getElementById('peliculas')
    nodo_peli.addEventListener('click', (event) => {
        event.preventDefault()
        catalogo_peliculas = filtrarPeliculas()
        actualizarCatalogo(catalogo_peliculas)
    })
}

function mostrarSeries(){
    let catalogo_series;
    const nodo_peli = document.getElementById('series')
    nodo_peli.addEventListener('click', (event) => {
        event.preventDefault()
        catalogo_series = filtrarSeries()
        actualizarCatalogo(catalogo_series)
    })
}

function limpiarCatalogo(){
   const nodo_btn_salir = document.getElementById('salir')
   nodo_btn_salir.addEventListener('click', (event) => {
    event.preventDefault()
    
   })
}


mostrarSeries()
mostrarPeliculas()
mostrarPeliculasYSeries()

