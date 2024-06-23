// const carrousel= document.querySelector('.main-carrousel');

// const flkty= new Flickity (carrousel,{
//     cellAling: "left",
// })

// var elem = document.querySelector('.main-carousel');
// var flkty = new Flickity( elem, {
//   // options
//   cellAlign: 'left',
//   contain: true
// });

// // element argument can be a selector string
// //   for an individual element
// var flkty = new Flickity( '.main-carousel', {
//   // options
// });


const carousel = document.querySelector(".main-carousel");

const flkty = new Flickity(carousel, {
  groupCells: true,
  prevNextButtons: false,
  wrapAround: true,
  autoPlay: 1500,
});

function obtenerParametrosUrl(name){
  const parametrosUrl = new URLSearchParams(window.location.search)
  return parametrosUrl.get(name)
}

const id = obtenerParametrosUrl('id')
const item = PELICULAS_Y_SERIES[id]

function generarDetalleSeriePelicula(item) {
  return `
      <article class="foto">
          <div class="imagen">
              <iframe width="400em" height="250em"
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
          <h2>${item.título}</h2>
          <p><strong>Género:</strong> ${item.genero}</p>
          <p><strong>Duración:</strong> ${item.duración}</p>
          <p><strong>Sinopsis:</strong> ${item.sinopsis}</p>
      </article>
  `
}

function mostrarInformacionPeliculaSerie(){
 const container = document.getElementById('contenedor')
 if(item){
    container.innerHTML = generarDetalleSeriePelicula(item)
 }
}

mostrarInformacionPeliculaSerie()
