const Body = document.querySelector('.media--body');
const countryBtn = document.querySelector('.media--body .menu--button2');
let sliderCountry = document.querySelector('.media--body .slider-country');
const exitCountry = document.querySelector('.media--body .exitCountry');
let nav = document.querySelector('.media--body .nav');
const langChoosing = document.querySelector('.media--body .choose--lang-hidden');
const countryName = document.querySelector('.media--body .country--name');
let arrowImg = document.querySelector('.media--body .country--arrow');
let questionCountry = document.querySelector('.question-country');
const countrySelect = document.querySelector('.media--body .country--selection');
const selection = document.querySelector('.media--body .slider--country--selection');
let anchorContainerChosing = document.querySelector('.resources--container');

/* display slider */
countryBtn.addEventListener('click', function(){
  sliderCountry.className = 'slider-country-visible';
  langChoosing.className = 'choose--lang-hidden';
});

/* display countires */

countrySelect.addEventListener('click', function(){
  selection.className = 'slider--country--selection-visible';
  arrowImg.classList.add('country--arrow-active');
})

/* selecting country */

const Country = document.querySelector('.media--body .country');
const countrySelection = document.querySelector('.media--body .country--selection');
const poland = document.getElementById('pl');
const mediaTitle = document.querySelector('.media--body .media-title');

/* exit country slider */

exitCountry.addEventListener('click', function(){
  sliderCountry.className = 'slider-country';
});

window.addEventListener('click', (event)=>{
  if(event.target.className === "menu--button2 country-btn" ||
    event.target.className === "country--name js-country--name" ||
    event.target.className === "menuBtnImg js-country-img" ||
    event.target.className === "menuBtnImg js-country-img" ||
    event.target.className === "slider--exit" ||
    event.target.className === "question js-country-question" ||
    event.target.className === "country-select" ||
    event.target.className === "find--your--country" ||
    event.target.className === "country--selection" ||
    event.target.className === "country" ||
    event.target.className === "country--arrow js-country-arrow" ||
    event.target.className === "slider--country--selection js-slider-country-selection" ||
    event.target.className === "searching--pseudoclass" ||
    event.target.className === "search-style" ||
    event.target.className === "searching--country" ||
    event.target.className === "countries js-countries" ||
    event.target.className === "slider-country js-slider-country" || 
    event.target.className === "slider--country--selection-visible" ||
    event.target.className === "country--arrow js-country-arrow country--arrow-active" ||
    event.target.className === "menu--btn js--menu-btn" 
  ){
    sliderCountry.className = 'slider-country-visible';
    langChoosing.className = 'choose--lang-hidden';
  }else if(event.target.className === "country--selection"){
    selection.classList.toggle('slider--country--selection-visible');
    arrowImg.classList.toggle('active');
  } else {
      sliderCountry.className = 'slider-country';
  }
})
  








