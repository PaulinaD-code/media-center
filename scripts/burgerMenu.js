const burgerButton = document.querySelector('.js-burger-container');
let searchButtonVisible = document.getElementById('search-button');
let netflixLogo = document.querySelector('.js-netflix-nav-logo');
let countryburgerVariety = document.querySelector('.js-slider-country');
let langburgerVariety = document.querySelector('.js-choose-lang');

let navButtons = document.querySelector('.js--menu-btn');

function switchClass(element){
  if(element.className === 'menu--btn js--menu-btn'){
    element.className = 'menu--btn-visible js--menu-btn';
    searchButtonVisible.style.display = 'none';
    netflixLogo.className = "netflix--nav--logo netflix--nav--logo-burger-active js-netflix-nav-logo";

    document.querySelectorAll('.js-burger-line')
      .forEach((line)=>{
        line.style.display = 'none'
      })
    
      burgerButton.style.backgroundImage = `url("./img/cross.png")`;
      burgerButton.style.backgroundRepeat = 'no-repeat';
      burgerButton.style.backgroundSize = 'cover';
      burgerButton.style.backgroundPosition = 'center';
      
  }else{
    element.className = 'menu--btn js--menu-btn';
    searchButtonVisible.style.display = 'flex';
    netflixLogo.className = "netflix--nav--logo js-netflix-nav-logo";
    countryburgerVariety.className = "slider-country js-slider-country";
    langburgerVariety.className = "choose--lang-hidden js-choose-lang";

    document.querySelectorAll('.js-burger-line')
      .forEach((line)=>{
        line.style.display = 'block'
      })

      burgerButton.style.backgroundImage = `none`;
  }
}

burgerButton.addEventListener('click', ()=>{
  switchClass(navButtons);
})