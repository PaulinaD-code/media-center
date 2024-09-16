const searchNavBtn = document.querySelector('.burger-search-img');
let searchSlider = document.querySelector('.search--btn-input');
let searchNavContainer = document.querySelector('.search--btn-container');
const searchNavExit = document.getElementById('slider-exit-button-burger');
let langNavSlider = document.querySelector('.choose--lang-hidden');
let countryNavSlider = document.querySelector('.slider-country');
let sliderPic = document.querySelector('.cross-slider-img');
let anchorContainerChoese = document.querySelector('.resources--container');

let searchButton = document.getElementById('search-button');
let searchSliderContainer = document.querySelector('.search--btn-container');
const exitSearchBarBtn = document.querySelector('.exit-input-btn');

searchButton.addEventListener('click', ()=>{
  searchSliderContainer.classList.add('active');
})

exitSearchBarBtn.addEventListener('click', ()=>{
  searchSliderContainer.classList.remove('active');
})


