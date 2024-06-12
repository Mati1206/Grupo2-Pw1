const ARRAY_PELICULAS = []

for(let i = 0; i < PELICULAS_Y_SERIES.length; i++){
    if(PELICULAS_Y_SERIES[i].categoria === 'pelicula'){
        ARRAY_PELICULAS[i] = PELICULAS_Y_SERIES[i]
    }
}