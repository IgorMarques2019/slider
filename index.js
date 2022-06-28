const leftControl = document.querySelector('.leftBtn')
const rightControl = document.querySelector('.rightBtn')
const imgCarrousel = document.querySelectorAll('.controls img')
const imgBreadcumps = document.querySelector('.img-breadcumps')


// Cria um breadCumps para cada imagem.
imgCarrousel.forEach((cadaImagem) => {
  const newBread = document.createElement('div')
  newBread.classList.add('img-bread')
  imgBreadcumps.appendChild(newBread)
})




function carousselAuto(index) {

  breadSelect.forEach((item) => {
    item.classList.remove('bread-select')
  })
  breadSelect[index].classList.add('bread-select')

  imgCarrousel.forEach((item) => {
    item.classList.remove('selected', "disabled", )
  })
  imgCarrousel[index].classList.add('selected')
  // imgCarrousel[--index].classList.replace('selected', 'disabled')
}



let indexImg = 0;
let breadSelect = imgBreadcumps.querySelectorAll('.img-bread')


leftControl.addEventListener('click', () => {
  --indexImg
  if (indexImg == -1)
    indexImg = imgCarrousel.length - 1;
  carousselAuto(indexImg)

})

rightControl.addEventListener('click', () => {
  indexImg++
  if (indexImg == imgCarrousel.length)
    indexImg = 0;
  carousselAuto(indexImg)
})



imgBreadcumps.querySelectorAll('.img-bread').forEach((item, index) => {
  item.addEventListener('click', () => {
    indexImg = index;
    carousselAuto(index)
  })
})

window.onload = function () {
  intervalo = setInterval(() => {
    indexImg++
    if (indexImg == imgCarrousel.length) {
      indexImg = 0;
    }

    carousselAuto(indexImg)
  }, 6000)
}