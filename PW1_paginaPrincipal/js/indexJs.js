
function actualizarCatalogo(catalogo){
    const nodo_pelicualasYseries = document.querySelector('.peliculasYSeries')
    let nodo_linea
    
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

actualizarCatalogo(PELICULAS_Y_SERIES)

function mostrarPeliculasYSeries(){
    const nodo_catalogoCompleto = document.querySelector('.home')
    nodo_catalogoCompleto.addEventListener('click', (event) =>{
       event.preventDefault()
       actualizarCatalogo(PELICULAS_Y_SERIES)
    })
}

mostrarPeliculasYSeries()
