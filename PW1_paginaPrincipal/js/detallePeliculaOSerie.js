

const carousel = document.querySelector(".main-carousel");

const flkty = new Flickity(carousel, {
  groupCells: true,
  prevNextButtons: false,
  wrapAround: true,
  autoPlay: 1500,
});


function obtenerParametrosUrl(name) {
    const parametrosUrl = new URLSearchParams(window.location.search);
    return parametrosUrl.get(name);
}

const id = obtenerParametrosUrl('id');
const item = PELICULAS_Y_SERIES[id];

function generarDropdownTemporadas(item) {
    if (!item.temporadas) return '';
    let dropdown = `<select id="temporadas">`;
    item.temporadas.forEach((temp, index) => {
        dropdown += `<option value="${index}">Temporada ${temp.numero}</option>`;
    });
    dropdown += `</select><select id="capitulos"></select>`;
    return dropdown;
}

function actualizarDropdownCapitulos(temporadaIndex) {
    const capitulosSelect = document.getElementById('capitulos');
    capitulosSelect.innerHTML = '';
    const capitulos = item.temporadas[temporadaIndex].capitulos;
    capitulos.forEach((cap, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = cap.titulo;
        capitulosSelect.appendChild(option);
    });
}

function generarDetalleSeriePelicula(item) {
    return `
        <article class="trailerYCaracteristicas">
            <div class="imagen">
                <iframe width="500em" height="270em"
                    src="${item.video}"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="boton">
                <a target="_blank" href="${item.video}">
                    <button class="comenzar">Comenzar</button>
                </a>
            </div>
        </article>
        <article class="descripcion">
            <h2 class="titulo">${item.título}</h2>
            <p class="genero"><strong>Género:</strong> ${item.genero}</p>
            <p class="duracion"><strong>Duración:</strong> ${item.duración}</p>
            <p class="sinopsis"><strong>Sinopsis:</strong> ${item.sinopsis}</p>
            ${generarDropdownTemporadas(item)}
        </article>
    `;
}

function mostrarInformacionPeliculaSerie() {
    const container = document.getElementById('contenedor');
    if (item) {
        container.innerHTML = generarDetalleSeriePelicula(item);
        const temporadasSelect = document.getElementById('temporadas');
        if (temporadasSelect) {
            temporadasSelect.addEventListener('change', (event) => {
                actualizarDropdownCapitulos(event.target.value);
            });
            actualizarDropdownCapitulos(0); 
        }
    }
}

mostrarInformacionPeliculaSerie();