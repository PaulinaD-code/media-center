import { 
  countries,
  getMatchingCountry
 } from "./data/countrySelect.js";

 import { exitCountrySlider } from "./navbarCountry.js";

 let sliderCountry = document.querySelector('.js-slider-country-selection');

function renderCountries(){
  let html = '';

  countries.forEach((country)=>{
    html += `
      <div class="country-option 
      js-country-option"
      id="${country.id}"
      data-country-id="${country.id}">
        <div class="box-of-img">
          <div class="img--box">
            <img src="../img/checked.png" class="checkedImg" alt="" />
          </div>
        </div>   
        <div class="country--name" >
         ${country.name}
        </div>
      </div> 
    `

    document.querySelector('.js-countries').innerHTML = html;

    let navBtnContainer = document.querySelector('.js--menu-btn');

    document.querySelectorAll('.js-country-option')
      .forEach((countryOption)=>{
        countryOption.addEventListener('click', ()=>{
          let countryId = countryOption.dataset.countryId;
          const matchingCountry = getMatchingCountry(countryId);

          let btnTextContent = matchingCountry.btnText ? matchingCountry.btnText : matchingCountry.name;

          document.querySelector('.js-country--name').textContent = `${btnTextContent}`;

          sliderCountry.className = 'slider--country--selection js-slider-country-selection';
          
          document.querySelector('.js-media-title').innerHTML = `Odkryj historie i wydarzenia, którymi podzielisz się ${matchingCountry.variety}`;

          let arrowImage = document.querySelector('.js-country-arrow')
      
          arrowImage.className = 'country--arrow js-country-arrow';

          exitCountrySlider();

          if(navBtnContainer.className === 'menu--btn-visible js--menu-btn'){
            navBtnContainer.className = 'menu--btn js--menu-btn'
          }
        })
      })
  })
}

renderCountries();
