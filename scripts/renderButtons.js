import { 
  selectionButtons,
  findMatchingId,
 } from "./data/changingButtons.js";
import { augustMovies } from "./data/dataMoviesJS/august23.js";
import { 
  uniqueArray,
  selectOffer,
  changeTrueToFalseAndRewerse,
  selectButton
 } from "./selectOffer.js";
 import { 
  renderMovies,
  } from "./renderMoviesList.js";
  import { renderFirst20Movies } from "./renderFirst20Movies.js";
  import { 
    monthGroup,
    findIndex
   } from "./dateJS.js";
import { septemberMovies } from "./data/dataMoviesJS/septemberMovies24.js";

export function checkContentVariety(array){
  let contentVariety = [];
  let finalVariety = [];

  array.forEach((content)=>{
    if(content.contentType.film){
      contentVariety.push('film'); 
    }
    if(content.contentType.serial){
      contentVariety.push('serial');
    }
    if(content.contentType.document){
      contentVariety.push('document');
    }
    if(content.contentType.forKids){
      contentVariety.push('forKids');
    }
    if(content.contentType.interactive){
      contentVariety.push('interactive');
    }
    if(content.contentType.realityTv){
      contentVariety.push('realityTV');
    }
    if(content.contentType.game){
      contentVariety.push('game');
    }
    if(content.contentType.standUp){
      contentVariety.push('standUP');
    }
  })
  finalVariety = uniqueArray(contentVariety);

  let html = ''
  finalVariety.forEach((element)=>{
    const matchingButton = findMatchingId(element);
    html += `
     <button class="select--button 
     js-select-button
     js-${matchingButton.id}-btn"
     data-select-id="${matchingButton.id}">
        <img src=${matchingButton.icon} 
        class="btn--icon" alt="" />
        ${matchingButton.name}
      </button>
    `
    document.querySelector('.js-research-buttons--container').innerHTML = html;

    document.querySelectorAll('.js-select-button')
      .forEach((button)=>{
        button.addEventListener('click', ()=>{
          const selectId = button.dataset.selectId;
          const matchingObject = findMatchingId(selectId);
      
          matchingObject.attribute = changeTrueToFalseAndRewerse(matchingObject.attribute);
          selectButton(array);

          if(matchingObject.attribute === true){
            button.classList.add('turquise');
          }else if(matchingObject.attribute === false){
            button.classList.remove('turquise');
          }
        })
      })
  })
}

checkContentVariety(septemberMovies);
