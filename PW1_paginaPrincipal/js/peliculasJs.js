let CATALOGO_PELICULAS = []

function filtrarPeliculas(){
    let catalogo = []
    for(let i = 0; i < PELICULAS_Y_SERIES.length; i++){
        if(PELICULAS_Y_SERIES[i].categoria === 1){
            catalogo.push(PELICULAS_Y_SERIES[i])
        }
    }
    return catalogo
}

CATALOGO_PELICULAS = filtrarPeliculas()

function actualizarCatalogo(catalogo){
    const nodo_pelicualasYseries = document.querySelector('.peliculasYSeries')
    let nodo_linea
    nodo_pelicualasYseries.innerHTML = '';

    for(let i = 0; i < catalogo.length; i++){
        if(i % 5 === 0){
          nodo_linea = document.createElement('div')
          nodo_linea.classList.add('linea')
          nodo_pelicualasYseries.appendChild(nodo_linea)
        }

        let nodo_article = document.createElement('article')

        let nodo_imagen = document.createElement('img')
        nodo_imagen.src = catalogo[i].poster
        nodo_imagen.alt = catalogo[i].título
        nodo_imagen.height = 330;

        let nodo_a = document.createElement('a')
        nodo_a.href = "./detallePelicula.html"

        nodo_a.appendChild(nodo_imagen)
        nodo_article.appendChild(nodo_a)
        nodo_linea.appendChild(nodo_article)

    }
}

function mostrarPeliculas() {
    const nodo_catalogoCompleto = document.querySelector('#peliculas');
    nodo_catalogoCompleto.addEventListener('click', (event) => {
        event.preventDefault();
        actualizarCatalogo(CATALOGO_PELICULAS);
    });
}