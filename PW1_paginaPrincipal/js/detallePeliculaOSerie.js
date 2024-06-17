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

function generarDescripcion(){
  for(let i = 0; i < PELICULAS_Y_SERIES; i++){
    
  }
}

