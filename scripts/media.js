const body = document.querySelector('.media--body');
const langBtn = document.getElementById('choose--language')
let langSlider = document.querySelector('.media--body .choose--lang-hidden');
let navBar = document.querySelector('.media--body .nav');
const langExit = document.querySelector('.media--body .js-exit-language-button');
const countryChoosing = document.querySelector('.media--body .slider-country');
const inputCountry = document.querySelector('.media--body .slider--country--selection');
let questionHb = document.querySelector('.question-hb');
const resourcesBtn = document.getElementById('res-nav-el')
let anchorContainer7 = document.querySelector('.js-resources--container');

langBtn.addEventListener('click', function(){
  langSlider.className = 'choose--lang-visible';
  countryChoosing.classList = 'slider-country';
  inputCountry.className = 'slider--country--selection';
})

langExit.addEventListener('click', function(){
  navBar.className = 'nav'
  langSlider.className = 'choose--lang-hidden js-choose-lang';
  anchorContainer7.className = 'resources--container js-resources--container';
})

window.addEventListener('click', (event) => {
  if(event.target.className === "menu--button lang-btn" ||
    event.target.className === "slider--exit exit-language" ||
    event.target.className === "question js-question-language" ||
    event.target.className === "languages" ||
    event.target.className === "choose--lang-visible js-choose-lang" ||
    event.target.className === "exit--button js-exit-language-button"
  ){
    langSlider.className = 'choose--lang-visible';
    countryChoosing.classList = 'slider-country';
    inputCountry.className = 'slider--country--selection';
  }else if(event.target.className === "menu--button resources resources-btn"){
    anchorContainerResource.className = "resources--container js-resources--container resources--container-active"
 }else if(event.target.className === "resources--container js-resources--container resources--container-active"){
  anchorContainerResource.className = "resources--container js-resources--container resources--container-active"
 }
  else {
    navBar.className = 'nav'
    langSlider.className = 'choose--lang-hidden';
    anchorContainer7.className = 'resources--container';
  }
})








