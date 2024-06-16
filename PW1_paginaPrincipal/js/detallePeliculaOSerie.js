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


function generarTrailer(){
  const nodo_imagen = document.querySelector('.imagen')

  for(let i = 0; i < PELICULAS_Y_SERIES.length; i++){
      if (PELICULAS_Y_SERIES[i].trailer) {
      const nodo_trailer = document.createElement('iframe');
      nodo_trailer.width = 560;
      nodo_trailer.height = 315;
      nodo_trailer.src = PELICULAS_Y_SERIES[i].trailer;
      nodo_trailer.title = "YouTube video player";
      //nodo_trailer.frameBorder = 0;
      nodo_trailer.allow = 
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      nodo_trailer.allowFullscreen = true;
     }

  }

 


}

