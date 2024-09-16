
export function exitCountrySlider(){
  let navBar = document.querySelector('.media--body .nav');
  let slider_Country = document.querySelector('.media--body .slider-country');
  const country_selection = document.querySelector('.media--body .slider--country--selection');
  let anchor_container_chosing = document.querySelector('.resources--container');
  
navBar.className = 'nav js-media-nav';
  slider_Country.className = 'slider-country js-slider-country';
  country_selection.className = 'slider--country--selection js-slider-country-selection';
  anchor_container_chosing.className = 'resources--container js-resources--container';
}
