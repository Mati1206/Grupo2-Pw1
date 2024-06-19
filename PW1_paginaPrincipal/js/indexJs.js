
actualizarCatalogo(PELICULAS_Y_SERIES)


function mostrarPeliculasYSeries(){
    let catalogo_comlpeto
    const nodo_catalogoCompleto = document.querySelector('.home')
    nodo_catalogoCompleto.addEventListener('click', (event) =>{
       event.preventDefault()
       catalogo_comlpeto = PELICULAS_Y_SERIES
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


function buscarPorNombre(){
    const nodo_buscar = document.getElementById('PeliculasYSeries')
    nodo_buscar.addEventListener('input', (event) => {
        const busqueda = event.target.value.toLowerCase();
        const resultado = PELICULAS_Y_SERIES.filter(item => item.título.toLowerCase().includes(busqueda))
        actualizarCatalogo(resultado)
    })
}

function filtrarGeneros() {
    const nodo_genero = document.getElementById('generos')
    nodo_genero.addEventListener('change', (event) => {
        let result = event.target.value
        const arrayGender = PELICULAS_Y_SERIES.filter(item => item.genero.toLowerCase() === result.toLowerCase())
        actualizarCatalogo(arrayGender)
    })
}

filtrarGeneros()
buscarPorNombre()
mostrarSeries()
mostrarPeliculas()
mostrarPeliculasYSeries()

