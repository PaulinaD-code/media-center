let navBtnContainer = document.querySelector('.js--menu-btn');

document.querySelectorAll('.js-language-el')
  .forEach((language)=>{
    language.addEventListener('click', ()=>{
      if(navBtnContainer.className === 'menu--btn-visible js--menu-btn'){
        navBtnContainer.className = 'menu--btn js--menu-btn'
      };
      navBar.className = 'nav'
      langSlider.className = 'choose--lang-hidden';
      anchorContainer7.className = 'resources--container';
    })
  })